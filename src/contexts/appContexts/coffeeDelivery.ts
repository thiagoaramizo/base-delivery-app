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
            name: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            image: "/coffee-delivery/products/expresso-americano.png",
            tags: ["Tradicional"],
            price: 9.9
        },
        {
            id: `a3`,
            name: "Café Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            image: "/coffee-delivery/products/cafe-cremoso.png",
            tags: ["Tradicional"],
            price: 9.9
        },
        {
            id: `a4`,
            name: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            image: "/coffee-delivery/products/cafe-gelado.png",
            tags: ["Tradicional", "Gelado"],
            price: 9.9
        },
        {
            id: `a5`,
            name: "Café com Leite",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            image: "/coffee-delivery/products/cafe-com-leite.png",
            tags: ["Tradicional", "Com leite"],
            price: 9.9
        },
        {
            id: `a6`,
            name: "Latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            image: "/coffee-delivery/products/latte.png",
            tags: ["Tradicional", "Com leite"],
            price: 9.9
        },
        {
            id: `a7`,
            name: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            image: "/coffee-delivery/products/capuccino.png",
            tags: ["Tradicional", "Com leite"],
            price: 9.9
        },
        {
            id: `a8`,
            name: "Macchiato",
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            image: "/coffee-delivery/products/macchiato.png",
            tags: ["Tradicional", "Com leite"],
            price: 9.9
        },
        {
            id: `a9`,
            name: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            image: "/coffee-delivery/products/mocaccino.png",
            tags: ["Tradicional", "Com leite"],
            price: 9.9
        },
        {
            id: `a10`,
            name: "Chocolate Quente",
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            image: "/coffee-delivery/products/chocolate-quente.png",
            tags: ["Especial", "Com leite"],
            price: 9.9
        },
        {
            id: `a11`,
            name: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            image: "/coffee-delivery/products/cubano.png",
            tags: ["Especial", "Alcoólico", "Gelado"],
            price: 9.9
        },
        {
            id: `a12`,
            name: "Havaiano",
            description: "Bebida adocicada preparada com café e leite de coco",
            image: "/coffee-delivery/products/havaiano.png",
            tags: ["Especial"],
            price: 9.9
        },
        {
            id: `a13`,
            name: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            image: "/coffee-delivery/products/arabe.png",
            tags: ["Especial"],
            price: 9.9
        },
        {
            id: `a14`,
            name: "Irlandês",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            image: "/coffee-delivery/products/irlandes.png",
            tags: ["Especial", "Alcoólico"],
            price: 9.9
        },
        {
            id: `a15`,
            name: "Café Coado",
            description: "Café tradicional feito com coador igual o cafézinho de vó",
            image: "/coffee-delivery/products/expresso-americano.png",
            tags: ["Especial", "Da vovó"],
            price: 12.00
        },
        
    ]
}