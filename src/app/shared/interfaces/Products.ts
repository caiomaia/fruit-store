export interface ProductsList {
  products: Product[]
}

export interface Product {
  id: number
  name: string
  category?: string
  unitPrice: number
  description: string
  stock: number
  pathImage: string
}

export interface CartProduct {
  id: number
  name: string
  unitPrice: number
  quantity: number
  pathImage: string,
  totalPrice: number
}

export interface ManageProduct {
  id: number
  name: string
  category: string
  unitPrice: number
  quantity: number
}
