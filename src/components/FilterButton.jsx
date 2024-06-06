import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllDone } from "../redux/action";

function FilterButton() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => {
    state.filter;
  });
  const handleFilter = (filter) => {
    dispatch(filterTodo(filter));
  };
  return (
    <div className="flex space-x-4">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus: outline-none"
      >
        <option value="All">Default</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <button
        className="text-sm px-2 py-1 bg-green-500 text-white ml-2 rounded hover:bg-green-800 font-bold "
        onClick={() => dispatch(markAllDone())}
      >
        Mark All Done
      </button>
    </div>
  );
}

export default FilterButton;
