import React from "react";
import Header from './pages/Header'
import Footer from './pages/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/About'>
            <About/>
          </Route>  
          <Route path='/Contact'>
            <Contact/>
          </Route>                                                
        </Switch>
          <Footer/>
      </Router>   
    </div>
  );
}
export default App;
