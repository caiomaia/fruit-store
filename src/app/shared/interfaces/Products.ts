export interface ProductsList {
  products: Product[]
}

export interface Product {
  id: number
  name: string
  category: string
  unitPrice: number
  description: string
  stock: number
  pathImage: string
}
