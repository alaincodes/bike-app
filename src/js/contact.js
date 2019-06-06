// Get the modal
let modal3 = document.getElementById("contact-modal");

// Get the button that opens the modal
let btn3 = document.getElementById("contact-btn");

// Get the <span> element that closes the modal
let span3 = document.getElementsByClassName("contact-close")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
modal3.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
