$(function(){
  $('#graph_button').click(function(){
    $(this).parent().remove();
    send_json_request_to_rails();
  });
});

var map;    // Must be a global variable in order to be recognized by line add_marker() func
var canvas;

function send_json_request_to_rails () {
  $('#button_holder').remove();
  $.ajax({
  type: "POST",
  url: "/graph"
  }).done(function( msg ) { 
    // Call the function to display the graph after data is received from remote server
    display_graph(msg)      
  });
}

function display_graph(zipcodes)
{
  Morris.Bar({
    element: 'graph',
    data: zipcodes,
    xkey: 'zip',
    ykeys: ['kwh'],
    labels: ['Zipcode', 'KWH']
  });
  // Call the function to display the Google Map after the graph is completely rendered
  display_map(zipcodes);
}

function display_map(zipcodes)
{
  var mapOptions = {
    center: new google.maps.LatLng(40.7142, -74.0064),  // Center the map to NYC
    zoom: 12,                                           // Establish zoom level
    mapTypeId: google.maps.MapTypeId.ROADMAP 
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);     
  for (var i = 0; i < zipcodes.length; i++) {
    add_marker(zipcodes[i].lat, zipcodes[i].long, zipcodes[i].zip, zipcodes[i].kwh);
  }
}

function add_marker(lat, lng, zip, kwh)
{ 
  var latlng = new google.maps.LatLng(lat, lng);
  var marker = new google.maps.Marker({position: latlng, map: map, title:zip+': '+kwh+' Kilowatt Hours Consumed'});
}

