const itemsData = [
    {
        "id":1,
        "pictureUrl":"./assets",
        "title":"Nintendo Switch",
        "description": "switch",
        "category":"Consolas",
        "price": "400",
        "stock": "10"
    },
    {
        "id":2,
        "pictureUrl":"",
        "title":"Playstation 5",
        "description": "ps5",
        "category":"Consolas",
        "price": "500",
        "stock": "2"
    },
    {
        "id":3,
        "pictureUrl":"",
        "title":"X-box",
        "description": "x-box",
        "category":"Consolas",
        "price": "400",
        "stock": "5"
    },
    {
        "id":4,
        "pictureUrl":"",
        "title":"FIFA 22",
        "description": "Football game",
        "category":"Juegos de Playstation 5",
        "price": "30",
        "stock": "25"
    },
    {
        "id":5,
        "pictureUrl":"",
        "title":"Zelda: Breath of the wild",
        "description": "juego de switch",
        "category":"Juegos de Nintendo Switch",
        "price": "30",
        "stock": "7"
    }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(itemsData)
        reject("Falló la promesa.");
    }, 2000)
});

export default getProducts;