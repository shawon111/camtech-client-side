import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import AddProduct from './Pages/AddProduct/AddProduct';
import AddReview from './Pages/AddReview/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import MyOrders from './Pages/MyOrders/MyOrders';
import Payment from './Pages/Payment/Payment';
import Purchase from './Pages/Purchase/Purchase';
import Registration from './Pages/Registration/Registration';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                   <Home></Home>
                </Route>
                <Route exact path="/explore">
                   <Explore></Explore>
                </Route>
                <Route exact path="/addproduct">
                   <AddProduct></AddProduct>
                </Route>
                <Route exact path="/addreview">
                   <AddReview></AddReview>
                </Route>
                <Route exact path="/dashboard">
                   <Dashboard></Dashboard>
                </Route>
                <Route exact path="/login">
                   <Login></Login>
                </Route>
                <Route exact path="/makeadmin">
                   <MakeAdmin></MakeAdmin>
                </Route>
                <Route exact path="/manageorders">
                   <ManageOrders></ManageOrders>
                </Route>
                <Route exact path="/manageproducts">
                   <ManageProduct></ManageProduct>
                </Route>
                <Route exact path="/myorders">
                   <MyOrders></MyOrders>
                </Route>
                <Route exact path="/payment">
                   <Payment></Payment>
                </Route>
                <Route exact path="/purchase">
                   <Purchase></Purchase>
                </Route>
                <Route exact path="/register">
                   <Registration></Registration>
                </Route>
                <Route exact path="*">
                   <PageNotFound></PageNotFound>
                </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
