import React, {useState} from 'react';

export default function ItemCount({stock, initial}){
    
    const [contador, setContador] = useState(initial);

    
    const restar = () => {
        const qty = contador - 1;
        if(qty >= initial) {
            setContador(qty)
        }
    };

    const sumar = () => {
        const qty = contador + 1;
        if(qty <= stock) {
            setContador(qty)
        };
    };

    const onAdd = () => {
        const message = `Agregaste ${contador} item`;
        (contador > 1) ? alert(`${message}s`) : alert(message);
    };

    return(
        <div>
            <div>
                <h3>Item N°1</h3>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}
