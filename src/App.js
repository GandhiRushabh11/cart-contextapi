import "./App.css";
import Item from "./components/item";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <h1>Cart API</h1>
      <Item name="Pendrive" price={1000} />
      <Item name="Redmi Note C " price={7999} />
      <Item name="Node Js Handbook" price={599} />
      <Cart />
    </div>
  );
}

export default App;
