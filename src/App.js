import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="CATÁLOGO DE PRODUCTOS"/>}/>
            <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
            <Route exact path="/cart" element={<Cart />}/>
            <Route exact path="*" element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
