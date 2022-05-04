export interface IAddress {
  zipcode: string,
  city: string,
  street: string
}

export interface IUser {
  id: number,
  name: string,
  email: string,
  address: IAddress
}