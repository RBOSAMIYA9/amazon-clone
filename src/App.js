import Header from './header';
import React ,{ useState ,useEffect} from 'react'
import './App.css';
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {db} from './firebase';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const getCartItems = ()=>{
      db.collection('cart-details').onSnapshot((snapshot)=>{
        
      })
  }
  useEffect(() => {
    getCartItems()
  }, [])
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
         
          <Route path="/Cart">
            <Cart/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
