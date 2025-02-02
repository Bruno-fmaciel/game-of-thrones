import { useState, useCallback } from "react";

interface Book {
    name: string;
    isbn: string;
    authors: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: string;
}

export function useSearchBooks(books: Book[]) {
    const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

    // Memoriza a função handleSearch para evitar recriação desnecessária a cada renderização
    const handleSearch = useCallback((query: string) => {
        const lowerQuery = query.toLowerCase();

        const results = books.filter((book) =>
            Object.values(book).some((value) =>
                Array.isArray(value)
                    ? value.some((v) => v.toLowerCase().includes(lowerQuery))
                    : value.toString().toLowerCase().includes(lowerQuery)
            )
        );

        setFilteredBooks(results);
    }, [books]);  // Apenas recria se a lista de livros mudar

    return { filteredBooks, handleSearch };
}
