import React, { useState } from 'react';

const BookForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ title, author, year });
        }
        setTitle('');
        setAuthor('');
        setYear('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Autor:</label>
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Año:</label>
                <input
                    type="number"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default BookForm;