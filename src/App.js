
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
import AuthProvider from './context/AuthContext/AuthProvider';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';
import UnAuthorized from './Pages/UnAuthorized/UnAuthorized';
import AdminRoute from './Shared/AdminRoute/AdminRoute';
import SideCart from './Shared/SideCart/SideCart';

function App() {
   return (
      <div>
         <AuthProvider>
            <BrowserRouter>
               {/* //cart icon in the middle left of web pages */}
               <SideCart />
               {/* //cart icon in the middle left of web pages */}
               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route exact path="/explore">
                     <Explore></Explore>
                  </Route>
                  <AdminRoute exact path="/addproduct">
                     <AddProduct></AddProduct>
                  </AdminRoute>
                  <PrivateRoute exact path="/addreview">
                     <AddReview></AddReview>
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard">
                     <Dashboard></Dashboard>
                  </PrivateRoute>
                  <Route exact path="/login">
                     <Login></Login>
                  </Route>
                  <AdminRoute exact path="/makeadmin">
                     <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                  <AdminRoute exact path="/manageorders">
                     <ManageOrders></ManageOrders>
                  </AdminRoute>
                  <AdminRoute exact path="/manageproducts">
                     <ManageProduct></ManageProduct>
                  </AdminRoute>
                  <PrivateRoute exact path="/myorders">
                     <MyOrders></MyOrders>
                  </PrivateRoute>
                  <PrivateRoute exact path="/payment">
                     <Payment></Payment>
                  </PrivateRoute>
                  <PrivateRoute exact path="/purchase/:id">
                     <Purchase></Purchase>
                  </PrivateRoute>
                  <Route exact path="/register">
                     <Registration></Registration>
                  </Route>
                  <Route exact path="/unauthorized">
                     <UnAuthorized></UnAuthorized>
                  </Route>
                  <Route exact path="*">
                     <PageNotFound></PageNotFound>
                  </Route>
               </Switch>
            </BrowserRouter>
         </AuthProvider>
      </div>
   );
}

export default App;
