import React from "react";
import BookCard from "./BookCard";
import styles from "./ListContainer.module.css";

const ListContainer = ({ books, onEdit, onDelete }) => {
    return (
        <div className={styles.container}>
            {books && books.length > 0 ? (
                books.map((book) => (
                    <BookCard
                        key={book.id || book._id || book.title}
                        book={book}
                        onEdit={() => onEdit(book)}
                        onDelete={() => onDelete(book)}
                    />
                ))
            ) : (
                <div className={styles.empty}>No books found.</div>
            )}
        </div>
    );
};

export default ListContainer;
