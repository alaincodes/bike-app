const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.DB_USER);

function requette(url) {
  return new Promise(function(resolve, reject) {
    var req = new window.XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          resolve(req.responseText);
        } else {
          reject(req);
        }
      }
    };
    req.open("GET", url);
    req.send();
  });
}

var getInfos = function() {
  return new Promise(function(resolve, reject) {
    requette(
      "https://api.jcdecaux.com/vls/v1/stations?contract=marseille&apiKey=9f3f14e07825f087f2aa0f9edd75acdc12c0eae0"
    )
      .then(function(response) {
        var data = JSON.parse(response);
        resolve(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};

var stationsTab = [];

getInfos().then(function(data) {
  data.forEach(function(info) {
    var station = {
      numeroStation: info.number,
      nomContrat: info.contract_name,
      nomStation: info.name,
      adresseStation: info.address,
      positionStation: info.position,
      bornePaiement: info.banking,
      bonus: info.bonus,
      nbrMaxVelos: info.bike_stands,
      retourVelo: info.available_bike_stands,
      velosRestants: info.available_bikes,
      derniereMAJ: info.last_update,
      status: info.status
    };

    stationsTab.push(station);

    var image = {
      url:
        "https://cdn4.iconfinder.com/data/icons/cycling/100/cycling-mountain-bike-color-2-512.png",
      scaledSize: new google.maps.Size(40, 40), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    mark = new google.maps.Marker({
      map: map,
      position: station.positionStation,
      name: station.nomStation,
      icon: image
    });

    google.maps.event.addListener(mark, "click", function() {
      document.getElementById("nomStation").innerHTML = `
      <h2>Stand Name: ${station.nomStation}</h2>
      <p>Address: ${station.adresseStation}</p>
      <p>Status: ${station.status}</p>
      <p>Available Slot to Park: ${station.retourVelo}</p>
      <p>Max Bikes: ${station.nbrMaxVelos}</p>
      <p>Bikes left: ${station.velosRestants}</p>
      `;
    });

    // Click marker to get station infos
    mark.addListener("click", function() {
      modal.style.display = "block";
    });
  });

  // click outside to close
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// MODAL CALL
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};
