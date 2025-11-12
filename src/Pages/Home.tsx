import Header from '../assets/components/Header.tsx';
import  {ProductCard } from '../assets/components/ProductCard';
import Cart from '../assets/components/Cart';
import Footer from '../assets/components/Footer.tsx';

function Home() {
  return (
    <>
      <Header />

      <main className="bg-neutral-900 text-white min-h-screen px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          🍔 Cardápio
        </h2>

        <div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          <ProductCard
            name="Hamburguer"
            price={5.9}
            img="src/assets/Images/Hamburguerweb.png"
          />
          <ProductCard
            name="Duplo Bacon"
            price={19.9}
            img="src/assets/Images/000.png"
          />
          <ProductCard
            name="Chicken Burger"
            price={17.5}
            img="src/assets/Images/burger01.png"
          />
        </div>
      </main>

      <Cart />
      <Footer />
    </>
  );
}

export default Home;
