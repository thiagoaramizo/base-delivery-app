import { ProductType } from "./ProductType"

interface CartProduct {
    product: ProductType,
    quantity: number
}

export interface CartType {
    totalProducts: number,
    totalPrice: number,
    shipPrice: number,
    totalProductsPrice: number,
    stauts: string,
    products: CartProduct[],
    address?: any,
    payMethod?: string,
    timeToDelivery?: Date,
}