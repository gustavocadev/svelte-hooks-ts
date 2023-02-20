import { writable } from 'svelte/store';
export const createCounter = (initialValue = 0) => {
    const { subscribe, set, update } = writable(initialValue);
    const increment = () => update((n) => n + 1);
    const decrement = () => update((n) => n - 1);
    const reset = () => set(initialValue);
    return {
        subscribe,
        increment,
        decrement,
        reset
    };
};
