// initialize map and base-map
let map = L.map("map").setView([0, 0], 1);
L.tileLayer(
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attribution/">CartoDB</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
).addTo(map);

//adding an event listener
let show_geojson = () => {
  let txt = document.getElementById("geojsontext").value;
  txt = JSON.parse(txt);
  L.geoJSON(txt).addTo(map);
};

document.getElementById("submit").addEventListener("click", show_geojson);
