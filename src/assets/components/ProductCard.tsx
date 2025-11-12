import { useCart } from "../context/CartContext";

type Product = {
  name: string;
  price: number;
  img: string;
};

export function ProductCard({ name, price, img }: Product) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform w-[220px] mx-auto">
      <img
        src={img}
        alt={name}
        className="object-cover rounded-xl mb-3"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mb-2">R$ {price.toFixed(2)}</p>
      <button
        onClick={() => addToCart({ id: Math.random(), name, price, img, quantity: 1 })}

        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
