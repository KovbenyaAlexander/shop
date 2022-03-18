export interface IStore {
  counter: number
  dataFromApi: IUser[]
  foodCards: IFoodCards
}

export interface IFoodCards {
  cold: Array<IFoodCard>
  hot: Array<IFoodCard>
  meet: Array<IFoodCard>
}

export interface IFoodCard {
  id: number
  name: string
  price: number
  image: string
  description: string
  weight: string
  numberOfPurchase: number
}
export interface IUser{
  title: string;
  id: number
}
