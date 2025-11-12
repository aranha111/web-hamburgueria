// ✅ src/assets/components/Cart.tsx
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 👉 Função que gera mensagem e abre o WhatsApp
  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    const message = cartItems
      .map(
        (item) =>
          `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n");

    const totalMessage = `\n\n💰 Total: R$ ${total.toFixed(2)}`;
    const fullMessage = `🛍️ *Novo Pedido!*\n\n${message}${totalMessage}`;

    // 👇 Coloca aqui o número do WhatsApp (com DDI + DDD)
    const phone = "5588999999999"; // ← Troque para o seu número

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(fullMessage);

    // Abre o WhatsApp Web ou app
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <aside
      style={{
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "1rem",
        marginTop: "2rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>🛒 Seu Carrinho</h3>

      {cartItems.length === 0 ? (
        <p style={{ color: "#777" }}>Carrinho vazio 😢</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
              padding: "0.5rem 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <strong>{item.name}</strong>
              <p style={{ fontSize: "0.9rem", color: "#777" }}>
                {item.quantity}x R$ {item.price.toFixed(2)}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontWeight: "bold" }}>
                R$ {(item.price * item.quantity).toFixed(2)}
              </span>

              {/* 🗑️ Botão de remover item */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#e63946",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      )}

      <h4
        style={{
          textAlign: "right",
          marginTop: "1rem",
          fontSize: "1.1rem",
          borderTop: "1px solid #ddd",
          paddingTop: "0.5rem",
        }}
      >
        Total: R$ {total.toFixed(2)}
      </h4>

      <button
        onClick={handleWhatsAppOrder}
        style={{
          width: "100%",
          marginTop: "1rem",
          padding: "0.7rem",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#25D366",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Finalizar Pedido no WhatsApp
      </button>
    </aside>
  );
}
