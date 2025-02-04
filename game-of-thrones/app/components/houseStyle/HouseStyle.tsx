'use client';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext"
import HouseImage from "../HouseImage/HouseImage";

export default function HouseStyle() {
  const { changeTheme } = useContext(ThemeContext);

  const houses = [
    { name: "stark", image: "/stark.webp", alt: "Logo da casa Stark, com lobo e o lema da casa: Winter is Coming" },
    { name: "lannister", image: "/lannister.webp", alt: "Logo da casa Lannister, com leão e o lema da casa: Hear me Roar" },
    { name: "tyrell", image: "/tyrell.webp", alt: "Logo da casa Tyrell, com flores e o lema da casa: Growing Strong" },
    { name: "baratheon", image: "/baratheon.webp", alt: "Logo da casa Baratheon, com veado e o lema da casa: Ours is the Fury" },
    { name: "targaryen", image: "/targaryen.webp", alt: "Logo da casa Targaryen, com dragão de três cabeças e o lema da casa: Fire and Blood" },
    { name: "martell", image: "/martell.webp", alt: "Logo da casa Martell, com sol e a lança, e o lema da casa: Unbowed, Unbent, Unbroken" }
  ];

  const handleThemeChange = (house: string) => {
    changeTheme(house as "padrao" | "stark" | "lannister" | "tyrell" | "targaryen" | "baratheon" | "martell");
  };

  const handleReset = () => {
    changeTheme("padrao");
  };

  return (
    <div className="flex flex-wrap gap-8 justify-center mt-8">
      {houses.map((house) => (
        <div key={house.name} className="flex flex-col items-center">
          <HouseImage width={300} height={300} src={house.image} alt={house.alt} />
          <button
            onClick={() => handleThemeChange(house.name)}
            className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in"
          >
            Escolher Tema
          </button>
        </div>
      ))}

      <div className="w-full flex justify-center mt-4">
        <button
          onClick={handleReset}
          className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in"
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
