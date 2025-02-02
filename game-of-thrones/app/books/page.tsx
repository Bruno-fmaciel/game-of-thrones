'use client';
import { useState, useEffect } from "react";
import { useBooks } from "../components/bookFetch/BookFetch";
import { useSearchBooks } from "../components/bookSearch/BookSearch";
import BookSearchForm from "../components/bookFilterForm/BookFilterForm";

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

export default function Books() {
    const { books, loading } = useBooks(); 
    const { filteredBooks, handleSearch } = useSearchBooks(books);

    useEffect(() => {
        if (!loading && books.length > 0) {
            handleSearch(''); 
        }
    }, [loading, books]);

    if (loading) {
        return <div>Carregando livros...</div>;
    }

    return (
        <>
            <h1 className="text-5xl mt-8 mb-4 text-center font-bold">Conheça os Livros que inspiraram as Séries 📖</h1>
            <div>
                <BookSearchForm onSearch={ handleSearch } />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
                { filteredBooks.length === 0 ? (
                    <p>Nenhum livro encontrado.</p>
                ) : (
                    filteredBooks.map((book) => (
                        <div key={book.isbn} className="card">
                            <h3>Livro: {book.name}</h3>
                            <p>Autor: {book.authors.join(' ,')}</p>
                            <p>Data de Publicação: {book.released}</p>
                            <p>Editora: {book.publisher}</p>
                            <p>Número de Páginas: {book.numberOfPages}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}
