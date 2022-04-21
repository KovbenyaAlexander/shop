import { IStore } from '../types/store-types';

export const initialStore: IStore = {
  counter: 100,
  dataFromApi: [],
  orderSize: 7,
  isModalOpen: false,
  foodCards: {
    cold: [
      {
        id: '1',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food1.png',
        weight: '100г',
        numberOfPurchase: 1,
        protein: 125,
        fat: 564,
        carbohydrates: 458,
        calories: 954,
        inCart: true,
      },
      {
        id: '2',
        name: 'Индейка',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 200,
        image: './food2.png',
        weight: '1000г',
        numberOfPurchase: 5,
        protein: 675,
        fat: 852,
        carbohydrates: 245,
        calories: 257,
        inCart: true,
      },
      {
        id: '3',
        name: 'Гусь',
        description: 'Фаршированный яблоками',
        price: 300,
        image: './food3.png',
        weight: '10000г',
        numberOfPurchase: 1,
        protein: 527,
        fat: 258,
        carbohydrates: 5887,
        calories: 327,
        inCart: true,
      },
      {
        id: '4',
        name: 'Утка',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 400,
        image: './food4.png',
        weight: '100000г',
        numberOfPurchase: 0,
        protein: 856,
        fat: 357,
        carbohydrates: 578,
        calories: 238,
        inCart: false,
      },
      {
        id: '5',
        name: 'Ягненок',
        description: 'Фаршированная рисом, курагой и айвой',
        price: 500,
        image: './food2.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 9574,
        fat: 554,
        carbohydrates: 543,
        calories: 453,
        inCart: false,
      },
      {
        id: '6',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food1.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 322,
        fat: 876,
        carbohydrates: 234,
        calories: 236,
        inCart: false,
      },
    ],
    hot: [
      {
        id: '111',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 100,
        image: './food4.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 5647,
        fat: 664,
        carbohydrates: 532,
        calories: 2365,
        inCart: false,
      },
      {
        id: '112',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 110,
        image: './food1.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 632,
        fat: 353,
        carbohydrates: 539,
        calories: 632,
        inCart: false,
      },
      {
        id: '113',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 120,
        image: './food3.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 236,
        fat: 952,
        carbohydrates: 453,
        calories: 369,
        inCart: false,
      },
      {
        id: '114',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 130,
        image: './food2.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 326,
        fat: 266,
        carbohydrates: 2536,
        calories: 3652,
        inCart: false,
      },
      {
        id: '115',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 140,
        image: './food3.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 537,
        fat: 436,
        carbohydrates: 342,
        calories: 463,
        inCart: false,
      },
      {
        id: '116',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 150,
        image: './food2.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 364,
        fat: 463,
        carbohydrates: 36873,
        calories: 2374,
        inCart: false,
      },
      {
        id: '117',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 160,
        image: './food1.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 346,
        fat: 52,
        carbohydrates: 3453,
        calories: 346,
        inCart: false,
      },
      {
        id: '118',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 170,
        image: './food4.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 697,
        fat: 372,
        carbohydrates: 346,
        calories: 43,
        inCart: false,
      },
    ],

    meet: [
      {
        id: '119',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 180,
        image: './food3.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 435,
        fat: 4393,
        carbohydrates: 4636,
        calories: 4365,
        inCart: false,
      },
      {
        id: '120',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 190,
        image: './food4.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 543,
        fat: 643,
        carbohydrates: 123,
        calories: 453,
        inCart: false,
      },
      {
        id: '121',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 200,
        image: './food1.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 46343,
        fat: 856,
        carbohydrates: 324,
        calories: 94523,
        inCart: false,
      },
      {
        id: '122',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 210,
        image: './food2.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 2452,
        fat: 237,
        carbohydrates: 735,
        calories: 3753,
        inCart: false,
      },
      {
        id: '123',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 220,
        image: './food3.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 1425,
        fat: 272,
        carbohydrates: 73783,
        calories: 272,
        inCart: false,
      },
      {
        id: '124',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 230,
        image: './food4.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 2753,
        fat: 572,
        carbohydrates: 7524,
        calories: 724,
        inCart: false,
      },
      {
        id: '125',
        name: 'Ягненок',
        description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
        price: 240,
        image: './food1.png',
        weight: '100г',
        numberOfPurchase: 0,
        protein: 752,
        fat: 7335,
        carbohydrates: 452,
        calories: 258,
        inCart: false,
      },

    ],
  },
};
