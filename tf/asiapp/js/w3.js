// Get the modal
var w3modal = document.getElementById('w3myModal');

// Get the button that opens the modal
var w3btn = document.getElementById("w3myBtn");

// Get the <span> element that closes the modal
var w3span = document.getElementsByClassName("w3close")[0];

// When the user clicks the button, open the modal 
w3btn.onclick = function() {
    w3modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
w3span.onclick = function() {
    w3modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == w3modal) {
        w3modal.style.display = "none";
    }
}
