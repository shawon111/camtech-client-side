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
import AuthProvider from './context/AuthContext/AuthProvider';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';

function App() {
   return (
      <div>
         <AuthProvider>
            <BrowserRouter>
               <Header></Header>
               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route exact path="/explore">
                     <Explore></Explore>
                  </Route>
                  <PrivateRoute exact path="/addproduct">
                     <AddProduct></AddProduct>
                  </PrivateRoute>
                  <PrivateRoute exact path="/addreview">
                     <AddReview></AddReview>
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard">
                     <Dashboard></Dashboard>
                  </PrivateRoute>
                  <Route exact path="/login">
                     <Login></Login>
                  </Route>
                  <PrivateRoute exact path="/makeadmin">
                     <MakeAdmin></MakeAdmin>
                  </PrivateRoute>
                  <PrivateRoute exact path="/manageorders">
                     <ManageOrders></ManageOrders>
                  </PrivateRoute>
                  <PrivateRoute exact path="/manageproducts">
                     <ManageProduct></ManageProduct>
                  </PrivateRoute>
                  <PrivateRoute exact path="/myorders">
                     <MyOrders></MyOrders>
                  </PrivateRoute>
                  <PrivateRoute exact path="/payment">
                     <Payment></Payment>
                  </PrivateRoute>
                  <PrivateRoute exact path="/purchase">
                     <Purchase></Purchase>
                  </PrivateRoute>
                  <Route exact path="/register">
                     <Registration></Registration>
                  </Route>
                  <Route exact path="*">
                     <PageNotFound></PageNotFound>
                  </Route>
               </Switch>
               <Footer></Footer>
            </BrowserRouter>
         </AuthProvider>
      </div>
   );
}

export default App;
