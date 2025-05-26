import React, { useState } from 'react';
import styles from './BookForm.module.css';

const BookForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ title, author, year, status });
        }
        setTitle('');
        setAuthor('');
        setYear('');
        setStatus('Pending');
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.bookForm} onSubmit={handleSubmit}>
                <div className={styles.bookFormContent}>
                    <div className={styles.bookFormRow}>
                        <label className={styles.bookFormLabel}>Title</label>
                        <input
                            className={styles.bookFormInput}
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Enter book title"
                            required
                        />
                    </div>
                    <div className={styles.bookFormRow}>
                        <label className={styles.bookFormLabel}>Author</label>
                        <input
                            className={styles.bookFormInput}
                            type="text"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            placeholder="Enter author name"
                            required
                        />
                    </div>
                    <div className={styles.bookFormRow}>
                        <label className={styles.bookFormLabel}>Publication Year</label>
                        <input
                            className={styles.bookFormInput}
                            type="number"
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.bookFormRow}>
                        <label className={styles.bookFormLabel}>Reading Status</label>
                        <select
                            className={styles.bookFormInput}
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option value="Read">Read</option>
                            <option value="Pending">Pending</option>
                            <option value="In progress">In progress</option>
                        </select>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.updateBtn} type="submit">Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default BookForm;
