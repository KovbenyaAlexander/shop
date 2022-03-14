export interface IStore {
  counter: number
  dataFromApi: IUser[]
}

export interface IUser{
  title: string;
  id: number
}
