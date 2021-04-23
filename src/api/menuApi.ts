import { Menu } from '../types/menuTypes';

export function getMenus(): Promise<Menu[]> {
  return Promise.resolve([{
    title: 'Dinner',
    courses: [
      {
        title: 'Apps',
        menuItems: [
          {
            name: 'Nachos',
            description: 'Chips w/ guac, salsa and jalapenos',
            price: 8
          }
        ]
      },
      {
        title: 'Main Course',
        menuItems: [
          {
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
            name: 'Flourless Chocolate Cake',
            description: 'Rich and dense chocolate cake',
            price: 9
          }
        ]
      }
    ]
  },
  {
    title: 'Breakfast',
    courses: [
      {
        title: 'Sides',
        menuItems: [
          {
            name: 'Sweet Potato Homefries',
            description: 'Sweet potatoes fried w/ our special seasoning',
            price: 6
          }
        ]
      },
      {
        title: 'Big Plates',
        menuItems: [
          {
            name: 'Huevos Rancheros',
            description: '2 eggs, corn tortilla, black beans',
            price: 11.50
          }
        ]
      }
    ]
  }]);
}