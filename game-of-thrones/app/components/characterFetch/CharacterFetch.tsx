import { useState, useEffect } from "react";

interface Character {
    id: number;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    tittles: string[];
    aliases: string[];
    playedBy: string;
}

export function useCharacters(id: string | null) {
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchCharacter = async () => {
            setLoading(true);
            try {
                const numericId = Number(id);
                if (isNaN(numericId)) {
                    throw new Error("ID inválido");
                }

                const response = await fetch(`https://anapioficeandfire.com/api/characters/${numericId}`);
                if (response.ok) {
                    const data = await response.json();
                    setCharacter(data);
                } else {
                    setCharacter(null);
                }
            } catch (error) {
                console.error("Erro ao buscar personagem:", error);
                setCharacter(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    return { character, loading };
}
