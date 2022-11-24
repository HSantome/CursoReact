import logo from './logo.svg';
import './App.css';
import footer from './components/footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='greeting' />
      <h1>
        "hola mundo"
      </h1>
    <footer/>
    </div>
  );
}

export default App;
