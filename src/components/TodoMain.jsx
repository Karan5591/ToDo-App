import { useEffect, useState } from "react";
import { addTodo, setTodo, updateSearch } from "../redux/action";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    dispatch(setTodo(savedTodos));
  }, [dispatch]);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodo.trim() !== "") {
      handleAddTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  {
    /*Search for a specific Todo in the list */
  }

  const handleSearch = (value) => {
    setSearchData(value);
    dispatch(updateSearch(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        ToDo App
      </h2>

      {/*input and add todo button */}

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          name="addTodo"
          id="addTodoInput"
          placeholder="Add new Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus: outline-none focus: border-blue-400"
        />
        <button
          className="ml-4 p-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          Add ToDo
        </button>
      </div>

      {/*Filter and Search */}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={searchData}
            onChange={(e) => handleSearch(e.target.value)}
            name="searchTodo"
            placeholder="search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus: outline-none focus:border-blue-400"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>

      {/*Todo List will be rendered here */}

      <TodoList />
    </div>
  );
}

export default Todo;
