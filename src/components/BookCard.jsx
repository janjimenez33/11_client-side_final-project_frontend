import React from "react";
import styles from "./BookCard.module.css";

const BookCard = ({ book, onEdit, onDelete }) => {
    const statusModifier = `status--${book.status.toLowerCase().replace(/\s/g, "")}`;
    const statusClass = `${styles.status} ${styles[statusModifier] || ""}`;

    return (
        <div className={styles.card}>
            <div className={styles.headerRow}>
                <div>
                    <h3 className={styles.title}>{book.title}</h3>
                    <div className={styles.author}>{book.author}</div>
                </div>
                <span className={styles.year}>{book.year}</span>
            </div>
            <div className={styles.statusRow}>
                <span className={statusClass}>{book.status}</span>
            </div>
            <div className={styles.actionsRow}>
                <button className={styles.editBtn} onClick={onEdit}>
                    Edit
                </button>
                <button className={styles.deleteBtn} onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookCard;
