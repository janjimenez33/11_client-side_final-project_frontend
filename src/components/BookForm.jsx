import React, { useState, useEffect } from "react";
import styles from "./BookForm.module.css";

const BookForm = ({ onSubmit, bookToEdit, setBookToEdit, onCancel }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [status, setStatus] = useState("Pending");
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (bookToEdit) {
            setTitle(bookToEdit.title || "");
            setAuthor(bookToEdit.author || "");
            setYear(bookToEdit.year || "");
            setStatus(bookToEdit.status || "Pending");
            setShowForm(true);
        }
    }, [bookToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            const bookData = { ...bookToEdit, title, author, year, status };
            onSubmit(bookData);
        }
        setTitle("");
        setAuthor("");
        setYear("");
        setStatus("Pending");
        setShowForm(false);
        if (setBookToEdit) setBookToEdit(null);
    };

    const handleAddClick = () => {
        setShowForm(true);
    };

    const handleCancel = () => {
        setTitle("");
        setAuthor("");
        setYear("");
        setStatus("Pending");
        setShowForm(false);
        if (setBookToEdit) setBookToEdit(null);
        if (onCancel) onCancel();
    };

    return (
        <>
            {!showForm && (
                <button
                    className={styles.updateBtn}
                    onClick={handleAddClick}
                >
                    Add book
                </button>
            )}
            {showForm && (
                <div style={{ position: "relative" }}>
                    <div className={styles.formContainer}>
                        <form className={styles.bookForm} onSubmit={handleSubmit}>
                            <div className={styles.bookFormContent}>
                                <div className={styles.bookFormRow}>
                                    <label className={styles.bookFormLabel} htmlFor="book-title">Title</label>
                                    <input
                                        id="book-title"
                                        className={styles.bookFormInput}
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Enter book title"
                                        required
                                    />
                                </div>
                                <div className={styles.bookFormRow}>
                                    <label className={styles.bookFormLabel} htmlFor="book-author">Author</label>
                                    <input
                                        id="book-author"
                                        className={styles.bookFormInput}
                                        type="text"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        placeholder="Enter author name"
                                        required
                                    />
                                </div>
                                <div className={styles.bookFormRow}>
                                    <label className={styles.bookFormLabel} htmlFor="book-year">Publication Year</label>
                                    <input
                                        id="book-year"
                                        className={styles.bookFormInput}
                                        type="number"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.bookFormRow}>
                                    <label className={styles.bookFormLabel} htmlFor="book-status">Reading Status</label>
                                    <select
                                        id="book-status"
                                        className={styles.bookFormInput}
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="Read">Read</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In progress">In progress</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.updateBtn} type="submit">
                                    {bookToEdit ? "Update Book" : "Add Book"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <button
                        className={styles.cancelBtn}
                        type="button"
                        onClick={handleCancel}
                        style={{ display: "block", margin: "16px auto 0 auto", position: "static" }}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </>
    );
};

export default BookForm;
