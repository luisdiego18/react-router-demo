import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
		</Router>
	);
}

export default App;
