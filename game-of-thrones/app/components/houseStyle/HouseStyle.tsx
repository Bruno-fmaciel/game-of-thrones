'use client';
import HouseImage from "../HouseImage/HouseImage";

export default function HouseStyle() {
    return (
        <div className="flex flex-wrap gap-8 justify-center mt-8">
            <div className="flex flex-col items-center">
                <HouseImage width={300} height={300} src="/stark.webp" alt="Logo da casa Stark, com lobo e o lema da casa: Winter is Coming" />
                <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in">Escolher Tema</button>
            </div>

            <div className="flex flex-col items-center">
                <HouseImage width={300} height={300} src="/lannister.webp" alt="Logo da casa Lannister, com leão e o lema da casa: Hear me Roar" />
                <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in">Escolher Tema</button>
            </div>

            <div className="flex flex-col items-center">
                <HouseImage width={300} height={300} src="/baratheon.webp" alt="Logo da casa Baratheon, com veado e o lema da casa: Ours is the Fury" />
                <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in">Escolher Tema</button>
            </div>
            
            <div className="flex flex-col items-center">
                <HouseImage width={300} height={300} src="/targaryen.webp" alt="Logo da casa Targaryen, com dragão de três cabeças e o lema da casa: Fire and Blood" />
                <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in">Escolher Tema</button>
            </div>
            <div className="flex flex-col items-center">
                <HouseImage width={300} height={300} src="/tyrell.webp" alt="Logo da casa Targaryen, com dragão de três cabeças e o lema da casa: Fire and Blood" />
                <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in">Escolher Tema</button>
            </div>
            <div className="flex flex-col items-center">
                <HouseImage width={300} height={300} src="/martell.webp" alt="Logo da casa Targaryen, com dragão de três cabeças e o lema da casa: Fire and Blood" />
                <button className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in">Escolher Tema</button>
            </div>
            <div className="w-full flex justify-center mt-4">
                <button className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-color-accent duration-300 ease-in">Resetar</button>
            </div>
        </div>
    );
}
