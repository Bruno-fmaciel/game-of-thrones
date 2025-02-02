'use client';
import { useEffect } from "react";
import { useBooks } from "../components/bookFetch/BookFetch";
import { useSearchBooks } from "../components/bookSearch/BookSearch";
import BookSearchForm from "../components/bookFilterForm/BookFilterForm";


export default function Books() {
    const { books, loading } = useBooks(); 
    const { filteredBooks, handleSearch } = useSearchBooks(books);

    useEffect(() => {
        if (!loading && books.length > 0) {
            handleSearch(''); 
        }
    }, [loading, books, handleSearch]);

    if (loading) {
        return <div>Carregando livros...</div>;
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-start">
            <h1 className="text-5xl mt-8 mb-4 text-center font-bold">Conheça os Livros que inspiraram as Séries 📖</h1>
            <div>
                <BookSearchForm onSearch={ handleSearch } />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full px-4">
                {filteredBooks.length === 0 ? (
                    <p className="text-center col-span-full">Nenhum livro encontrado.</p>
                ) : (
                    filteredBooks.map((book) => (
                        <div key={book.isbn} className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-gray-800">{book.name}</h3>
                            <p className="text-gray-600 mt-2"><strong>Autor:</strong> {book.authors.join(', ')}</p>
                            <p className="text-gray-600"><strong>Data de Publicação:</strong> {book.released}</p>
                            <p className="text-gray-600"><strong>Editora:</strong> {book.publisher}</p>
                            <p className="text-gray-600"><strong>Número de Páginas:</strong> {book.numberOfPages}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
