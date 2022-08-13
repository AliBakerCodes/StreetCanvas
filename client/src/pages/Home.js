import Footer from "../components/Footer";
import AuthService from "../auth/decode";
import { useState, useEffect} from "react";

export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false) 
  useEffect(() => {
    const service = AuthService.loggedIn();
    console.log(service)
  if (service === false){
    setLoggedIn(service);
  } else {setLoggedIn(service)}
    
  });
    return (
    <div>
     
      {loggedIn ? 
      <div><h2 className="mainFont">Welcome to <span className="titleFont"> Street Canvas!</span></h2><Footer/></div> :
      <div><h2 className="text-center mainFont">Welcome to <span className="titleFont">Street Canvas</span></h2>
      <h3 className="text-center mainFont">Please Sign up or Login to get Started</h3></div> }
    </div>
  

    );
}