import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Catalogo de productos"/>
    </div>
  );
}

export default App;
