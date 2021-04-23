import { Menu } from '../types/menuTypes';

export function getMenus(): Promise<Menu[]> {
  return Promise.resolve([{
    id: 1,
    title: 'Dinner',
    courses: [
      {
        id: 10,
        title: 'Apps',
        menuItems: [
          {
            id: 20,
            name: 'Nachos',
            description: 'Chips w/ guac, salsa and jalapenos',
            price: 8
          }
        ]
      },
      {
        id: 11,
        title: 'Main Course',
        menuItems: [
          {
            id: 21,
            name: 'Grain bowl',
            description: 'Rice w/ sweet potatoes, cauliflower, beans and hot sauce',
            price: 16
          }
        ]
      },
      {
        title: 'Dessert',
        menuItems: [
          {
            id: 22,
            name: 'Flourless Chocolate Cake',
            description: 'Rich and dense chocolate cake',
            price: 9
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Breakfast',
    courses: [
      {
        id: 12,
        title: 'Sides',
        menuItems: [
          {
            id: 23,
            name: 'Sweet Potato Homefries',
            description: 'Sweet potatoes fried w/ our special seasoning',
            price: 6
          }
        ]
      },
      {
        id: 13,
        title: 'Big Plates',
        menuItems: [
          {
            id: 24,
            name: 'Huevos Rancheros',
            description: '2 eggs, corn tortilla, black beans',
            price: 11.50
          }
        ]
      }
    ]
  }]);
}