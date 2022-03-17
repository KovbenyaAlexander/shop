import { IStore } from '../types/store-types';

export const initialStore: IStore = {
  counter: 100,
  dataFromApi: [],
  foodCards: {
    cold: [
      {
        id: 1,
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food1.png',
        weight: '100г',
      },
      {
        id: 11,
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food2.png',
        weight: '100г',
      },
      {
        id: 111,
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food3.png',
        weight: '100г',
      },
      {
        id: 11111,
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food4.png',
        weight: '100г',
      },
    ],
    hot: [
      {
        id: 2,
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food1.png',
        weight: '100г',
      },
    ],

    meet: [{
      id: 3,
      name: 'Ягненок',
      description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
      price: 100,
      image: './food1.png',
      weight: '100г',
    }],
  },
};
