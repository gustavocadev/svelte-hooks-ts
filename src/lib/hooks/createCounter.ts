import { writable } from 'svelte/store';

export const createCounter = (initialValue: number | undefined = 0) => {
	const { subscribe, set, update } = writable<number>(initialValue);

	const increment = (by = 1) => update((n) => n + by);
	const decrement = (by = 1) => update((n) => n - by);
	const reset = () => set(initialValue);

	return {
		counter: { subscribe },
		increment,
		decrement,
		reset
	};
};
