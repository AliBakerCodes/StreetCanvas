const btnAddPegEl = document.querySelector("#btnAddPeg")
const header_container = document.getElementById("header-container");
const mvContainerEl = document.querySelector("#mvContainer");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const slideContainerEL=document.querySelector("#slide-container");
var modelViewer = document.getElementById("model-viewer");
const noModelsEl = document.querySelector("#noModels");
let userLat;
let userLong;

// getModels();
// function getModels() {
//   let elementsSplitted = [];
//   let elementsToSave = [];
//   const elementsOnLS = localStorage.getItem("places");
//   if (elementsOnLS) {
//     elementsSplitted = elementsOnLS.split("#");
//     elementsSplitted.forEach((element) => {
//       if (element.length > 0 && element.includes("{")) {
//         elementsToSave.push(JSON.parse(element));
//       }
//     });
//     places = elementsToSave;
//   }
// }

function model(name, glb, usdz, thumbnail)  {
    this.name = name;
    this.glb = glb;
    this.usdz=usdz;
    this.thumbnail=thumbnail
}

function user(name, models){
    this.name = name;
    this.models = models;
}

const myUser = new user("Ali");
myUser["models"] = [];

const astro = new model("Astronaught", "../assets/3dmodels/NeilArmstrong.glb", "../assets/3dmodels/NeilArmstrong.usdz", "../artest/assets/img/neil.png")
myUser.models.push(astro)
const witch = new model("Fire Witch", "../assets/3dmodels/Fire_Witch.glb", "../assets/3dmodels/Fire_Witch.usdz","../artest/assets/img/Fire_Witch.png")
myUser.models.push(witch)
const reaper = new model("Reaper", "../assets/img/Reaper.glb",null,"../assets/img/Reaper.glb")
myUser.models.push(reaper)

console.log("myUser", myUser);



function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
};

genSlides = (user) => {
    if(user.models){
        noModelsEl.classList.add("HIDE");
        mvContainerEl.classList.remove("HIDE");
        user.models.forEach((model) => {
            const slide =`<button class="slide selected" onclick="switchSrc(this, ${model.name})" style="background-image: url('${model.thumbnail}');">`
        });
        console.log ("First Model: " + user.models[0].name);
        console.log ("First Slide Element: " + slides[0]);
        window.switchSrc(slides[0], user.models[0].name);
    } else {
        mvContainerEl.classList.add("HIDE");
        noModelsEl.classList.remove("HIDE");
    }
    
}

genSlides(myUser);

//Listen clicks on slides
window.switchSrc = (element, name) => {
    user.models.forEach((model) => {
      if (model.name == name) {
        console.log(model);
  
        modelViewer.src = model.glb;
        if(model.usdz){ 
            modelViewer.setAttribute("ios-src", model.usdz);
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
  function success(position) {
    userLat = position.coords.latitude;
    userLong= position.coords.longitude;
    console.log("Your latitude: " + userLat, "Your longitude: " + userLong);
    const latEl = document.querySelector("#dispLat");
    const lonEl = document.querySelector("#dispLon");
    latEl.innerHTML=userLat;
    lonEl.innerHTML=userLong;
  }

function addPegHandler(event) {
    event.preventDefault();
};

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("slider").addEventListener("beforexrselect", (ev) => {
      // Keep slider interactions from affecting the XR scene.
      ev.preventDefault();
    });
  });

btnAddPegEl.addEventListener("click",addPegHandler);

function error() {
    console.log("Sorry, no position available.");
    alert(
      "No pudimos acceder a tu ubicacion. ¡Debes activarla para descubrir que cosas hay a tu alrededor!"
    );
  }



const options = {
    enableHighAccuracy: true, //accurate within inches
    maximumAge: 500,
    timeout: 1000, //Updates once per second
  };
  
  const watchID = navigator.geolocation.watchPosition(success, error, options);