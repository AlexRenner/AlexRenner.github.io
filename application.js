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
		$(this).css("background-color", "#007849");
	});
	// Event listener for mouse up event
	$(".tab").mouseup(function(){
		$(".tab").css("background-color", "#4abdac");
		$(".tab").css("color", "black");
		$(this).css("background-color", "#07889b");
		$(this).css("color", "white");
	});
});