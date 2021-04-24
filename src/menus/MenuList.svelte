<script lang="ts">
  import { onMount } from 'svelte';
  import { getMenus } from '../api/menuApi';
  import { menusStore } from '../stores';
  import type { Menu } from '../types/menuTypes';
  import MenuListItem from './MenuListItem.svelte';

  let menus: Menu[] | null = null
  onMount(async () => {
    console.log('menu list');
    if (menusStore && menusStore.length > 0)
    {
      return;
    }

		menus = await getMenus();
    menusStore.set(menus);
	});
</script>

<main>
  <h1>Menus</h1>

  {#if menus !== null}
    {#each $menusStore as menu}
      <MenuListItem {menu} />
    {/each}
  {:else}
    <div>Loading...</div>
  {/if}
</main>