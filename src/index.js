import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { Navbar, Form } from 'react-bootstrap'
import Orders from './Components/Pages/Orders';

import { Route, Link, BrowserRouter as Router } from "../node_modules/react-router-dom";
import Login from './Components/Pages/Login';
import Footer from './Components/Footer/Footer';



const myrouter = (
<div>
<Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand> <Link to="/"><img style={{ width: "150px" }} src="./img/amaderLogo.png" alt="amaderLogo.png" /></Link>  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Form inline>
          <Nav>
            <Nav.Link><span id="fa" class="fas fa-cart-plus"></span> <a ><Link style={{textDecoration:"none"}} to="/Orders"> Orders</Link></a> </Nav.Link>
            <Nav.Link href="#home"><span id="fa" class="fas fa-location-arrow"></span> Badda</Nav.Link>
            <Nav.Link ><span id="fa" class="fas fa-sign-in-alt"></span> <Login /> </Nav.Link>
          </Nav>
        </Form>
      </Navbar.Collapse>
    </Navbar>


    <div>

      <Route exact path="/" component={App} />
      <Route path="/Orders" component = {Orders} />
    </div>
  </Router>

    <div>
      <Footer />
    </div>
</div>



)


ReactDOM.render(myrouter, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
