import Navbar2 from "./Navbar2"
import { GoogleMap, withScriptjs , withGoogleMap } from "react-google-maps";

function Map()
{
    return (<GoogleMap 
        defaultZoom={10} 
        defaultCenter={{ lat:9.925201 ,  lng:78.119774}} 
        />
        );
        
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Contact = () => {
    const key = "AIzaSyDYGfGeRdHxad1pflq5QG4zhSHLu677coA"
    console.log("hi" ,key)
    return ( 
        <div>
            <Navbar2/>
            <div className="cont" style={{width:"100vw" , height:'100vh' }}>
                <p style={{color:"black",fontWeight:"bold"}}>99099009425900942590425Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3&libraries=geometry,drawing,places&key=${key}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
     );
}
 
export default Contact;