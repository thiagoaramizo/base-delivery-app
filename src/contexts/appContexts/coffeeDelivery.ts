import { AppType } from "../../@types/AppType";

export const coffeeDeliery: AppType = {
    theme: {
        color: {
            light: `#ffffff`,
            dark: `#333333`,

            brandPrimaryLight: `#F1E9C9`,
            brandPrimary: `#DBAC2C`,
            brandPrimaryDark: `#C47F17`,

            brandSecondaryLight: `#EBE5F9`,
            brandSecondary: `#8047F8`,
            brandSecondaryDark: `#4B2995`,
            
            backgroundlight: `#ffffff`,
            background: `#F3F2F2`,
            backgroundDark: `#E6E5E5`,

            textLight: `#8D8686`,
            text: `#574F4D`,
            textDark: `#403937`,
        }
    },
    appData: {
        title: "Coffee Delivery",
        logo: "/coffee-delivery/logo.svg",
        local: "Porto Alegre, RS",
        siteCover: {
            callout: "Encontre o café perfeito para qualquer hora do dia",
            description: "Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora",
            image: "/coffee-delivery/cover-image.png",
            serviceDifferentials: {
                shop: "Compra simples e segura",
                pack: "Embalagem mantém o café intacto",
                delivery: "Entrega rápida e rastreada",
                satisfaction: "O café chega fresquinho até você"
            }
        },
        productsName: "Cafés"
    },
    products: [
        {
            id: `a1`,
            name: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            image: "/coffee-delivery/products/expresso.png",
            tags: ["Tradicional"],
            price: 9.9
        },
        {
            id: `a2`,
            name: "Café com Leite",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            image: "/coffee-delivery/products/cafe-com-leite.png",
            tags: ["Tradicional", "Com leite"],
            price: 9.9
        },
    ]
}