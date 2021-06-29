import Navbar from "./Navbar"
import i1 from "./off1.jpg"
import i2 from "./off2.jpg"
import i3 from "./off3.jpg"
import i4 from "./off4.jpg"
import i5 from "./off5.jpg"

const About = () => {
    return ( 
        <div>
            <div className="nave">
                <Navbar />
            </div>
            <div className="cont">
            <p style={{color:"black",fontWeight:"bold"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis elit sit amet massa maximus malesuada. Vestibulum vitae nisl sed neque imperdiet viverra eu sit amet mi. Nullam a mi et enim convallis varius. Curabitur id rutrum nisl. Nam ante mi, rhoncus fermentum pharetra ut, aliquam ac ipsum. Praesent imperdiet in sem ac iaculis. Nam vulputate lectus a faucibus viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit nibh a mauris malesuada, ac blandit risus sagittis. Donec eu diam quis mi consequat pharetra. Nullam pulvinar justo a neque lacinia, euismod varius mauris porttitor. Nulla facilisi. Phasellus semper posuere metus vitae accumsan. Nulla facilisi.

Duis in turpis ut dolor tempus vehicula eu quis justo. Vestibulum arcu ligula, ullamcorper blandit pretium non, pharetra non lacus. Ut ultricies, libero ut posuere consequat, massa neque dapibus nisl, et ornare urna turpis vitae purus. Nulla id tristique libero, ac tempor dolor. Quisque et metus sed tellus viverra luctus. Cras gravida, metus vel rhoncus semper, justo orci tempus ex, nec fermentum ipsum libero vel massa. Etiam volutpat turpis tellus, eu fringilla justo placerat in. Phasellus a odio ac sem pretium suscipit id a tellus. Suspendisse eleifend sed erat et imperdiet. Donec purus libero, tincidunt laoreet aliquet in, tristique vel elit.

Nam sed faucibus metus. Fusce ut posuere lacus. Donec congue venenatis risus, vitae maximus lacus pharetra quis. Praesent ultrices pellentesque enim quis semper. Sed dictum ipsum sed augue aliquam venenatis. Nulla facilisi. Etiam sed lorem orci. Aliquam quam nunc, lacinia vel cursus ut, cursus vitae metus. Nunc consectetur ultricies augue, vel dignissim tellus vehicula eu. Nullam venenatis cursus justo non blandit. Nullam porta tortor eu nibh tincidunt, quis scelerisque tellus fermentum. Nulla ultricies neque ac augue lacinia accumsan.</p>
            <div className="pic">
                
                <div className="row">
                    <div class="polaroid">
                    <img src={i5} style={{width:500}}></img>
                    <div class="container">
                        <p>Office</p>
                    </div>
                    </div>
                    <div class="polaroid">
                    <img src={i1} style={{width:500}}></img>
                    <div class="container">
                        <p>Mr.Mahesh Prabhu</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div class="polaroid">
                    <img src={i2} style={{width:500}}></img>
                    <div class="container">
                        <p>Mr.Mahesh Prabhu</p>
                    </div>
                    </div>
                    <div class="polaroid">
                    <img src={i3} style={{width:500}}></img>
                    <div class="container">
                        <p>Office</p>
                    </div>
                    </div>
                </div>
                    <div class="polaroid">
                    <img src={i4} style={{width:500}}></img>
                    <div class="container">
                        <p>Office</p>
                    </div>
                    </div>
                
            </div>
            </div>
        </div>
            
        
     );
}
 
export default About
