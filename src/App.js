import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Registration from "./Components/Registration/Registration";
import SignIn from "./Components/SignIn/SignIn";
import Terms from "./Components/Terms/Terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/features">
            <Features></Features>
          </Route>
          <Route path="/terms">
            <Terms></Terms>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
