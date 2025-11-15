import Header from '../assets/components/Header';
import { ProductCard } from '../assets/components/ProductCard';
import Cart from '../assets/components/Cart';
import Footer from '../assets/components/Footer';

import cheeseburger from "../assets/images/hamburguerweb.png";
import duploBacon from "../assets/images/duplo-bacon.png";
import chicken from "../assets/images/frango.png";

function Home() {
  return (
    <>
      <Header />
      <main>
        <h2>🍔 Cardápio</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
            gap: '1rem',
          }}
        >
          <ProductCard name="Hambúrguer" price={5.90} img={cheeseburger} />
          <ProductCard name="Duplo Bacon" price={19.90} img={duploBacon} />
          <ProductCard name="Hambúrguer de frango" price={17.50} img={chicken} />
        </div>
      </main>

      <Cart />
      <Footer />
    </>
  );
}

export default Home;
