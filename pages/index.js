import React, { useState } from "react";
import Image from "next/image";

const produtos = [
  {
    nome: "Pulseira Prata 925 Cristal Fem",
    preco: "R$ 120,00",
    imagem: "/media/Pulseira 3 Tri Cristal Fem.jpg",
    alt: "Pulseira 3 Tri Cristal Fem",
  },
  {
    nome: "Colar de Prata 925 Ruby Fem",
    preco: "R$159,90",
    imagem: "/media/Colar Prata Ruby Fem.jpg",
    alt: "Colar de Prata Ruby Fem",
  },
  {
    nome: "Pulseira de Prata 925 7mm Masc",
    preco: "R$ 299,90",
    imagem: "/media/Pulseira Prata Masc 7mm.jpg",
    alt: "Pulseira de Prata 7mm Masc",
  },
];

export default function HomePage() {
  const [hovered, setHovered] = useState(null);

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
            {produtos.map((produto, idx) => (
              <div
                key={produto.nome}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "200px",
                  boxShadow:
                    hovered === idx ? "0 4px 16px rgba(0,0,0,0.15)" : "none",
                  transform: hovered === idx ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.2s",
                  background: hovered === idx ? "#fafafa" : "#fff",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={produto.imagem}
                  alt={produto.alt}
                  width={180}
                  height={180}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    height: "auto",
                    transition: "box-shadow 0.2s",
                    boxShadow:
                      hovered === idx ? "0 2px 8px rgba(0,0,0,0.10)" : "none",
                  }}
                />
                <h3 style={{ color: "#555", margin: "10px 0 5px 0" }}>
                  {produto.nome}
                </h3>
                <p
                  style={{
                    color: hovered === idx ? "#222" : "#bbb",
                    fontWeight: hovered === idx ? "bold" : "normal",
                    fontSize: "1.1em",
                    margin: 0,
                    transition: "color 0.2s, font-weight 0.2s",
                  }}
                >
                  {produto.preco}
                </p>
              </div>
            ))}
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
