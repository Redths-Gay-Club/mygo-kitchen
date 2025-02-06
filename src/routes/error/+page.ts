import type { PageLoad } from './$types';

const errorMap: {[key: string]: string} = {
	server_closed: "房主斷線了",
	name_taken: "名稱已存在",
}

export const load: PageLoad = (event) => {
	const url = new URL(event.url)
	const errorName = url.searchParams.get("name") || "server_closed";
	const error = errorMap[errorName] || errorName;
	return { error }
};