export default function Item({title, description, price, pictureUrl}) {
    return(
        <div class="item">
            <img src={pictureUrl} alt="imagendeproducto" />
            <h2>{title}</h2>
            <h3>{description}</h3>
            <p>US$ {price}</p>
        </div>
    )
}