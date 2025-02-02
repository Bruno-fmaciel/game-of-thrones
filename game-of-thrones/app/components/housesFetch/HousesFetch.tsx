import { useState, useEffect } from "react";

interface House {
    name: string,
    region: string,
    words: string,
    titles: string[],
    seats: string[],
    founded: string,
    ancestralWeapons: string[]
}

export function useHouses(id: string | null) {
    const [house, setHouse] = useState<House | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchHouse = async () => {
        setLoading(true);
        try {
            const numericId = Number(id);
            if(isNaN(numericId)) {
                throw new Error('Id inválido');
            }

            const response = await fetch(`https://anapioficeandfire.com/api/houses/${numericId}`);
            if (response.ok) {
                const data = await response.json();
                setHouse(data);
            } else {
                setHouse(null);
            }
        } catch(error) {
            console.error('Erro ao buscar casa: ', error);
        } finally {
            setLoading(false);
        }
    };

    fetchHouse();
    
 }, [id]);

 return { house, loading }
}