import AddMenuItem from './menus/AddMenuItem.svelte';
import EditMenuItem from './menus/EditMenuItem.svelte';
import MenuList from './menus/MenuList.svelte';

const routes = [
  {
    name: '/',
    component: MenuList,
  },
  {
    name: 'add-menu-item/:courseId',
    component: AddMenuItem,
  },
  {
    name: 'edit-menu-item/:id',
    component: EditMenuItem,
  }
]

export { routes };