import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useCart } from "../context/CartContext";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

const inputs = [
  {
    label: "Nombre completo",
    name: "nombre",
  },
  {
    label: "Celular",
    name: "celular",
  },
  {
    label: "Mail",
    name: "mail",
  },
];

const Form = () => {
  const { cart, cartTotal, clear } = useCart();

  const [buyer, setBuyer] = useState({
    nombre: "",
    celular: "",
    mail: "",
  });

  const onChange = (event) => {
    setBuyer({ ...buyer, [event.target.name]: event.target.value });
  };
  const ordenConfirmada = () => {
    //2-REDIRIGIR A HOME LUEGO DE OPRIMIR OK
    const order = {
      buyer,
      items: cart,
      total: cartTotal(),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    const batch = writeBatch(db);

    cart.forEach((item) => {
      const itemRef = doc(db, "items", item.id);
      batch.update(itemRef, { stock: item.stock - item.quantity });
    });

    batch.commit();

    addDoc(ordersCollection, order).then(({ id }) => {
      swal(
        "¡ORDEN CONFIRMADA!",
        `N°orden: ${id}. Se enviaron los detalles de la compra a tu mail: ${buyer.mail}`,
        "success"
      );
      clear();
    });
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart-vacio">
          <h1>¿Querés seguir comprando?</h1>
          <button className="cart-vacio-home">
            <Link to="/">Volver al catálogo</Link>
          </button>
        </div>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "60px",
            }}
          >
            <Typography variant="h5" color="#262626">
              ¿Querés modificar tu compra?
            </Typography>
            <button className="boton-volver">
              <Link to="/">VOLVER AL HOME</Link>
            </button>
            <button className="boton-carrito">
              <Link to="/cart">VOLVER AL CARRITO</Link>
            </button>
          </div>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: "100vh", borderTop: "1px solid #262626" }}
            spacing={5}
          >
            <Grid item>
              <Typography variant="h5" color="#262626">
                Completa tus datos para terminar la compra
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                style={{ minWidth: "300px", maxWidth: "500px" }}
                direction="row"
                alignItems="center"
                justify="center"
              >
                {inputs.map(({ name, label }) => (
                  <TextField
                    key={name}
                    value={buyer[name]}
                    variant="outlined"
                    name={name}
                    onChange={onChange}
                    label={label}
                    fullWidth
                    style={{ marginBottom: "1em" }}
                  />
                ))}
              </Grid>
            </Grid>
            <Button
              onClick={() => ordenConfirmada()}
              size="large"
              variant="contained"
              color="primary"
              disabled={!(buyer.nombre && buyer.celular && buyer.mail)}
            >
              FINALIZAR COMPRA
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default Form;
