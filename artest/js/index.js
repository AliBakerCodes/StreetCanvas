const btnUpdateEl = document.querySelector("#btnUpdate")
const btnAddPegEl = document.querySelector("#btnAddPeg")
const btnUseLocEl = document.querySelector("#btnUseLoc")

function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

const myUser = new user("Ali");
myUser["models"] = [];

const astro = new model("Astronaught", "https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/NeilArmstrong.glb", "https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/NeilArmstrong.usdz", "https://purple-aardvark.s3.amazonaws.com/assets/img/NeilArmstrong.png");
myUser.models.push(astro);
const witch = new model("Fire Witch", "https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/Fire_Witch.glb", "https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/Fire_Witch.usdz","https://purple-aardvark.s3.amazonaws.com/assets/img/Fire_Witch.png");
myUser.models.push(witch);
const baphomet = new model("Red Baphomet", "https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/Red_Baphomet.glb","https://purple-aardvark.s3.amazonaws.com/assets/3dModels/Red_Baphomet.usdz", "https://purple-aardvark.s3.amazonaws.com/assets/img/Red_Baphomet.png")
myUser.models.push(baphomet);
const Genshin_Impact_Eula = new model("Genshin Impact - Eula", "https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/Genshin_Impact_-_Eula.glb","https://purple-aardvark.s3.amazonaws.com/assets/3dmodels/Genshin_Impact_-_Eula.usdz", "https://purple-aardvark.s3.amazonaws.com/assets/img/genshin_impact_-_eula.png")
myUser.models.push(Genshin_Impact_Eula);

console.log("myUser", myUser);

function useCurrentLocation(event) {
    event.preventDefault();
    const latEl = document.querySelector("#dispLat");
    const lonEl = document.querySelector("#dispLon");
    const lat = document.getElementById("lat");
    const lon = document.getElementById("lon");
    lat.value = toFixed(latEl.textContent, 6)
    lon.value = toFixed(lonEl.textContent, 6)
};

btnUpdateEl.addEventListener("click",updateItems);
btnAddPegEl.addEventListener("click",onSaveNewPlace);
btnUseLocEl.addEventListener("click",useCurrentLocation);
