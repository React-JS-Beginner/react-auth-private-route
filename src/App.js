import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Offer from "./Components/Offer/Offer";
import Registration from "./Components/Registration/Registration";
import SignIn from "./Components/SignIn/SignIn";
import Terms from "./Components/Terms/Terms";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/offer">
              <Offer></Offer>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
