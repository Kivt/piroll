function initMap() {
	var myLatLng = {lat: 34.056787, lng: -118.241229};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

$( document ).ready(function() {
	var isVisible = false;
	var nameRegExp = /^[a-zA-Z]+$/;
	var emailRegExp = /\S+@\S+\.\S+/;
	
	$('.load-work').click(function() {

		if (isVisible) {
			$('.third-row img').css({'height': '0'});
			$('.third-row').css({'visibility': 'hidden', 'height': '0'});
			$('.load-work').html("LOAD MORE WORK");
			isVisible = false;
		} else {
	    $('.third-row img').css({'height': '250px'});
			$('.third-row').css({'visibility': 'visible', 'height': '250px'});
			$('.load-work').html("<i class='pe-7s-angle-up-circle' style='font-size: 50px'></i>");
			isVisible = true;
		}
	});

	$('nav .nav-link').click (function(event) {
		$('.nav-link').removeClass('active');
		event.preventDefault();
		var target = $(this).attr("href");
		$('html, body').animate({scrollTop: $(target).offset().top - 50 }, 400);
		$(this).addClass('active');

		return false;
	});

	$('#send-button').click(function(event) {
		var error = 1;
		event.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		var title = $('#form-title').val();

		if ( nameRegExp.test(name) == false || name.length > 30 ) {
			$('#name').addClass('warning');
			error = 0;
		} 

		if ( emailRegExp.test(email) == false || email.length > 50 ) {
			$('#email').addClass('warning');
			error = 0;
		} 

		if (title.length > 50) {
			$('#form-title').addClass('warning');
			error = 0;
		}

		if (error) {
			$('#name').val('');
			$('#email').val('');
		}
	});

	$(".form-control").click(function() {
		$(this).removeClass('warning');
	});
});