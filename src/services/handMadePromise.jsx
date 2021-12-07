const data = [
    {
        "id":1,
        "pictureUrl":"https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/es_LA/hardware/switch/nintendo-switch-neon-new-package/gallery/image01?v=2021111513",
        "title":"Nintendo Switch",
        "description": "Nintendo Switch es una consola desmontable, que puede usarse en modo portátil, sobremesa o en la TV; esto te brindará la posibilidad de utilizarla donde quieras y compartir sus controles. Los Joy-con cuentan con botones especiales para realizar print de pantalla. Además, posee una cámara infrarroja que puede leer la distancia respecto a los objetos e incluso detectar formas. Adaptada a tus necesidades. Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 32 GB. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.",
        "category":"CONSOLAS",
        "price": "400",
        "stock": "10"
    },
    {
        "id":2,
        "pictureUrl":"https://www.perozzi.com.ar/24465-large_default/sony-play-station-5-hw-cfi-1015a-standard-1-joystick-c-juego-ratchet-and-clank-342080620.jpg",
        "title":"Playstation 5",
        "description": "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.",
        "category":"CONSOLAS",
        "price": "500",
        "stock": "2"
    },
    {
        "id":3,
        "pictureUrl":"https://cdn.alfabetajuega.com/wp-content/uploads/2020/11/1604491465_802334_1604582279_noticia_normal-780x405.jpg",
        "title":"X-box S series",
        "description": "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. La nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.",
        "category":"CONSOLAS",
        "price": "400",
        "stock": "5"
    },
    {
        "id":4,
        "pictureUrl":"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/7/28/pmjkmhqo940brpe98wz6/fifa-22-logo-mbappe",
        "title":"FIFA 22",
        "description": "FIFA 22 es un videojuego de fútbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.",
        "category":"JUEGOS",
        "price": "30",
        "stock": "25"
    },
    {
        "id":5,
        "pictureUrl":"https://www.masgamers.com/wp-content/uploads/2017/01/NintendoSwitch_TLOZBreathoftheWild_boxart_SmallBundle-e1484295047121.jpg",
        "title":"Zelda: Breath of the wild",
        "description": "Olvida todo lo que sabes acerca de los juegos de la serie The Legend of Zelda. Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie. Viaja a través de praderas y bosques, y alcanza cimas de montañas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura al aire libre. Ahora con Nintendo Switch, tu aventura será más libre y extensa que nunca. Lleva tu consola y vive una gran aventura como Link de la manera que más te guste.",
        "category":"JUEGOS",
        "price": "30",
        "stock": "7"
    },
    {
        "id":6,
        "pictureUrl":"https://i.blogs.es/eaaf81/ps5-mando/450_1000.jpeg",
        "title":"Joystick PS5",
        "description": "Control inalambrico de Sony Playstation 5: Experimente una profunda sensación de inmersión con el controlador inalámbrico Sony DualSense , que está especialmente diseñado para la consola de juegos PlayStation 5. Además de tener botones de juego sensibles, dos palancas analógicas, un D-pad y un panel táctil capacitivo de 2 puntos en el que se puede hacer clic, el DualSense mejora las experiencias de juego compatibles con retroalimentación háptica vibratoria que le permite sentir varios efectos, golpes y texturas de la superficie . Los disparadores adaptativos presentan niveles de resistencia dinámica que están diseñados para simular con precisión los impactos y las presiones de los objetos y actividades del juego, como tirar de un arco y sentir las diferencias del disparador al cambiar de arma. Además, el sistema de detección de movimiento de seis ejes puede controlar los juegos compatibles simplemente moviendo el controlador inalámbrico en diferentes direcciones.",
        "category":"ACCESORIOS",
        "price": "50",
        "stock": "4"
    },
    {
        "id":7,
        "pictureUrl":"https://playmania438.com.ar/wp-content/uploads/2019/05/joystick-ps4-dualshock-4-original-sony-joy-ps4-color-negro-d_nq_np_751211-mla20491441051_112015-o1-8158da221044f702fc15381633450716-1024-1024-1.jpg",
        "title":"Joystick PS4",
        "description": "Control inalambrico de Sony Playstation 4.",
        "category":"ACCESORIOS",
        "price": "30",
        "stock": "15"
    },
    {
        "id":8,
        "pictureUrl":"https://planetagames.com.ar/wp-content/uploads/2018/11/Pro-Controller-Nintendo-Switch-Front-WEB.jpg",
        "title":"Joystick Pro Controller",
        "description": "Control inalambrico de Nintendo Switch. Larga duracion de bateria.",
        "category":"ACCESORIOS",
        "price": "50",
        "stock": "3"
    },
    {
        "id":9,
        "pictureUrl":"https://spacegamer.com.ar/img/Public/1058-producto-ac47b587-f68f-4286-9c16-fc460ede1044-8217.jpg",
        "title":"Joystick Xbox",
        "description": "Control inalambrico de Xbox series S.",
        "category":"ACCESORIOS",
        "price": "40",
        "stock": "6"
    },
    {
        "id":10,
        "pictureUrl":"https://cdn.pccomponentes.com/blog/gaming/ps4pro.jpg",
        "title":"PS4 Pro",
        "description": "Borra los límites de la realidad con la consola PlayStation® 4 Pro. Más rápido, más potente y con juegos en un televisor 4K.",
        "category":"CONSOLAS",
        "price": "400",
        "stock": "12"
    },
    {
        "id":11,
        "pictureUrl":"https://i.etsystatic.com/18319927/r/il/b2b140/2346285245/il_570xN.2346285245_ooco.jpg",
        "title":"Mario kart 8 Deluxe",
        "description": "Mario kart 8 deluxe: Vuelve a disfrutar de un exito de wii u ahora en tu Nintendo Switch.",
        "category":"JUEGOS",
        "price": "30",
        "stock": "5"
    },
    {
        "id":12,
        "pictureUrl":"https://m.media-amazon.com/images/I/512qDElt0RL.jpg",
        "title":"Resident evil 8 PS5",
        "description": "Resident Evil 8 quiere mostrar las distintas caras del terror en una aldea repleta de peligros, bajo el yugo de cuatro jerarcas (Lady Dimitrescu, Moreau, Donna Benaviento, Heisenberg) y una gran villana con un objetivo que no destriparemos, Madre Miranda, pero que conecta directamente con Chris y con toda la saga.",
        "category":"JUEGOS",
        "price": "50",
        "stock": "3"
    }
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts