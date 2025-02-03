import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { storage } from '$lib/client.svelte';
import { goto } from '$app/navigation';

export const ssr = false;
export const load: PageLoad = () => {
	if (!storage.game) {
		goto("/")
		error(404, "no game data");
	}
	return { game: storage.game }
};