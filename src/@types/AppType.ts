import { AppThemeType } from "./AppThemeType";
import { ProductType } from "./ProductType";

export interface AppType {
    theme: AppThemeType
    appData : {
        title: string
        logo: string
        local: string
        siteCover: {
            callout: string
            description: string
            image: string
            serviceDifferentials: {
                shop: string,
                pack: string,
                delivery: string,
                satisfaction: string,
            }
        }
        productsName: string
    }
    products: ProductType[]
}