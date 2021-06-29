import Home from './Home'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import { Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
            {/* <div className="content"> */}
              <Switch> 
               <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/contact">
                  <Contact/>
                </Route>
                <Route exact path="/about">
                  <About/>
                </Route>
                <Route exact path="/services">
                  <Services/>
               </Route>
              </Switch>
            {/* </div>           */}
    </div>
  );
}

export default App;
