'use client';
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { themes } from "../context/ThemeContext";
import MenuLink from "../components/menuLink/MenuLink";
import HouseStyle from "../components/houseStyle/HouseStyle";

export default function Home() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const houses: (keyof typeof themes)[] = [
    "padrao", "stark", "lannister", "tyrell", "targaryen", "baratheon", "martell"
  ];

  return (
    <div
      className="w-2/3 mx-auto p-4 rounded-xl mt-20 min-w-xs"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <h1 className="text-5xl font-bold mt-10 mb-4 text-center">
        Bem-vindo ao Reino de Westeros 🏰❄️🔥
      </h1>
      <p className="text-justify text-base">
        Entre em um mundo onde reis lutam pelo Trono de Ferro, casas nobres tramam no jogo dos tronos e lendas antigas despertam no gelo e no fogo. Game of Thrones, inspirado na saga &quot;As Crônicas de Gelo e Fogo&quot; de George R.R. Martin, conquistou milhões de fãs com sua narrativa épica, personagens complexos e batalhas inesquecíveis.
      </p>
      <div className="mt-8 space-y-4">
        <div className="flex items-center space-x-2">
          <MenuLink
            texto="📖 Os Livros"
            href="/books"
            className="font-bold hover:text-color-accent duration-300 ease-in"
          />
          <p className="">– Conheça a obra literária que deu origem à série.</p>
        </div>
        <div className="flex items-center space-x-2">
          <MenuLink
            texto="⚔️ Os Personagens"
            href="/characters"
            className="font-bold hover:text-color-accent duration-300 ease-in"
          />
          <p className="">– De Jon Snow a Daenerys Targaryen, descubra suas histórias e motivações.</p>
        </div>
        <div className="flex items-center space-x-2">
          <MenuLink
            texto="🏰 As Casas Nobres"
            href="/houses"
            className="font-bold hover:text-color-accent duration-300 ease-in"
          />
          <p className="">– Stark, Lannister, Targaryen e muitas outras, suas alianças e rivalidades.</p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl mt-8 text-center font-bold">
          Estile o site com o tema de uma das seis casas principais! (Em desenvolvimento)
        </h2>
        <HouseStyle />
      </div>
    </div>
  );
}
