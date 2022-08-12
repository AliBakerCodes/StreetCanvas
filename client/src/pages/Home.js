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
      <div>Welcome to Street Canvas!<Footer/></div> :
      <div><h2 className="text-center">Welcome to Street Canvas</h2>
      <h3 className="text-center">Please Sign up or Login to get Started</h3></div> }
    </div>
  

    );
}