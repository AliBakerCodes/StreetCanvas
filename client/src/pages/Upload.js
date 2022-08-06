import React from "react";
import upload from "../utils/images/upload.png";

export default function Upload() {
  return (
    <div className="upload">
      <h1>Upload</h1>
       {/* === Test image === */}
      <img src={upload} alt="upload"></img>
    </div>
  );
}

// place the image