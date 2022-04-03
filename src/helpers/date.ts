const timestampToHhNnSs = (timestamp: Date) => {
	const date = timestamp ? new Date(timestamp) : new Date();
	const hh = date.getHours().toString().padStart(2, '0');
	const nn = date.getMinutes().toString().padStart(2, '0');
	const ss = date.getSeconds().toString().padStart(2, '0');
	return `${hh}:${nn}:${ss}`;
};

const timestampToYyyyMmDd = (timestamp: Date) => {
	const date = timestamp ? new Date(timestamp) : new Date();
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
};

export const timestampToYyyyMmDdHhNnSs = (timestamp: Date) => (
	`${timestampToYyyyMmDd(timestamp)} ${timestampToHhNnSs(timestamp)}`
)

export default null;
