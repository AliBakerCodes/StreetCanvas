const btnUpdateEl = document.querySelector("#btnUpdate")
const btnAddPegEl = document.querySelector("#btnAddPeg")
const btnUseLocEl = document.querySelector("#btnUseLoc")

function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

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
