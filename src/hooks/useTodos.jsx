import { useState } from "react";

export function useTodos() {
    const INITIAL_TODOS_STATE = [];

    const [todos, setTodos] = useState(INITIAL_TODOS_STATE);

    const handleCreateTask = (newTodo) => {
        setTodos((currentTodos) => {
            return [...currentTodos, newTodo];
        });
    };

    return {
        todos,
        handleCreateTask,
    };
}
