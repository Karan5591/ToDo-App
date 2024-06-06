import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function TodoList() {
  const filteredTodos = useSelector((state) => {
    const todos = state.todoReducer.todos;
    const filter = state.todoReducer.filter;
    const searchData = state.todoReducer.searchData;

    {
      /*checking if any filter is applied on the list or not. If applied, the data will shown in the list accordingly */
    }

    return todos.filter((todo) => {
      const matchFilter =
        (filter === "Completed" && todo.completed) ||
        (filter === "Incomplete" && !todo.completed) ||
        filter === "All";

      const matchSearch = todo.text.toLowerCase().includes(searchData);

      return matchFilter && matchSearch;
    });
  });
  return (
    <div>
      <ul>
        <li className="my-5 text-lg italic">Task List...</li>

        {/*Rendering the list based on the filter applied */}

        {filteredTodos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
