let places = [];
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
  if(places){
  places.map((place) => {
    if (
      distance(userLat, userLong, place.location[0], place.location[1]) * 1000 <
      (place.radius[0] ? place.radius[0] : 5)
    ) {
      //If it's within the radius
      nearestPlaces.push(place);
    }
  });
  return nearestPlaces;
  }
}


function onSaveNewPlace(lat, lon, radius, model) {
  let place = {};
    place["name"] = model.name;
    place["location"] = [+lat, +lon];
    place["glb"] = model.glb;
    place["usdz"] = model.usdz;
    place["image"] = model.thumbnail;
    place["radius"] = radius;

  //Save values
  places.push(place);
  const elementsOnLS = localStorage.getItem("places")
    ? localStorage.getItem("places")
    : "";
  localStorage.setItem("places", elementsOnLS + JSON.stringify(place) + "#");

  //Clear values
  place = {};

  location.reload();
}
