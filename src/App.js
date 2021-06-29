import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import { Route, Switch } from 'react-router-dom';
import { useState , useEffect } from 'react'
import one from './12.jpg'
import two from './13.jpg'
import three from './14.jpg'
import four from './16.jpg'
import five from './15.jpg'


function App() {
  const arr = [one,two,three,four,five];
  var x=" "
  // const [i,seti] = useState(0)
  var k
  const[clear,setclear] = useState(null);
  const [im,setim] = useState(one);
  const bgchange = () => 
  { 
    console.log('Im here');
    k=Math.floor(Math.random()*arr.length)
    x = arr[k]
    // x=arr[i]
    // seti(i+1)
    // if(i===5)
    //   {seti(0)
    //     }
    setim(x)  
    clearInterval(clear)
  }
  useEffect( () => {
    setclear(setInterval(bgchange, 5000));
    // setTimeout(bgchange,5000)
   }, [] )
  return (
    <div className="App">
      <div class="bg-img">
        <img src={ im } alt="hi"/>
        <Navbar/>
      </div>
            <div className="content">
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
            </div>          
    </div>
  );
}

export default App;
