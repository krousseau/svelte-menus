<script lang="ts">
  import type { Menu } from '../types/menuTypes';
  import Course from './Course.svelte';
  import { addCourse } from '../menuStore';

  export let menu: Menu;
</script>

<section>
  <h3>{menu.title}</h3>
  <button on:click|preventDefault={() => {
    addCourse(menu.id, 'foo');
  }}>Add Course</button>
  {#each menu.courses as course}
    <Course
      menuId={menu.id}
      {course} />
  {/each}
</section>