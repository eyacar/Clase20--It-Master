import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.scss';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './componentes/Home'
import Contact from './componentes/Contact'
import TitlebarGridList from './componentes/Product'
import Productos from './componentes/Productos'
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Price from './componentes/Price';

const theme = createMuiTheme({
    palette: {
    primary: green,
    //type:'dark'
    }
  });

function Click(){
const [boton, navegando] = useState()
return(navegando('left="0"'))}

const Nav = () =>{
const [boton, navegando] = useState()
return(
    <ThemeProvider theme={theme}>
   {/* <Paper> */}
    <Router> 
    <nav style={boton}>
    <ul>
    <li><Link to='/'><Button color="primary">Home</Button></Link></li>
    <li id='p1'><Link to='/Products'><Button color="primary">Products</Button></Link></li>
    <li id='p2'><Link to='/Productos'><Button color="primary">Products</Button></Link></li>
    <li><Link to='/Price'><Button color="primary">Price</Button></Link></li>
    <li><Link to='/Contact'><Button color="primary">Contact</Button></Link></li>    
    </ul>
    </nav>

 <Switch>
     <Route path='/' exact component={Home}><Home/></Route>
     <Route path='/Products' exact component={TitlebarGridList}><TitlebarGridList/></Route>
     <Route path='/Productos' exact component={Productos}><Productos/></Route>
     <Route path='/Price' exact component={Price}><Price/></Route>
     <Route exact path='/Contact' component={Contact}><Contact/></Route>
</Switch>
  </Router>
   
  {/* </Paper> */}
    </ThemeProvider>
)
}

export default Nav; 
