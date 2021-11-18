import {useState, useEffect} from "react";
import getProducts from '../services/ItemPromise'
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export default function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    console.log("Los productos del array son:", products);

    useEffect(() => {
        getProducts
        .then(res => setProducts(res))
        .catch(error => alert("Ocurrió un error:", error))
    },[])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount 
                stock={5}
                initial={1}
            />
            <ItemList
                products={products}
            />
        </div>
    )
}

