
import './App.css';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pagers/Home';
import Products from './components/pagers/Products';
import SignUp from './components/pagers/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <>  
    <BrowserRouter> 
       <div>
        <Navbar/>     
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' exact component={Products} />           
            <Route path='/sign-Up' exact component={SignUp} />
        </Switch> 
        <Footer/>        
       </div>           
    </BrowserRouter>         
    </>
  );
}

export default App;
