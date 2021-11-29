import LoadItems from '../services/LoadItems'
import Item from "./Item";

export default function ItemList({products}) {
    return (
        <div className="itemList" style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.length === 0 ?
            <LoadItems
            animation="wave"
          />
            :
            products.map(product => {
                return(
                <Item
                    key={product.id}
                    id={product.id}
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    pictureUrl={product.pictureUrl}
                    stock={product.stock}
                />
                )
            })}
        </div>
    )
}