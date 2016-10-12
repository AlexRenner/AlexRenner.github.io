$(document).ready(function(){
	// Event listener for navigating through tabs
	$(".tab").on("click", function(event){
		console.log($(this)[0].innerText);
		// Change active tab
		$(".tab").removeClass("active");
		$(this).addClass("active");
		// Remove displayed content

		// Display new content
	})
});