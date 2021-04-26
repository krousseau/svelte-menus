export type MenuStore = {
  id: number;
  title: string;
  courseIds: Course[];
}

export type CourseStore = {
  id: number;
  title: string;
  menuItemIds: MenuItem[];
}
