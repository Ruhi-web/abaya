// navbar color change onscroll
$(document).ready(function () {
	var checkScrollBar = function () {
		$("nav").css({
			backgroundColor: $(this).scrollTop() > 1 ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0.164)",
		});
	};
	$(window).on("load resize scroll", checkScrollBar);
});
// carousal
$(document).ready(function () {
	$("#carousel-1").carousel({
		interval: 2000,
	});

	$("#carousel-1.carousel .carousel-item").each(function () {

		var width = window.innerWidth;
		var height = window.innerHeight;

		console.log(width);
        
		if (width < 1080) {
            var total = 1;
		} else {
            var total = 3;
		}

		let next = $(this).next();

		for (var i = 0; i < total - 1; i++) {
			if (!next.length) {
				next = $(this).siblings(":first");
			}
			next.children(":first-child").clone().appendTo($(this));
			next = next.next();
		}
	});
});



$(document).ready(function () {

$(function() {
	$('#azure2').mouseenter(function() {
	  $('#azureHij').addClass("inverse");
	  $('#azure3').addClass("inverse");
	}).mouseleave(function () {
	  $('#azureHij').removeClass("inverse");
	  $('#azure3').removeClass("inverse");
	});
  });

$(function() {
	$('#azure3').mouseenter(function() {
	  $('#azureHij').addClass("inverse");
	  $('#azure2').addClass("inverse");
	}).mouseleave(function () {
	  $('#azureHij').removeClass("inverse");
	  $('#azure2').removeClass("inverse");
	});
  });

});