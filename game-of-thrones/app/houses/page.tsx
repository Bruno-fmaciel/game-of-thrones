'use client';
import { useState } from 'react';
import { useHouses } from '../components/housesFetch/HousesFetch';
import HousesSearchForm from '../components/housesFilterForm/HousesFilterForm';

export default function Houses() {
    const [searchId, setSearchId] = useState<string | null>(null);
    const { house, loading } = useHouses(searchId);

    const handleSearchHouse = (id: string) => {
        setSearchId(id);
    };

    if (loading) {
        return <div>Carregando Casa...</div>;
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-start">
            <h1 className="text-5xl mt-8 mb-4 text-center font-bold">As Casas 🏰</h1>
            <div>
                <HousesSearchForm onSearch={handleSearchHouse} />
            </div>

            {house ? (
                <div className="mt-8">
                    <div className="card text-center p-6 border rounded-lg shadow-md w-80 mx-auto">
                        <h3 className="text-xl font-bold">{house.name}</h3>
                        <p><strong>Região:</strong> {house.region}</p>
                        <p><strong>Lema:</strong> {house.words}</p>
                        <p><strong>Fundada em:</strong> {house.founded}</p>
                        <p><strong>Títulos:</strong> {house.titles?.join(' ,') || 'Nenhum título'}</p>
                        <p><strong>Castelos:</strong> {house.seats?.join(' ,') || 'Nenhum castelo'}</p>
                        <p><strong>Armas Ancestrais:</strong> {house.ancestralWeapons?.join(' ,') || 'Nenhuma arma ancestral'}</p>
                    </div>
                </div>
            ) : (
                <div className="mt-8 text-center">Casa não encontrada.</div>
            )}
        </div>
    );
}
