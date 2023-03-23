import { ProductType } from "./ProductType"

export interface CartProductType extends ProductType {
    quantity: number
}

export interface CartType {
    shipPrice: number,
    stauts: string,
    products: CartProductType[],
    address?: any,
    payMethod?: string,
    timeToDelivery?: Date,
    addToCart: ( product: CartProductType ) => void
    editProductOnCart: ( product: CartProductType ) => void
    removeProductOfCart: ( product: CartProductType ) => void
    setPaymentMethod: ( paymentMethod: string ) => void
}