import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { useQuery } from 'urql';
import { launchesPastQuery } from '../../queries/launchesPast'
import Table from '../Table';
import LoadingSpinner from '../LoadingSpinner'
import { useTranslation } from 'react-i18next';

const Launches = () => {
	const [queryVariables, setQueryVariables] = useState({ offset: 0, limit: 30 })
	const { t } = useTranslation();
	const [result] = useQuery({ query: launchesPastQuery, variables: queryVariables });
	const { data, fetching, error } = result;
	const [localData, setLocalData] = useState()

	const columns = [
		{
			Header: t("Mission name"),
			accessor: 'mission_name',
		},
		{
			Header: t("Rocket name"),
			accessor: 'rocket.rocket_name',
		},
		{
			Header: t("Date"),
			accessor: 'launch_date_local',
		},
		{
			Header: t("Status"),
			accessor: 'launch_success',
		},
		{
			Header: t("Video"),
			accessor: 'links.video_link',
			disableSortBy: true
		},
	];

	const onScrollBottom = () => {
		setQueryVariables({ offset: queryVariables.offset, limit: queryVariables.limit + 10 })
	}

	return (
		<DivContent>
			{error && <p>Oh no... {error.message}</p>}
			{fetching && <LoadingSpinner />}
			<Table tableColumns={columns} tableData={data?.launchesPast || []} onScrollBottom={onScrollBottom} />
		</DivContent>
	);
};

const DivContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export default Launches

