import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Material from "./Routes/Material";
import Rank from "./Routes/Rank";
import Question from "./Routes/Question";

function App() {
  return (
    <Router>
      <Category />
      <Header />
      <Switch>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/rank">
          <Rank />
        </Route>
        <Route path="/material">
          <Material />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
