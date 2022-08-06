const btnAddPegEl = document.querySelector("#btnAddPeg")
const header_container = document.getElementById("header-container");
const mvContainerEl = document.querySelector("#mvContainer");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const slideContainerEL=document.querySelector("#slide-container");
var modelViewer = document.getElementById("model-viewer");
const noModelsEl = document.querySelector("#noModels");
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

const astro = new model("Astronaught", "./artest/assets/3dmodels/NeilArmstrong.glb", "./artest/assets/3dmodels/NeilArmstrong.usdz", "./artest/assets/img/neil.png")
myUser.models.push(astro)
const witch = new model("Fire Witch", "./artest/assets/3dmodels/Fire_Witch.glb", "./artest/assets/3dmodels/Fire_Witch.usdz","./artest/assets/img/Fire_Witch.png")
myUser.models.push(witch)
const reaper = new model("Reaper", "./artest/assets/3dmodels/Reaper.glb",null,"./artest/assets/3dmodels/Reaper.glb")
myUser.models.push(reaper)

console.log(myUser);



function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
};

function genSlides(user){
    if(user.models){
        noModelsEl.classList.add("HIDE");
        mvContainerEl.classList.remove("HIDE");
        user.models.forEach((model) => {
            const slide =`<button class="slide selected" onclick="switchSrc(this, name)" style="background-image: url('${model.thumbnail}');">`
        });
    } else {
        mvContainerEl.classList.add("HIDE");
        noModelsEl.classList.remove("HIDE");
    }
    
}

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


function useCurrentLocation(event) {
    event.preventDefault();
    const latEl = document.querySelector("#dispLat");
    const lonEl = document.querySelector("#dispLon");
    const lat = document.getElementById("lat");
    const lon = document.getElementById("lon");
    lat.value = toFixed(latEl.textContent, 6)
    lon.value = toFixed(lonEl.textContent, 6)
};

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("slider").addEventListener("beforexrselect", (ev) => {
      // Keep slider interactions from affecting the XR scene.
      ev.preventDefault();
    });
  });

btnAddPegEl.addEventListener("click",onSaveNewPlace);
