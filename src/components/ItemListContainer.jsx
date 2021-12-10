import {useState, useEffect} from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollectionRef = collection(db, "items");

        function getProducts(itemsCollectionQuery) {
            getDocs(itemsCollectionQuery)
                .then((snapshot) => {
                    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                })
                .catch(err => err)
        }
        
        if (categoryId === undefined) {
            getProducts(itemsCollectionRef)
        } else {
            const q = query(
                itemsCollectionRef,
                where("category", "==", `${categoryId}`)
            )
            getProducts(q)
        }
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

