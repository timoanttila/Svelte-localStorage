import { writable } from 'svelte/store'

let cartStored = localStorage.getItem("cart");
cartStored = cartStored ? JSON.parse(cartStored) : { total: 0, amount: 0, products: [] }
export const cart = writable(cartStored);
cart.subscribe(value => { localStorage.setItem("cart", JSON.stringify(value)) });
