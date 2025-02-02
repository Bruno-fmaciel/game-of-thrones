"use client";
import { useState } from "react";

interface BookSearchFormProps {
  onSearch: (query: string) => void;
}

export default function BookSearchForm({ onSearch }: BookSearchFormProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md space-y-4">
      <div className="flex flex-col space-y-2">
        <label className="font-medium">Filtrar Livros:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-md"
          placeholder="Digite nome, autor, ISBN, editora..."
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white p-2 rounded-md w-full">
        Pesquisar
      </button>
    </form>
  );
}