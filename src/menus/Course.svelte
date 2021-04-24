<script lang="ts">
  import type { Course } from '../types/menuTypes';
  import MenuItem from './MenuItem.svelte';
  import { menusStore } from '../stores';

  export let menuId: number;
  export let course: Course;
</script>

<div>
  <div>{course.title}</div>
  <button on:click={() => {
    menusStore.update(menus => {
      return menus.map(m => {
        return m.id === menuId ?
          {
            ...m, 
            courses: m.courses.map(c => {
              return c.id === course.id ?
                { ...c, menuItems: [...c.menuItems, { name: 'New Item', price: 5, description: 'blah blah blah' }] } :
                c
            })
          } :
          m
        });
    });
  }}>Add Menu Item</button>
  {#each course.menuItems as menuItem}
    <MenuItem
      {menuId}
      courseId={course.id}
      {menuItem} />
  {/each}
</div>