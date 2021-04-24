export type Menu = {
  id: number;
  title: string;
  courses: Course[];
}

export type Course = {
  id: number;
  title: string;
  menuItems: MenuItem[];
}

export type MenuItem = {
  id?: number;
  name: string;
  description: string;
  price: number | null;
}