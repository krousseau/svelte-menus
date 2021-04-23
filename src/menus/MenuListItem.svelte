<script lang="ts">
  import type { Menu } from '../types/menuTypes';
  export let menu: Menu;
  import Course from './Course.svelte';
</script>

<section>
  <h3>{menu.title}</h3>
  {#each menu.courses as course}
    <Course {course} />
  {/each}
</section>