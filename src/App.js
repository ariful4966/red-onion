import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import BodyArea from "./components/BodyArea/BodyArea";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/review">
            
          </Route>
          <Route path="/inventory">
            
          </Route>

          <Route path="/food/:foodKey">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path ="/checkout">
            <Checkout></Checkout>
          </Route>
          {/* <PrivateRoute path="/Shipment">
            </PrivateRoute> */}
          <Route exact path="/">
            <BodyArea></BodyArea>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
