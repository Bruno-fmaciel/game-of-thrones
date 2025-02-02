'use client';
import { useState } from "react";
import { useCharacters } from "../components/characterFetch/CharacterFetch";
import CharacterSearchForm from "../components/characterFilterForm/CharacterFilterForm";

export default function Characters() {
    const [searchId, setSearchId] = useState<string | null>(null);
    const { character, loading } = useCharacters(searchId);

    const handleSearchCharacter = (id: string) => {
        setSearchId(id);
    };

    if (loading) {
        return <div>Carregando Personagem...</div>;
    }

    return (
        <>
            <h1 className="text-5xl mt-8 mb-4 text-center font-bold">Personagem Específico</h1>

            <div>
                <CharacterSearchForm onSearch={handleSearchCharacter} />
            </div>

            {character ? (
                <div className="mt-8">
                    <div className="card text-center p-6 border rounded-lg shadow-md w-80 mx-auto">
                        <h3 className="text-xl font-bold">{character.name}</h3>
                        <p><strong>Sexo:</strong> {character.gender}</p>
                        <p><strong>Cultura:</strong> {character.culture}</p>
                        <p><strong>Nascido em:</strong> {character.born}</p>
                        <p><strong>Morto em:</strong> {character.died}</p>
                        <p><strong>Títulos:</strong> {character.tittles?.join(' ,') || 'Nenhum título'}</p>
                        <p><strong>Conhecido como:</strong> {character.aliases?.join(' ,') || 'Nenhum apelido'}</p>
                        <p><strong>Interpretado por:</strong> {character.playedBy}</p>
                    </div>
                </div>
            ) : (
                <div className="mt-8 text-center">Personagem não encontrado.</div>
            )}
        </>
    );
}
