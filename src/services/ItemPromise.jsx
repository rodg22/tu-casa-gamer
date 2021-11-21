const itemsData = [
    {
        "id":1,
        "pictureUrl":"https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/es_LA/hardware/switch/nintendo-switch-neon-new-package/gallery/image01?v=2021111513",
        "title":"Nintendo Switch",
        "description": "switch",
        "category":"Consolas",
        "price": "400",
        "stock": "10"
    },
    {
        "id":2,
        "pictureUrl":"https://images.fravega.com/f500/e24171063a6f9d21eb89c7d9eae6bc5a.jpg",
        "title":"Playstation 5",
        "description": "ps5",
        "category":"Consolas",
        "price": "500",
        "stock": "2"
    },
    {
        "id":3,
        "pictureUrl":"https://cdn.alfabetajuega.com/wp-content/uploads/2020/11/1604491465_802334_1604582279_noticia_normal-780x405.jpg",
        "title":"X-box S series",
        "description": "x-box",
        "category":"Consolas",
        "price": "400",
        "stock": "5"
    },
    {
        "id":4,
        "pictureUrl":"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/7/28/pmjkmhqo940brpe98wz6/fifa-22-logo-mbappe",
        "title":"FIFA 22",
        "description": "Football game",
        "category":"Juegos de Playstation 5",
        "price": "30",
        "stock": "25"
    },
    {
        "id":5,
        "pictureUrl":"https://www.masgamers.com/wp-content/uploads/2017/01/NintendoSwitch_TLOZBreathoftheWild_boxart_SmallBundle-e1484295047121.jpg",
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