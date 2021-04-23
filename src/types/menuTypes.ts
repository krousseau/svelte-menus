export type Menu = {
  id: number;
  title: String;
  courses: Course[];
}

export type Course = {
  id: number;
  title: String;
  menuItems: MenuItem[];
}

export type MenuItem = {
  id: number;
  name: String;
  description: String;
  price: number;
}