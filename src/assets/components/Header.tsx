// src/assets/components/Header.tsx

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#e63946",
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>🍔 Hamburgueria-web</h1>
      <nav>
        <a
          href="#"
          style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}
        >
          Início
        </a>
        <a
          href="#"
          style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}
        >
          Cardápio
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contato
        </a>
      </nav>
    </header>
  );
}
