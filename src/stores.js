//import { readable, derived } from 'svelte/store'
import { writable } from 'svelte-persistent-store/dist/local'

export const lang = writable('lang', 'en')
