import { CartProvider } from './assets/context/CartContext';
import Header from './assets/components/Header';
import Cart from './assets/components/Cart';
import { ProductCard } from './assets/components/ProductCard';
import './App.css';


function App() {
  return (
    <CartProvider>
      <Header />
      <main className="flex flex-wrap justify-center gap-6 p-6">

      <ProductCard
  name="Hamburguer"
  price={5.9}
  img="/hamburgueria-web/Images/hamburguerweb.png"
/>

<ProductCard
  name="Duplo Bacon"
  price={19.9}
  img="/hamburgueria-web/Images/duplo-bacon.png"
/>

<ProductCard
  name="Chicken Burger"
  price={17.5}
  img="/hamburgueria-web/Images/frango.png"
/>


        <Cart />
      </main>
    </CartProvider>
  );
}

export default App;
