import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Food from "./components/Food/Food";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FoodProvider from "./context/FoodProvider";
function App() {
  return (
    <FoodProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/food">
            <Food></Food>
          </Route>
          <Route exact path="/">
            <Food></Food>
          </Route>
        </Switch>
      </BrowserRouter>
    </FoodProvider>
  );
}

export default App;
