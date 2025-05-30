import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BookForm from "./components/BookForm";
import ListContainer from "./components/ListContainer";
import { useBooksApi } from "./hooks/useBooksApi";

function App() {
    const {
        books,
        createBook: addBook,
        deleteBook,
        updateBook: editBook,
    } = useBooksApi();
    const [bookToEdit, setBookToEdit] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = () => setFormVisible((v) => !v);
    const showEditForm = (book) => {
        setBookToEdit(book);
        setFormVisible(true);
    };

    return (
        <>
            <Header />
            <BookForm
                onSubmit={bookToEdit ? editBook : addBook}
                bookToEdit={bookToEdit}
                setBookToEdit={setBookToEdit}
                isFormVisible={isFormVisible}
                toggleFormVisibility={toggleFormVisibility}
            />
            <ListContainer
                books={books}
                onEdit={showEditForm}
                onDelete={(book) => deleteBook(book.id)}
            />
        </>
    );
}

export default App;
