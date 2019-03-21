
function initMap() {
  // var uluru = {lat: 52.237049, lng: 21.017532};
  var grayStyles = [
    {
      featureType: "all",
      stylers: [
        { saturation: -80 },
        { lightness: 30 }
      ]
    },
    {elementType: 'labels.text.fill', stylers: [{color: '#A3A3A3'}]}
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.237049, lng: 21.017532},
    zoom: 9,
    styles: grayStyles,
    scrollwheel: false
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 52.237049, lng: 21.017532},
    map: map
  })
}

