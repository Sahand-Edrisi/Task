import { Provider } from "react-redux";
import Form from "./Component/Form";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
