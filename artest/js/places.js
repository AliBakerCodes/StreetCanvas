let places = [];
var latEl = document.querySelector("#dispLat");
var lonEl = document.querySelector("#dispLon");
getPlacesOnLocalStorage();
function getPlacesOnLocalStorage() {
  let elementsSplitted = [];
  let elementsToSave = [];
  const elementsOnLS = localStorage.getItem("places");
  if (elementsOnLS) {
    elementsSplitted = elementsOnLS.split("#");
    elementsSplitted.forEach((element) => {
      if (element.length > 0 && element.includes("{")) {
        elementsToSave.push(JSON.parse(element));
      }
    });
    places = elementsToSave;
  }
}

function findNearestPlaces(userLat, userLong) {
  let nearestPlaces = [];
  console.log("Places", places)
  console.log("Your latitude: " + userLat, "Your longitude: " + userLong);
  const latEl = document.querySelector("#dispLat");
  const lonEl = document.querySelector("#dispLon");
  latEl.innerHTML=userLat;
  lonEl.innerHTML=userLong;
  places.map((place) => {
    if (
      distance(userLat, userLong, place.location[0], place.location[1]) * 1000 <
      5
    ) {
      //If it's at 5 meters or less
      nearestPlaces.push(place);
    }
  });
  return nearestPlaces;
}

function onSaveNewPlace(event) {
  const name = document.getElementById("name").value;
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;
  let place = {};

  if (lat.toString().includes(".") && lon.toString().includes(".")) {
    place["name"] = name;
    place["location"] = [+lat, +lon];
    place["glb"] =
      "https://cdn.glitch.com/1d15db40-d305-405d-b697-7d66fdeeec79%2FAstronaut.glb";
    place["usdz"] =
      "https://cdn.glitch.com/1d15db40-d305-405d-b697-7d66fdeeec79%2FAstronaut.usdz";
    place["image"] =
      "https://cdn.glitch.com/1d15db40-d305-405d-b697-7d66fdeeec79%2FAstronaut.png";
  }

  //Save values
  places.push(place);
  const elementsOnLS = localStorage.getItem("places")
    ? localStorage.getItem("places")
    : "";
  localStorage.setItem("places", elementsOnLS + JSON.stringify(place) + "#");

  //Clear values
  place = {};
  document.getElementById("name").value = "";
  document.getElementById("lat").value = "";
  document.getElementById("lon").value = "";

  location.reload();
}
