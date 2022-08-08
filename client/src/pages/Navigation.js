import React from "react";


function Navigation(){
    return (

        <div class="container">

            <nav class="navbar navbar-dark bg-primary w-100">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1"> Street Canvas</span>
                
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#toggleMobileMenu" 
                        aria-controls="toggleMobileMenu" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                </div>
        
            </nav>
        
            <div class="collapse navbar-collapse" id="toggleMobileMenu">
                <ul class="navbar-nav text-center ms-auto ">
                    <li><a class="nav-link hover-zoom" href="#">Login</a></li>
                    <li><a class="nav-link" href="#">Settings</a></li>
                    <li><a class="nav-link" href="#">Library</a></li>
                </ul>
            </div>
      
                <div class="container w-100 p-0">
                    <img class="w-100"  src="map-template.bmp"></img>
                </div>

            <footer class="footer mt-auto py-3 bg-light">
              <div class="container row m-0 gx-3">

                <div class="col">
                    <button type="button p-2" class="btn btn-outline-success btn-circle btn-md"></button>
                </div>

                <div class="col">
                    <button type="button p-2" class="btn btn-outline-success btn-circle btn-md"></button>     
                </div>

                <div class="col">
                    <button type="button p-2" class="btn btn-outline-success btn-circle btn-md"></button>    
                </div>

                <div class="col">
                    <button type="button" class="btn btn-outline-success btn-circle btn-md"></button>
                </div>
      
      
              </div>
            </footer>
        </div>
    );
}

export default Navigation