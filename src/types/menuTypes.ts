export type Menu = {
  title: String;
  courses: Course[];
}

export type Course = {
  title: String;
  menuItems: MenuItem[];
}

export type MenuItem = {
  name: String;
  description: String;
  price: number;
}