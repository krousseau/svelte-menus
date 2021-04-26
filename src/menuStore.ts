import { derived, writable } from 'svelte/store';
import type { CourseStore, MenuStore } from './types/menuStoreTypes';
import type { Course, Menu, MenuItem } from './types/menuTypes';

const orderedMenuIds = writable<number[]>([]);
export const menusMap = writable<Record<number, MenuStore>>({});
export const coursesMap = writable<Record<number, CourseStore>>({});
export const menuItemsMap = writable<Record<number, MenuItem>>({});

export const menus = derived(
  [orderedMenuIds, menusMap, coursesMap, menuItemsMap],
  ([$orderedMenuIds, $menus, $courses, $menuItems]) => {
    if (Object.keys($menus).length === 0 || Object.keys($courses).length === 0 || Object.keys($menuItems).length === 0){
      // TODO: this is a hacky way of doing it. We need to do this inline since it legit can be empty
      return [];
    }

    return $orderedMenuIds.map(menuId => ({
      ...$menus[menuId],
      courses: $menus[menuId].courseIds.map(courseId => ({
        ...$courses[courseId],
        menuItems: $courses[courseId].menuItemIds.map(menuItemId => $menuItems[menuItemId])
      }))
    }))
  });

export const saveMenus = (menus: Menu[]) => {
  menusMap.set(
    Object.fromEntries(menus.map(m => ([m.id, {
      ...m,
      courseIds: m.courses.map(c => c.id)
    }])))
  );
  orderedMenuIds.set(menus.map(m => m.id));

  saveMenuCourses(menus);
  saveMenuItems(menus);
};

export const addCourse = (menuId: number, title: string): number => {
  const courseId = Math.floor(Math.random() * 10000);
  console.log('courseId', courseId);
  coursesMap.update(courses => {
    return {
      ...courses,
      [courseId]: { id: courseId, title, menuItemIds: [] }
    }
  });
  menusMap.update(menus => {
    menus[menuId].courseIds = [...menus[menuId].courseIds, courseId];
    return menus;
  });

  return courseId;
};

export const addMenuItem = (courseId: number, menuItem: MenuItem): number => {
  menuItemsMap.update(items => ({
      ...items,
      [menuItem.id]: menuItem
  }));
  coursesMap.update(courses => {
    courses[courseId].menuItemIds = [...courses[courseId].menuItemIds, menuItem.id];
    return courses;
  });
};

const saveMenuCourses = (menus: Menu[]) => {
  const courses: Record<number, CourseStore> = {};
  for (const menu of menus) {
    const menuCourses = menu.courses.map(c => ({
      ...c,
      menuItemIds: c.menuItems.map(mi => mi.id)
    }));
    for (const course of menuCourses) {
      courses[course.id] = (course);
    }
  }
  
  coursesMap.set(courses);
}

const saveMenuItems = (menus: Menu[]) => {
  const items: Record<number, MenuItem> = {};
  for (const menu of menus) {
    const menuItems = menu.courses.flatMap(c => c.menuItems);
    for (const menuItem of menuItems) {
      items[menuItem.id] = menuItem;
    }
  }
  
  menuItemsMap.set(items);
}