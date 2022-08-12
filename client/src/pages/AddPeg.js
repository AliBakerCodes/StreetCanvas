import React from "react";
export default function AddPeg() {
  const modelRef=React.useRef();
  return (
    <div id="add-peg-container">
    <div id="header-container"></div>
    {/* <div id="noModels" className="HIDE"><p>No Models Found <a href="/upload">Upload a Model</a></p></div> */}
    <div id="mvContainer">
      <model-viewer
        id="model-viewer"
        src="https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/NeilArmstrong.glb"
        ios_src="https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/NeilArmstrong.usdz"
        shadow-intensity="1"
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="auto"
        camera-controls
        alt="A 3D model carousel"
        reveal= "auto"
        ref={(ref)=>{
            modelRef.current= ref;
        }}
      >
        Lattitude: <span id="dispLat"></span> <br />
        Longitude:<span id="dispLon"></span> <br />
        <input type="number" id="inpt-radius" /> m radius <br />
        <button className="ar-button" id="add-peg-btn">Add Peg</button>
            <button className="ar-button"slot="ar-button" id="ar-button">Place in World</button>
        <div id="slider" className="slider">
          <div className="slides" id="slide-container"></div>
        </div>
      </model-viewer>
    </div>
    </div>
  );
}
