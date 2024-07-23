import { Provider } from "react-redux";
import Container from "./components/container/container";
import appStore from "./redux/store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Container />
    </Provider>
  );
}

export default App;
