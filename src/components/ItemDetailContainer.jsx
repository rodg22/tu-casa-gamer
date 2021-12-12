import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const switchRef = doc(db, "items", itemId)
    getDoc(switchRef).then((snapshot) => {
    if (snapshot.exists()) {
      setItem({ ...snapshot.data(), id: snapshot.id });
    }
    });
  }, [itemId]);

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;