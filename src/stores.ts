import { writable } from 'svelte/store';
import type { Menu } from './types/menuTypes';

export const menusStore = writable<Menu[]>([]);
