'use client';
import { useState } from "react";

interface HousesSearch {
    onSearch: (query: string) => void;
}

export default function HousesSearchForm({onSearch}: HousesSearch) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md space-y-4">
            <div className="flex flex-col space-y-2">
                <label className="font-medium">Filtrar Casas por ID:</label>
                <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 rounded-md"
                placeholder="Insira um ID para a casa..."
                />
            </div>

            <button type="submit" className="bg-blue-600 text-white p-2 rounded-md w-full">
                Pesquisar
            </button>
        </form>

        </>
    )
}