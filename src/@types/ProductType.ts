export interface ProductType {
    id: string
    name: string
    description: string
    image: string
    tags: string[]
    price: number
    quantity?: number
}