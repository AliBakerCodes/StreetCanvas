function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2 - lat1).toRad(); // Javascript functions in radians
  var dLon = (lon2 - lon1).toRad();
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

/** Converts numeric degrees to radians */
if (typeof Number.prototype.toRad === "undefined") {
  Number.prototype.toRad = function () {
    return (this * Math.PI) / 180;
  };
}

function updateItems() {
  document.getElementById("updateContainer").style.display = "none";
  document.getElementById("ar-button").style.display = "block";
  // document.getElementById("section1").style.display = "block";

  // const modelViewer = document.querySelector("model-viewer");

  if (nearestPlaces.length > 0) {
    //Set first element
    modelViewer.src = nearestPlaces[0].glb;
    modelViewer.setAttribute("ios-src", nearestPlaces[0].usdz);

    //Create elements of slider
    let slides = document.querySelector(".slides");
    slides.innerHTML = "";

    nearestPlaces.forEach((place, index) => {
      var button = document.createElement("BUTTON");
      button.className = index > 0 ? "slide" : "slide selected";
      button.setAttribute("onclick", `switchSrc(this, '${place.name}')`);
      button.style.cssText = `background-image: url(${place.image});`;
      slides.appendChild(button);
    });
    //Cambia el texto del header
    let header_container = document.getElementById("header-container");
    header_container.innerHTML = "";
    let h2 = document.createElement("H2");
    let t = document.createTextNode(`${nearestPlaces[0].name}`); // Create a text node
    h2.appendChild(t);
    header_container.appendChild(h2);
  }
}
function getPlaceByName(name) {
  nearestPlaces.forEach((place) => {
    if (place.name == name) {
      return place;
    }
  });
}

let modelViewer;
document.addEventListener("DOMContentLoaded", (event) => {
  modelViewer = document.getElementById("model-viewer");
  let slider = document.getElementById("slider");
  document.getElementById("slider").addEventListener("beforexrselect", (ev) => {
    // Keep slider interactions from affecting the XR scene.
    ev.preventDefault();
  });
});

//Listen clicks on slides
function switchSrc(element, name) {
  myUser.models.forEach((model) => {
    if (model.name == name) {
      console.log(model);
      if(model.glb !=""){ 
          modelViewer.setAttribute("src", model.glb);
          modelViewer.setAttribute("ar-modes","webxr scene-viewer quick-look");
      } else {
          modelViewer.setAttribute("ar-modes","webxr quick-look");
          modelViewer.removeAttribute("src");
      };    
      if(model.usdz !=""){ 
          modelViewer.setAttribute("ios-src", model.usdz);
      } else {
          modelViewer.removeAttribute("ios-src");
      };
      //Cambia el selected del boton
      const slides = document.querySelectorAll(".slide");
      slides.forEach((element) => {
        element.classList.remove("selected");
      });
      element.classList.add("selected");
      //Cambia el texto del header
      let header_container = document.getElementById("header-container");
      header_container.innerHTML = "";
      let h2 = document.createElement("H2");
      let t = document.createTextNode(`${model.name}`); // Create a text node
      h2.appendChild(t);
      header_container.appendChild(h2);
    }
  });
};

genSlides = (user) => {
  if(user.models){
      noModelsEl.classList.add("HIDE");
      mvContainerEl.classList.remove("HIDE");
      user.models.forEach((model) => {
          const slide =`<button class="slide selected" id="${model.name}" onclick="switchSrc(this, '${model.name}')" style="background-image: url('${model.thumbnail}');">`
          slideContainerEL.innerHTML+=slide;
      });
      const firstSlide= slideContainerEL.firstChild
      console.log ("First Model: " + user.models[0].name);
      console.log ("First Slide Element: " + firstSlide);
      switchSrc(firstSlide, user.models[0].name);
  } else {
      mvContainerEl.classList.add("HIDE");
      noModelsEl.classList.remove("HIDE");
  }
  
}



//GPS
let nearestPlaces = [];
let newItemsFound = false;

function success(position) {
  let nearestPlacesUpdated = findNearestPlaces(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(nearestPlacesUpdated);
  var is_same =
    nearestPlaces.length == nearestPlacesUpdated.length &&
    nearestPlaces.every(function (element, index) {
      return element === nearestPlacesUpdated[index];
    });
  if (!is_same) {
    nearestPlaces = nearestPlacesUpdated;
    newItemsFound = true;
    genSlides()
    document.getElementById("updateContainer").style.display = "block";
    document.getElementById("ar-button").style.display = "none";
    // document.getElementById("section1").style.display = "none";
  }
}

function error() {
  console.log("Sorry, no position available.");
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 500,
  timeout: 1000, //Five minutes
};

const watchID = navigator.geolocation.watchPosition(success, error, options);
