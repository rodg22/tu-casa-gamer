import {useState, useEffect} from "react";
import ItemList from './ItemList';
import axios from 'axios';

export default function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const getAxios = await axios.get('../JSON/DataList.json');
        const responseAxios = getAxios.data;
        setProducts(responseAxios);
    }

     useEffect(() => {
        setTimeout(() => 
            getProducts(),
            2000);
    }, []);
    
    return (
        <div>
            <h1 className="titulos-H1">{greeting}</h1>
            <ItemList
                products={products}
            />
        </div>
    )
}

