import { readable, writable } from 'svelte/store';

const local = (key, startValue) => {
        const { subscribe, set } = writable(startValue);

        return {
                subscribe,
                set,
                useLocalStorage: () => {
                        const json = localStorage.getItem(key);
                        if (json) {
                                set(JSON.parse(json));
                        }

                        subscribe(current => {
                                if (typeof current === 'object' || Array.isArray(current)) {
                                        localStorage.setItem(key, JSON.stringify(current));
                                }
                        });
                }
        };
}

// User information
export const user = local("user", {});

// Current page
export const current = local("current", {});
