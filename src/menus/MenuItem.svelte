<script lang="ts">
  import type { MenuItem } from '../types/menuTypes';
  
  export let menuId: number;
  export let courseId: number;
  export let menuItem: MenuItem;
</script>

<li>
  <span>{menuItem.name}</span>
  <span>{menuItem.price}</span>
  <span>{menuItem.description}</span>

  <a href="">Edit</a>
</li>