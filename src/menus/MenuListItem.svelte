<script lang="ts">
  import type { Menu } from '../types/menuTypes';
  import Course from './Course.svelte';
  import { menusStore } from '../stores';

  export let menu: Menu;
</script>

<section>
  <h3>{menu.title}</h3>
  <button on:click|preventDefault={() => {
    menusStore.update(menus => {
      return menus.map(m => {
        return m.id === menu.id ?
          { ...m, courses: [...m.courses, { id: 1000, title: 'foo', menuItems: [] }] } :
          m;
      });
    });
  }}>Add Course</button>
  {#each menu.courses as course}
    <Course
      menuId={menu.id}
      {course} />
  {/each}
</section>