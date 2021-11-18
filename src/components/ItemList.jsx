import Item from "./Item";

export default function ItemList({products}) {
    console.log("productos del ItemList", products)
    return (
        <div class="itemList">
            {products.map(product => {
                return(
                <Item
                    key={product.id}
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    pictureUrl={product.pictureUrl}
                />
                )
            })}
        </div>
    )
}