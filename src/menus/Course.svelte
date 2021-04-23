<script lang="ts">
  import type { Course } from '../types/menuTypes';
  import MenuItem from './MenuItem.svelte';
  export let course: Course;
</script>

<div>
  <div>{course.title}</div>
  <button on:click={() => console.log('add menu item')}>Add Menu Item</button>
  {#each course.menuItems as menuItem}
    <MenuItem {menuItem} />
  {/each}
</div>