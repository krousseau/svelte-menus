<script lang="ts">
  import type { MenuItem } from '../types/menuTypes';
  import { addMenuItem } from '../menuStore';
  import { Navigate, navigateTo } from 'svelte-router-spa';

  let menuItem: MenuItem = { id: -1, name: '', price: null, description: ''};

  export let currentRoute;
  const courseId = currentRoute.namedParams.courseId;
  
  // onMount(async () => {
  //   if (menusStore && menusStore.length > 0)
  //   {
  //     menuItem = menusStore[0].courses[0].menuItems[0];
  //     return;
  //   }

	// 	const menus = await getMenus();
  //   //menusStore.set(menus);
  //   menuItem = menus[0].courses[0].menuItems[0];
  //   console.log('menu item', menuItem);
	// }); 
</script>

<form>
  <h2>Add Menu Item</h2>

  <fieldset>
    <label for="name">Name</label>
    <input name="name" bind:value={menuItem.name} />
  </fieldset>
  
  <fieldset>
    <label for="description">Description</label>
    <textarea name="description" bind:value={menuItem.description} />
  </fieldset>

  <fieldset>
    <label for="price">Price</label>
    <input name="price" type="number" bind:value={menuItem.price} />
  </fieldset>

  <input type="submit" on:click|preventDefault={() => {
    console.log('saving', menuItem);
    
    menuItem.id = Math.floor(Math.random() * 10000);
    addMenuItem(courseId, menuItem);
    navigateTo('/');
  }} value="Save" />
  <Navigate to="/">Cancel</Navigate>
</form>