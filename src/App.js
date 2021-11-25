import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {Routes, Route} from 'react-router-dom'; 
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {



  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Catalogo de productos"/>}/>
        <Route path="item/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
