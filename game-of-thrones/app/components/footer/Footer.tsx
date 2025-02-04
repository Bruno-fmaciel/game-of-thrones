'use client';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext); 

  return (
    <footer
      className="py-6 border-t-4 shadow-xl mt-24"
      style={{
        background: theme.background, 
        color: theme.text,
      }}
    >
      <div className="container mx-auto text-center">
        <p
          className="text-lg font-semibold tracking-widest drop-shadow-lg"
          style={{ color: theme.text }}
        >
          ❄️ Winter is Coming ❄️
        </p>
        <p className="mt-2 text-sm" style={{ color: theme.text }}>
          © {new Date().getFullYear()} Game of Thrones Fan Site. Todos os direitos reservados - Bruno Freire.
        </p>
      </div>
    </footer>
  );
}
