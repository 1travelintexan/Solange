import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Photos from "./components/Photos";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={Photos} path="/photos" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
