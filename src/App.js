import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddNewService from "./Pages/AddNewService/AddNewService";
import Book from "./Pages/Book/Book";
import CommingSoon from "./Pages/CommingSoon/CommingSoon";
import AuthProvider from "./Pages/Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import MyOrder from "./Pages/MyOrder/MyOrder";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/myOrder">
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute path="/ManageOrders">
            <ManageOrders />
          </PrivateRoute>
          <PrivateRoute path="/addNewService">
            <AddNewService />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <Route path="/commingSoon">
            <CommingSoon />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
