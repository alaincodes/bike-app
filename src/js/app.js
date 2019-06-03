// GET https://api.jcdecaux.com/vls/v1/stations?contract=marseille&apiKey=9f3f14e07825f087f2aa0f9edd75acdc12c0eae0

//REQUETTE ASCYNCHRONE
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
// PROMISE
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
//TABLEAU DES STATIONS
var stationsTab = [];

// ATTRIBUTION DE CHAQUE ATTRIBUT A UN OUVEL OBJET "STATION" POUR CHAQUE ELEMENT DE DATA
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
    // ON RANGE LES STATIONS DANS UN TABLEAU
    stationsTab.push(station);
    // UN NOUVEAU MARQUEUR POUR CHAQUE STATION
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
    // UN EVENEMENT 'CLICK' POUR CHAQUE MARQUEUR
    google.maps.event.addListener(mark, "click", function() {
      var infos = document.getElementById("infos");

      document.getElementById("nomStation").innerHTML =
        "Nom de la station : " + station.nomStation;
      document.getElementById("adresseStation").innerHTML =
        "Adresse de la station : " + station.adresseStation;
      document.getElementById("statuStation").innerHTML =
        "Etat de la station : " + station.status;
      document.getElementById("retourVelo").innerHTML =
        "Nombre d'emplacement vide disponibles : " + station.retourVelo;
      document.getElementById("nbrMaxVelos").innerHTML =
        "nombre total de vélos sur la station : " + station.nbrMaxVelos;
      document.getElementById("velosRestants").innerHTML =
        "Nombre de vélo(s) disponible(s) : " + station.velosRestants;
    });

    mark.addListener("click", function() {
      modal.style.display = "block";
    });
  });

  console.log(stationsTab);
});

// MODAL CALL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1}s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
