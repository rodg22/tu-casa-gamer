export default function ItemDetail({item}) {
    const { pictureUrl, title, description, price, stock} = item;
    return (
      <>
        <h2>{title}</h2>
        <h3>US$ {price}</h3>
        <img src={`${pictureUrl}`} alt={`${pictureUrl}`}></img>
        <p>{description}</p>
        <p>Stock: {stock}</p>
      </>
    );
};
