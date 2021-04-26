<script lang="ts">
  import { Navigate } from 'svelte-router-spa';

  import type { Course } from '../types/menuTypes';
  import MenuItem from './MenuItem.svelte';

  export let menuId: number;
  export let course: Course;
</script>

<div>
  <div>{course.title}</div>  
  <Navigate to={`add-menu-item/${course.id}`}>Add Menu Item</Navigate>
  {#each course.menuItems as menuItem}
    <MenuItem
      {menuId}
      courseId={course.id}
      {menuItem} />
  {/each}
</div>