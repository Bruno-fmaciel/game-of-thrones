import { useState, useEffect } from "react";

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

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://anapioficeandfire.com/api/books');
                const data: Book[] = await response.json();
                setBooks(data);
            } catch (error) {
                console.error("Erro na busca dos livros: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { books, loading };
}