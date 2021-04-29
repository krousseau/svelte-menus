<script lang="ts">
    import { onMount } from "svelte";
    import { getMenus } from "../api/menuApi";
    import type { MenuItem } from "../types/menuTypes";
    // import { menusStore } from '../menuStore';
    import { Navigate, navigateTo } from "svelte-router-spa";

    export let currentRoute;
    const menuItemId = currentRoute.namedParams.id;
    let menuItem: MenuItem = { id: -1, name: "", price: null, description: "" };

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
    <h2>Edit Menu Item</h2>

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

    <Navigate to="/">Done</Navigate>
</form>
