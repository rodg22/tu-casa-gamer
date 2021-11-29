import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {Category} from './components/Category';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
// import CartContext from './context/CartContext'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Catalogo de productos"/>}/>
          <Route exact path="/category/:categoryId" element={<Category />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
