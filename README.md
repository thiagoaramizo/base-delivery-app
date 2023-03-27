# base-delivery-app
Aplicativo Whitelabel para delivery com uso focado para entregas locais.

<img width="1428" alt="Captura de Tela 2023-03-26 às 22 49 16" src="https://user-images.githubusercontent.com/48260314/227821862-9970cbaa-8bd4-4a77-b52c-696c9748a310.png">

## Personalização do projeto

A aplicação pode ser alterada com a modificacão do contexto. Nesta versão o contexto utiliza o objeto contido em src/contexts/appContexts/.

O contexto utilizado a seguinte composição, baseada na interface AppType:

````bash
coffeeDeliery: AppType = {
    theme: {},
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
    products: []
  }

````

A alteração do AppContext pode permitir o consumo de uma API para sua hidratação, bastando-se alterar o reducer AppState.

## Processo de compra

As funções relacionadas à compra foram configuradas de forma genérica no contexto CartContext, permitindo sua utilizacão para variados nichos de e-commerce:

<img width="1423" alt="Captura de Tela 2023-03-26 às 22 49 31" src="https://user-images.githubusercontent.com/48260314/227821889-1719a593-2615-4662-be5e-7b9a65e71561.png">

Ao adicionar produtos ao carrinho os valores são atualizados automaticamente.

A seção de endereço é autocomplementada automaticamente com a utilização da API BrasilAPI.

<img width="1430" alt="Captura de Tela 2023-03-26 às 22 49 45" src="https://user-images.githubusercontent.com/48260314/227821924-a1e73695-4f63-4b5a-98fa-1cbe48c04898.png">

## Execução do projeto

Para acessar a aplicação funcional deste projeto acesse <a href='https://base-delivery-app.vercel.app/' target='_blank'>Base Delivery</a>.

Para executar em sua máquina clone o projeto, instale as depencências e execute o comando abaixo:

````bash
npm run dev
````


