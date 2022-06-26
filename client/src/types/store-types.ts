export interface IStore {
  foodCards: IFoodCards;
  orderSize: number;
  isBurgerOpen: boolean;
  isLoggedIn: boolean;
  user: IUSER;
}

export interface IFoodCards {
  cold: Array<IFoodCard>;
  hot: Array<IFoodCard>;
  meet: Array<IFoodCard>;
}

export interface IFoodCard {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  weight: string;
  numberOfPurchase: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  inCart: boolean;
}

export interface IUSER {
  id: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}