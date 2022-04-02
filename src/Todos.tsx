import React from 'react'
import { useQuery } from 'urql';

const LaunchesQuery = `
	{
		launchesPast(limit: 10) {
			id
			mission_name
		}
	}
`;

export const Launches = () => {
	const [result, reexecuteQuery] = useQuery({
		query: LaunchesQuery,
	});

	const { data, fetching, error } = result;

	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;

	return (
		<ul>
			{data.launchesPast.map((todo: any) => (
				<li key={todo.id}>{todo.mission_name}</li>
			))}
		</ul>
	);
};