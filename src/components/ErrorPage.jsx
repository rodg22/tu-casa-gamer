import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>ERROR 404</h1>
      <h2>PÁGINA NO ENCONTRADA</h2>
      <p>Lo sentimos, no encontramos la pagina que buscabas</p>
      <Link to="/">Volver al sitio</Link>
      <img
        src="https://i.pinimg.com/originals/32/4f/a1/324fa19ff25f47e70000cdc1a0156849.png"
        alt="Sad Mario"
      />
    </div>
  );
}
