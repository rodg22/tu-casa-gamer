import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import getProducts from "../services/handMadePromise";
import ItemList from './ItemList';

export const Category = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
  
    useEffect(() => {
        getProducts.then((res) => {
          setProducts(res.filter(productos => productos.category === categoryId));
        });
      }, [categoryId]);
    
    return (
        <div>
            <h1 className="titulos-H1">{categoryId}</h1>
            <ItemList
                products={products}
            />
        </div>
      );
};