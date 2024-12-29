export const formatDateForKeoss = (date: string) =>
	new Date(date).toUTCString().split(' ').slice(0, -1).join(' ');
