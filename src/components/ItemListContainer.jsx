import {useState, useEffect} from "react";
import ItemList from './ItemList';
import getProducts from "../services/handMadePromise";
import { useParams } from "react-router-dom";

export default function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts
        .then((res) => {
            setProducts(res.filter(productos => {
                if(categoryId === undefined) return productos;
                return productos.category === categoryId;
            }))
        })
        .catch(err => err);
      }, [categoryId]);
    
    return (
        <div>
            <h1 className="titulos-H1">{greeting}{categoryId}</h1>
            <ItemList
                products={products}
            />
        </div>
    )
}

