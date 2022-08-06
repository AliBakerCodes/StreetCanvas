import React from 'react';
import golive from '../utils/images/golive.JPG'

export default function GoLive() {
    return (
        <div className="golive">
            <h1>Go Live</h1>
            <img src={golive} alt="Go live"></img>
        </div>
    );
}