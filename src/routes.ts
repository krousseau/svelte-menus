import EditMenuItem from './menus/EditMenuItem.svelte';
import MenuList from './menus/MenuList.svelte';

const routes = [
  {
    name: '/',
    component: MenuList,
  },
  {
    name: 'edit-menu-item/:id',
    component: EditMenuItem,
  }
]

export { routes };