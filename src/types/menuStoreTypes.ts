export type MenuStore = {
  id: number;
  title: string;
  courseIds: number[];
}

export type CourseStore = {
  id: number;
  title: string;
  menuItemIds: number[];
}
