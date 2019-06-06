// Get the modal
let modal4 = document.getElementById("bike-modal");

// Get the button that opens the modal
let btn4 = document.getElementById("bike-btn");

// Get the <span> element that closes the modal
let span4 = document.getElementsByClassName("bike-close")[0];

// When the user clicks the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
modal4.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
