import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/action";
import PopUp from "./PopUp";
import { useState } from "react";

function ToDoItem({ todo, index }) {
  const [editPopUp, setEditPopUp] = useState(false);
  const dispatch = useDispatch();

  function updateState(data) {
    setEditPopUp(data);
  }

  return (
    <li className="flex flex-col sm:flex-row sm:item-center justify-between border-b-2 py-3 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-600">{index + 1}</span>

        {/*A completed todo will be marked and colored red*/}
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-red-500" : ""
          } `}
        >
          {todo.text}
        </span>
      </div>

      {/*Checking option to mark the Todo as complete*/}

      <div>
        {todo.completed && (
          <label className="bg-green-500 text-white font-bold p-1 mr-3 rounded">
            Completed
          </label>
        )}
        {!todo.completed && (
          <button
            onClick={() => dispatch(toggleTodo(index))}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            Mark as complete
          </button>
        )}

        {/*This button click will PopUp a window to edit the Todo Item, Editing an  item will set its completed propety to false*/}

        <button
          onClick={() => setEditPopUp(true)}
          className="mr-2 text-sm bg-red-700 text-white sm:px-2 p-2 rounded"
        >
          <FaEdit />
        </button>
        {editPopUp ? <PopUp index={index} updateState={updateState} /> : ""}

        {/*Deleting the todo from the list.*/}

        <button
          onClick={() => dispatch(removeTodo(index))}
          className="mr-2 text-sm bg-red-700 text-white sm:px-2 p-2 rounded"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
