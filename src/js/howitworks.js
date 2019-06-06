// Get the modal
let modal2 = document.getElementById("how-modal");

// Get the button that opens the modal
let btn2 = document.getElementById("how-btn");

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("how-close")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
modal2.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
