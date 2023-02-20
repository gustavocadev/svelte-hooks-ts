export declare const createCounter: (initialValue?: number | undefined) => {
    subscribe: (this: void, run: import("svelte/store").Subscriber<number>, invalidate?: ((value?: number | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};
