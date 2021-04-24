<script lang="ts">
  import type { MenuItem } from '../types/menuTypes';
  import { Navigate } from 'svelte-router-spa'
  
  export let menuId: number;
  export let courseId: number;
  export let menuItem: MenuItem;
</script>

<li>
  <span>{menuItem.name}</span>
  <span>{menuItem.price}</span>
  <span>{menuItem.description}</span>

  <Navigate to={`edit-menu-item/${menuItem.id}`}>Edit</Navigate>
</li>