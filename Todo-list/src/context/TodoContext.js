import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
todos: [
    {
        id: 1,
        todo: "Learn React",
        isCompleted: false
    }
],
addTodo: (todo) => {},
updateTodo: (id, todo) => {},
deleteTodo: (id) => {},
toggle: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}