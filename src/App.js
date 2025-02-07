
import './App.css';
import Navbar from './Components/nav/NavBar';
import Sidebar from './Components/sideBar/SideBar'
import SellersList from './Components/sellers/SellersList';
import Product from './Components/products/Product';
import Dashboard from './Components/orders/orders';
import Sales from './Components/sales/sales';
import Users from './Components/users/Users';

import Footer from './Components/footer/footer';
import Products from './Components/orders/Orderdetails';
 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcom from './Components/welcomePage/Welcom';
import SellerDetails from './Components/sellers/SellersDetails';
 





function App() {

  return (

    <div>
      <Router>

        <Navbar />
        



        <div className='row'>

          <Sidebar className="col-lg-3 fixed" />

          <div className='col-lg-9'>
            <Switch> 
            <Route path='/wel' component={Welcom} />
              <Route path='/SellersList' component={SellersList} />
              <Route path='/Products' component={Product} />
              <Route path='/Sales' component={Sales} />
              <Route path='/Users' component={Users} />
              <Route path='/orders' component={Dashboard} />
              <Route path='/orderDetails' component={Products} />
              <Route path='/SellerDetails' component={SellerDetails} />
             
              

          
            </Switch>
           
           
          </div>
        </div>
        <Footer/> 
     
       

      </Router>
      

    </div>



  )
}

export default App;
