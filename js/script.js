// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");


// Get the <span> element that closes the modal
var div = document.getElementsByClassName("close")[0];

//
var mobileDiv = document.getElementsByClassName("mobileDiv");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("mobileDiv").style.zIndex = "-1";
}
btn2.onclick = function() {
  modal.style.display = "block";
  document.getElementById("mobileDiv").style.zIndex = "-1";
}

// When the user clicks on <span> (x), close the modal
div.onclick = function() {
  modal.style.display = "none";
  document.getElementById("mobileDiv").style.zIndex = "6";
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
// }


//hide header on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
