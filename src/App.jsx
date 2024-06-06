import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/TodoMain";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
