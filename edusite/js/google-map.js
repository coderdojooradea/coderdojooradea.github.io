var position = { lat: 47.0576328, lng: 21.9225422 }	

// Set google map options
var options = {
	center: position,
	zoom: 17
}

// Init Map
var map = new google.maps.Map( document.getElementById('contact-map') , options);

// Set map marker
var marker = new google.maps.Marker({
    position: position,
    map: map,
});
