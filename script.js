//console.log(document.getElementsByClassName("front_page_slides"))

let slideIndex = 1;
showSlides(slideIndex)

console.log("error seems to be style not init on function call, no use to resolve")



// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let i; //undef
    let slides = document.getElementsByClassName("front_page_slides"); //finds front_page_slides classname
    let dots = document.getElementsByClassName("dot"); //finds dots classname
    //console.log(n) 1
    //console.log(slides.length) 2 after init
    if (n > slides.length) {slideIndex = 1} // 1 > 0
        if (n < 1)  {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //console.log( slides[slideIndex-1])
    //console.log( dots[slideIndex-1])
    slides[slideIndex-1].style.display = "block" ;{style = "block"};
    dots[slideIndex-1].className += " active";
    
}