// Get the modal
let modal5 = document.getElementById("parking-modal");

// Get the button that opens the modal
let btn5 = document.getElementById("parking-btn");

// Get the <span> element that closes the modal
let span5 = document.getElementsByClassName("parking-close")[0];

// When the user clicks the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
modal5.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
};
