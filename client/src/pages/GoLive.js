import React from "react";
import golive from "../utils/images/golive.JPG";
import Footer from "../components/Footer";

export default function GoLive() {
  return (
    <div className="golive">
      <h1>Go Live</h1>
       {/* === Test image === */}
      <img src={golive} alt="Go live"></img>
      <Footer/>
    </div>
    
  );
}


//view the image