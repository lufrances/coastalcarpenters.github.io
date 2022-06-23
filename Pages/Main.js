var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
var slideIndex = 0;
showSlides(n);
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000);
  }

  // Search Bar //
 
  var defaultText = "Search..."; 
var searchBox = document.getElementById("search"); //default text after load 
searchBox.value = defaultText; 
 
//on focus behaviour 
searchBox.onfocus = function() { 
 if (this.value == defaultText) {
 //clear text field 
 this.value = ''; 
 } 
} 
 
//on blur behaviour 
searchBox.onblur = function() {
 if (this.value == "") {
 //restore default text 
 this.value = defaultText; 
 } 
}


