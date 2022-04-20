export interface IStore {
  counter: number
  dataFromApi: IUser[]
  foodCards: IFoodCards
  orderSize: number
  isModalOpen: boolean
}

export interface IFoodCards {
  cold: Array<IFoodCard>
  hot: Array<IFoodCard>
  meet: Array<IFoodCard>
}

export interface IFoodCard {
  id: string
  name: string
  price: number
  image: string
  description: string
  weight: string
  numberOfPurchase: number
  protein: number
  fat: number
  carbohydrates: number
  calories: number
  inCart: boolean
}
export interface IUser{
  title: string;
  id: number
}
