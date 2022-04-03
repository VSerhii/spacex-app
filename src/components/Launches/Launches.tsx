import React from 'react'
import styled from 'styled-components';
import { useQuery } from 'urql';
import { launchesPastQuery } from '../../queries/launchesPast'
import Table from '../Table';
import LoadingSpinner from '../LoadingSpinner'
import { useTranslation } from 'react-i18next';

const Launches = () => {
	const { t } = useTranslation();
	const [result] = useQuery({ query: launchesPastQuery, variables: { offset: 0, limit: 30 } });
	const { data, fetching, error } = result;

	if (error) return <p>Oh no... {error.message}</p>;

	if (fetching) {
		return (
			<LoadingSpinner />
		)
	}

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

	return (
		<DivContent>
			<Table tableColumns={columns} tableData={data.launchesPast} />
		</DivContent>
	);
};

const DivContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export default Launches

