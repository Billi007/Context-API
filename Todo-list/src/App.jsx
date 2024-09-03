import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoProvider } from './context/TodoContext';

function App() {
  const [todos, setTodos] = useState([]);

  // ADD
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}]);
  };
  // DELETE
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  };
  // UPDATE
  const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  };
  // TOGGLE COMPLETED
  const toggle = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.isCompleted} : prevTodo) )
  };

  useEffect(() => {
    const Todo = JSON.parse(localStorage.getItem('Todo'));
    if (Todo && Todo.length > 0) {
      setTodos(Todo);
    }
  }, []);

  useEffect(() => {
   (localStorage.setItem('Todo', JSON.stringify(todos)));
  }, [todos]);


  return (
    <TodoProvider value={{addTodo,deleteTodo,updateTodo,toggle,todos}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
