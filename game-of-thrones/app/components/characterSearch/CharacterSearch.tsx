import { useState } from "react";

interface Character {
    id: number,
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    tittles: string[];
    aliases: string[];
    playedBy: string;
}

export function useCharacterSearch(characters: Character[]) {
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

    const handleSearchCharacter = (query: string) => {
        const lowerQuery = query.toLowerCase();

        const results = characters.filter((character) => {
            return Object.values(character).some((value) => {
                if (Array.isArray(value)) {
                    return value.some((v) => v.toLowerCase().includes(lowerQuery));
                } else {
                    return value.toString().toLowerCase().includes(lowerQuery);
                }
            });
        });

        setFilteredCharacters(results);
    };

    return { filteredCharacters, handleSearchCharacter };
}
