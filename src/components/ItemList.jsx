import LoadItems from '../services/LoadItems'
import Item from "./Item";

export default function ItemList({products}) {
    console.log("productos del ItemList", products)
    return (
        <div className="itemList" style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between"}}>
            {products.length === 0 ?
            <LoadItems
            animation="wave"
          />
            :
            products.map(product => {
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