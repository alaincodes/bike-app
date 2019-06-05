const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the url endpoint

request.open(
  "GET",
  "https://api.jcdecaux.com/vls/v1/stations?contract=marseille&apiKey=9f3f14e07825f087f2aa0f9edd75acdc12c0eae0",
  true
);

request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(station => {
      // Create a div with card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = station.name;

      const p = document.createElement("p");
      p.textContent = `Station Address: ${station.address}`;

      const p2 = document.createElement("p");
      p2.textContent = `Available bike stand: ${station.available_bike_stands}`;

      const p3 = document.createElement("p");
      p3.textContent = `Status: ${station.status}`;

      const p4 = document.createElement("p");
      p4.textContent = `Available slot: ${station.available_bike_stands}`;

      const p5 = document.createElement("p");
      p5.textContent = `Total Bikes: ${station.bike_stands}`;

      const p6 = document.createElement("p");
      p6.textContent = `Available Bikes: ${station.available_bikes}`;

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(p5);
      card.appendChild(p6);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working !`;
    app.appendChild(errorMessage);
  }
};

// Send request
request.send();

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);
