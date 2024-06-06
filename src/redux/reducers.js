import { combineReducers } from "redux";

import {
  Add_Todo,
  Filter_Todo,
  Mark_Completed_Todo,
  Mark_Incomplete_Todo,
  Remove_Todo,
  Toggle_Todo,
  Update_Search,
  Mark_All_Done,
  Edit_Todo,
  Set_Todo,
} from "./actionTypes";

const initialState = {
  todos: [],
  filter: "All",
  searchData: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Set_Todo:
      return {
        ...state,
        todos: action.payload.text,
      };

    case Add_Todo:
      {
        const updatedTodos = [...state.todos, { text: action.payload.text }];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      }
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchData: state.searchData,
      };

    case Toggle_Todo:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchData: state.searchData,
      };

    case Remove_Todo: {
      const removed = state.todos.filter(
        (todo, index) => index !== action.payload.id
      );
      console.log(removed);
      localStorage.setItem("todos", JSON.stringify(removed));

      return {
        ...state,
        todos: removed,
      };
    }

    case Mark_Completed_Todo:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchData: state.searchData,
      };

    case Mark_Incomplete_Todo:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchData: state.searchData,
      };

    case Filter_Todo:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchData: state.searchData,
      };

    case Update_Search:
      return {
        todos: state.todos,
        filter: state.filter,
        searchData: action.payload.searchData,
      };

    case Mark_All_Done:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchData: state.searchData,
      };
    case Edit_Todo: {
      const edited = state.todos.map((todo, index) =>
        index === action.payload.id
          ? { ...todo, text: action.payload.text, completed: false }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(edited));

      return {
        ...state,
        todos: edited,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ todoReducer: todoReducer });
export default rootReducer;
