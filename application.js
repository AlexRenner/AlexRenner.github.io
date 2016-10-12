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
			$(this).css("background-color", "#a0a0a0");
			$(this).css("color", "white");
		},
		function(){
			$(this).css("background-color", "#e0e0e0");
			$(this).css("color", "black");
	});
	// Event listener for mouse down event
	$(".tab").mousedown(function(){
		$(this).css("background-color", "#494949");
	});
	// Event listener for mouse up event
	$(".tab").mouseup(function(){
		$(this).css("background-color", "#e0e0e0");
	});
});