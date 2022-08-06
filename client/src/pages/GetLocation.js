import React from 'react';
import getlocation from '../utils/images/getlocation.JPG'

export default function GetLocation() {
    return (
        <div className="getlocation">
            <h1>Get Location</h1>
            <img src={getlocation} alt="get location"></img>
        </div>
    );
}