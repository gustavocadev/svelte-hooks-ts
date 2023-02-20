export declare const createCounter: (initialValue?: number | undefined) => {
    counter: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<number>, invalidate?: ((value?: number | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    };
    increment: (by?: number) => void;
    decrement: (by?: number) => void;
    reset: () => void;
};
