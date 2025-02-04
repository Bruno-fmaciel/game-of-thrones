'use client';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"
import Navbar from "../navBar/NavBar";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className="py-6 shadow-xl border-b-4 border-gold"
      style={{
        background: theme.background,
        color: theme.text,
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <h1
          className="text-4xl font-bold tracking-widest drop-shadow-lg"
          style={{ color: theme.text }}
        >
          ⚔️ Game of Thrones
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
