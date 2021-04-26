<script lang="ts">
  import { onMount } from 'svelte';
  import { getMenus } from '../api/menuApi';
  import { saveMenus, menus, menusMap } from '../menuStore';
  import MenuListItem from './MenuListItem.svelte';

  onMount(async () => {
    if ($menus.length > 0) {
      console.log('menu list - no fetch required');
      return;
    }

    console.log('menu list - fetching');
		const menusResp = await getMenus();
    saveMenus(menusResp);
	});
</script>

<main>
  <h1>Menus</h1>

  {#if menus !== null}
    {#each $menus as menu}
      <MenuListItem {menu} />
    {/each}
  {:else}
    <div>Loading...</div>
  {/if}
</main>