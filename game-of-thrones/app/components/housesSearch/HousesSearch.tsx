import { useState } from "react";

interface House {
    name: string,
    region: string,
    words: string,
    titles: string[],
    seats: string[],
    founded: string,
    ancestralWeapons: string[]
}

export function useHouseSearch(houses: House[]) {
    const [filteredHouses, setFilteredHouses] = useState<House[]>(houses);

    const handleSearchHouse = (query: string) => {
        const lowerQuery = query.toLowerCase();

        const results = houses.filter((house) => {
            return Object.values(houses).some((value) => {
                if (Array.isArray(value)) {
                    return value.some((v) => v.toLowerCase().includes(lowerQuery));
                } else {
                    return value.toString().toLowerCase().includes(lowerQuery);
                }
            })
        });

        setFilteredHouses(results);
    };

    return { filteredHouses, handleSearchHouse};
}