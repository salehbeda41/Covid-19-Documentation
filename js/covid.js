// Back to start button
//Get the button
let mybutton = document.querySelector("#btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Close button

let closeButton=document.querySelector(".close-icon");
let navbarToggler=document.querySelector(".navbar-toggler")
let aria=document.querySelector(".collapse")
let colLapse =document.querySelector(".navbar-collapse");

function closeIcon() {
  let y= navbarToggler.getAttribute("aria-expanded")
  if(y=="true"){
    closeButton.style.display="block";
  }

}

function closeAria(){
  navbarToggler.setAttribute("aria-expanded",false);
  navbarToggler.classList.add("collapsed");
  colLapse.classList.remove("show");
  closeButton.style.display="none";

}

