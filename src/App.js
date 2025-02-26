import store from "./redux/store";
import { Provider } from "react-redux";
import Form from "./Component/Form";

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
