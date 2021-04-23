<script lang="ts">
  import type { Menu } from '../types/menuTypes';
  import Course from './Course.svelte';
  import { menusStore } from '../stores';

  export let menu: Menu;
</script>

<section>
  <h3>{menu.title}</h3>
  <button on:click|preventDefault={() => {
    console.log('add course');
    console.log('menus', $menusStore);
  }}>Add Course</button>
  {#each menu.courses as course}
    <Course {course} />
  {/each}
</section>