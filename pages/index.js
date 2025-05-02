import React from "react";

export default function HomePage() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <header
        style={{
          backgroundColor: "#f8f8f8",
          padding: "10px 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1 style={{ color: "#555" }}>Loja de Pratas</h1>
        <p style={{ color: "#777" }}>
          Joias elegantes e sofisticadas para todas as ocasiões
        </p>
      </header>
      <main style={{ marginTop: "20px" }}>
        <section>
          <h2 style={{ color: "#333" }}>Nossos Produtos</h2>
          <p style={{ color: "#555" }}>
            Explore nossa coleção exclusiva de joias de prata.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Produto 1"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ color: "#555" }}>Anel de Prata 925</h3>
              <p style={{ color: "#777" }}>R$ 120,00</p>
            </div>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Produto 2"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ color: "#555" }}>Colar de Prata</h3>
              <p style={{ color: "#777" }}>R$ 250,00</p>
            </div>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Produto 3"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ color: "#555" }}>Pulseira de Prata</h3>
              <p style={{ color: "#777" }}>R$ 180,00</p>
            </div>
          </div>
        </section>
      </main>
      <footer
        style={{
          marginTop: "40px",
          padding: "10px 0",
          backgroundColor: "#f8f8f8",
          borderTop: "1px solid #ddd",
        }}
      >
        <p style={{ color: "#777" }}>
          © 2025 Sirius Pratas. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
