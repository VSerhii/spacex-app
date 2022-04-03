import React, { useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import styled from 'styled-components';
import Scrollbar from '../Scrollbar';
import { timestampToYyyyMmDdHhNnSs } from '../../helpers/date'
import ModalYoutube from '../ModalYotubeVideo';
import { useTranslation } from 'react-i18next';

// get youtube video id
const youtube_parser = (url: string): string | null => {
	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
	const match = url.match(regExp);
	return (match && match[7].length == 11) ? match[7] : null;
}

const getLaunchStatus = (value: boolean | null) => {
	if (value === null) return "no info";
	return value ? "successful" : "unsuccessful"
}

const Table = ({ tableColumns, tableData }: any) => {
	const { t, i18n } = useTranslation()

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [_videoId, setVideoId] = useState<string | null>(null);
	const columns = useMemo(() => tableColumns, [i18n.language])
	const data = useMemo(() => tableData, [])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		allColumns,
	} = useTable({
		columns,
		data,
	},
		useSortBy
	)

	return (
		<DivWrapper>
			<Scrollbar>
				<DivSection>
					<DivLable>SpaceX App</DivLable>
					<DivColumnsControl>{allColumns.map(column => (
						<div key={column.id}>
							<input type="checkbox" {...column.getToggleHiddenProps()} />
							{column.Header}
						</div>
					))}</DivColumnsControl>
				</DivSection>
				<TableStyled {...getTableProps()}>
					<thead>
						{headerGroups.map(headerGroup => (
							<TrStyled {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<ThHead {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render(t('Header'))}</ThHead>
								))}
							</TrStyled>
						))}
					</thead>
					<TbodyStyled {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row)
							return (
								<TrStyled {...row.getRowProps()}>
									{row.cells.map(cell => {
										let renderCell = cell.render('Cell');
										if (cell.column.id === "launch_date_local") {
											renderCell = timestampToYyyyMmDdHhNnSs(cell.value)
										}
										if (cell.column.id === "launch_success") {
											renderCell = getLaunchStatus(cell.value)
										}
										if (cell.column.id === 'links.video_link') {
											renderCell = (
												<button onClick={() => {
													setVideoId(youtube_parser(cell.value))
													setIsModalOpen(true)
												}} >
													Watch
												</button>
											)
										}
										return <TdStyled {...cell.getCellProps()}>{renderCell}</TdStyled>
									})}
								</TrStyled>
							)
						})}
					</TbodyStyled>
				</TableStyled>
				{isModalOpen && <ModalYoutube videoId={_videoId} onClose={() => setIsModalOpen(!isModalOpen)} />}
			</Scrollbar>
		</DivWrapper>
	)
}
const DivWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	height: 100vh;
`

const DivSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 50px;
	margin: 0 28px;
  border-bottom: 2px solid ${({ theme }) => theme.text.primary};
`

const DivLable = styled.div`
	display: flex;
	flex: 1;
`

const DivColumnsControl = styled.div`
	display: flex;
`;

const TableStyled = styled.table`
	padding: 0 20px 20px 20px;
  text-align: left;
  position: relative;
	min-height: 100%;
  width: 100%;
  border-collapse: separate;
  border-spacing:0 5px;
  td {
    :first-child {
      border-radius: 10px 0 0 10px;
    };
    :last-child {
      border-radius: 0 10px 10px 0;
    ;}
  };
`;

const TrStyled = styled.tr`
  margin-bottom: 5px;
`;

const TbodyStyled = styled.tbody`
  td {
    background-color: ${({ theme }) => theme.table.background};
  };
  tr:hover td {
    background-color: ${({ theme }) => theme.table.hover};
  };
`;

const ThHead = styled.th`
  height: 50px;
  padding: 0 30px;
  text-align: left;
  color: ${({ theme: { text: { secondary } } }) => secondary};
  background-color: ${({ theme: { main } }) => main};
  white-space: nowrap;
  user-select: none;
  vertical-align: middle;
	position: sticky;
  top: 0;
`;

const TdStyled = styled.td`
  vertical-align: middle;
  height: 50px;
  padding: 0 30px;
`;

export default Table;