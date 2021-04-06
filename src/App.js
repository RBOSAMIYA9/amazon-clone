import Header from './header';
import './App.css';
import Home from './home';
import Cart from './cart';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
         
          <Route path="/cart">
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
