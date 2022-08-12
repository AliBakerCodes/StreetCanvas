import React from "react";
import upload from "../utils/images/upload.png";
import Footer from "../components/Footer";

export default function Upload() {
  return (
    <div className="upload">
      <h1>Upload</h1>
       {/* === Test image === */}
      <img src={upload} alt="upload"></img>
  <Footer/>
    </div>

  );
}

// place the image