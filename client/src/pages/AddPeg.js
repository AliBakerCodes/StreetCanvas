import Footer from "../components/Footer";
import React, { useState } from "react";
import useGeoLocation from "../components/geoLocation";
import Auth from "../auth/decode"
import { useQuery, useMutation } from "@apollo/client";
import { ADD_PIN, mutations } from "../mutations/mutations";
import { QUERY_SINGLE_USER_BY_EMAIL } from '../queries/queries';

export default function AddPeg() {
    const email=Auth.getUser().data.email;
    console.log("Auth", email);
    const { loading, data } = useQuery(QUERY_SINGLE_USER_BY_EMAIL,
      {
          variables: {email}
      });
      // const username = data.userEmail.map((user) => (
      //     username=user.username
      // ))
    console.log("User data", data);
    console.log("username", data.userEmail.username)
    const modelRef=React.useRef();
    const location = useGeoLocation();
  //   const username=me;
    { location.loaded ? JSON.stringify(location) && console.log(JSON.stringify(location)) : "Location data not available yet." }
      const title="MyTitle";
      const thumbnail="https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/NeilArmstrong.png";
      const description="Neil Armstrong";
      const [radius, setRadius] = useState('');
    
      const [addPin, { error }] = useMutation(ADD_PIN);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addPin({
            variables: { username, title, thumbnail, description, lat, lon, radius, glb, usdz },
          });
    
          setRadius('');
        } catch (err) {
          console.error(err);
        }
      };
  
  
    return (
      <div id="add-peg-container">
      <div id="header-container">Add Peg</div>
      {Auth.loggedIn() ? (
      <div id="mvContainer">
        <model-viewer
          id="model-viewer"
          src="https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/NeilArmstrong.glb"
          ios_src="https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/NeilArmstrong.usdz"
          shadow-intensity="1"
          ar
          ar-modes="scene-viewer quick-look webxr"
          ar-scale="auto"
          camera-controls
          alt="A 3D model carousel"
          reveal= "auto"
          ref={(ref)=>{
              modelRef.current= ref;
          }}
        >
          Lattitude: {location.coordinates.lat} <br />
          Longitude: {location.coordinates.lon} <br />
          <form onSubmit={handleFormSubmit}>
          <input type="number" id="inpt-radius" /> m radius <br />
          <button className="ar-button" id="add-peg-btn" type="submit">Add Peg</button>
          </form>
              {/* <button className="ar-button"slot="ar-button" id="ar-button">Place in World</button> */}
          <div id="slider" className="slider">
            <div className="slides" id="slide-container"></div>
          </div>
        </model-viewer>
      <Footer/>
      </div>
      ) :(
          <p>You Must Login to place Pin</p>
      )}
          </div>
    )
};
