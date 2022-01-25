import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/hooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import AdvancedCakeContainer from "./components/advancedCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <AdvancedCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
