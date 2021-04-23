<script lang="ts">
  import type { Course } from '../types/menuTypes';
  import MenuItem from './MenuItem.svelte';
  export let course: Course;
</script>

<div>
  {course.title}
  {#each course.menuItems as menuItem}
    <MenuItem {menuItem} />
  {/each}
</div>