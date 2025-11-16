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
  name="Hambúrguer"
  price={5.90}
  img="/hamburgueria-web/images/hamburguerweb.png"
/>

<ProductCard
  name="Duplo Bacon"
  price={19.90}
  img="/hamburgueria-web/images/duplo-bacon.png"
/>

<ProductCard
  name="Hambúrguer de Frango"
  price={17.50}
  img="/hamburgueria-web/images/hamburguerweb.png"
/>



        <Cart />
      </main>
    </CartProvider>
  );
}

export default App;
