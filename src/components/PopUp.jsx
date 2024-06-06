import { useState } from "react";
import { editTodo } from "../redux/action";
import { useDispatch } from "react-redux";

function PopUp({ index, updateState }) {
  const [editTodos, setEditTodo] = useState("");
  const dispatch = useDispatch();

  const handleEditTodo = (text) => {
    dispatch(editTodo(text, index));
  };
  const handleEditTodoClick = () => {
    if (editTodos.trim() !== "") {
      handleEditTodo(editTodos.trim());
      updateState(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 bg-gray-400 backdrop-blur-sm flex align-middle justify-center">
      <div className="max-w-full p-10  bg-gray-100 rounded mt-20 max-h-48">
        <div className="flex justify-center">
          {" "}
          <label className="p-2 mb-5 font-bold text-3xl">Edit List</label>
        </div>
        <input
          type="text"
          value={editTodos}
          onChange={(e) => setEditTodo(e.target.value)}
          name="addTodo"
          id="addTodoInput"
          placeholder="Add new Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus: outline-none focus:border-blue-400"
        />
        <button
          className="ml-4 p-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none"
          onClick={handleEditTodoClick}
        >
          Update
        </button>
        <button
          className="ml-4 p-2 bg-red-500 text-white rounded hover:bg-green-700 focus:outline-none"
          onClick={() => updateState(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PopUp;
