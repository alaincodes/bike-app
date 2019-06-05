document.getElementById("button2").addEventListener("click", loadStations);

function loadStations() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.jcdecaux.com/vls/v1/stations?contract=marseille&apiKey=9f3f14e07825f087f2aa0f9edd75acdc12c0eae0",
    true
  );

  xhr.onprogress = function() {
    console.log("Loading...........");
  };

  xhr.onload = function() {
    if (this.status == 200) {
      var stations = JSON.parse(this.responseText);
      var output = "";
      for (var i in stations) {
        output += `
        <h1>${stations[i].name}</h1>
        <p>${stations[i].address}</p>
        `;
      }
      document.getElementById("stations").innerHTML = output;
    }
  };

  xhr.onerror = function() {
    console.log("Stations failed to load...");
  };

  xhr.send();
}

// loadStations();
