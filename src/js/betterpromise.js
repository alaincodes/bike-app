function getStations() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.jcdecaux.com/vls/v1/stations?contract=marseille&apiKey=9f3f14e07825f087f2aa0f9edd75acdc12c0eae0",
    true
  );

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };
}
