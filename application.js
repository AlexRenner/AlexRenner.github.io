$(document).ready(function(){
	// Event listener for navigating through tabs
	$(".tab").on("click", function(event){
		// Change active tab
		$(".tab").removeClass("active");
		$(this).addClass("active");
		// Remove displayed content
		$(".content").addClass("hidden");
		// Display new content
		$("body").find("#" + $(this)[0].innerText).removeClass("hidden");
	});
	// Event listener for changing tab color on hover
	$(".tab").hover(
		function(){
			$(this).css("background-color", "#07889b");
			$(this).css("color", "white");
		},
		function(){
			if($(this).hasClass("active") === false){
				$(this).css("background-color", "#4abdac");
				$(this).css("color", "black");
			}
	});
	// Event listener for mouse down event
	$(".tab").mousedown(function(){
		$(this).css("background-color", "#f1f1f1");
		$(this).css("color", "black");
	});
	// Event listener for mouse up event
	$(".tab").mouseup(function(){
		$(".tab").css("background-color", "#4abdac");
		$(".tab").css("color", "black");
		$(this).css("background-color", "#07889b");
		$(this).css("color", "white");
	});
	// Event listener for menu button
	$('#menu-button').on('click', function(){
		if($('.dropdown-content:hidden').length == 0){
			$('.dropdown-content').css("display", "none");
		} else {
			$('.dropdown-content').css("display", "block");
		};
	});
	// Event listener for navigating via links in dropdown menu
	$(".link").on("click", function(){
		// Remove displayed content
		$(".content").addClass("hidden");
		// Display new content
		$("body").find("#" + $(this)[0].innerText).removeClass("hidden");
		// Hide menu
		$('.dropdown-content').css("display", "none");
	});
});

function animateMenuButton(bar) {
  bar.classList.toggle("change");
};

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}