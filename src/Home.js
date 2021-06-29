import Navbar from './Navbar'
import { useState , useEffect } from 'react'
import one from './12.jpg'
import two from './13.jpg'
import three from './14.jpg'
import four from './16.jpg'
import five from './15.jpg'

const Home = () => {
    const arr = [one,two,three,four,five];
  var x=" "
  var k
  const[clear,setclear] = useState(null);
  const [im,setim] = useState(one);
  const bgchange = () => 
  { 
    console.log('Im here');
    k=Math.floor(Math.random()*arr.length)
    x = arr[k]
    setim(x)  
    clearInterval(clear)
  }
  useEffect( () => {
    setclear(setInterval(bgchange, 5000));
   }, [] )
    return ( 
        <div class="bg-img">
            <img id="homebg" src={ im } alt="hi"/>
            <Navbar/>
        </div>
     );
}
 
export default Home;