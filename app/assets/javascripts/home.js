$(function(){

$('#graph_button').click(send_json_request_to_rails);

});

function send_json_request_to_rails () {
    $.ajax({
    type: "POST",
    url: "/graph"
  }).done(function( msg ) { 
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
  display_map(zipcodes);

}

var map;
var canvas;

function display_map(zipcodes)
{

  var mapOptions = {
    center: new google.maps.LatLng(40.7142, -74.0064),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP 
  };

  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);     
  
  for (var i = 0; i < zipcodes.length; i++) {
    add_marker(zipcodes[i].lat, zipcodes[i].long, zipcodes[i].zip);
  }
}

function add_marker(lat, lng, title)
{ 
  var latlng = new google.maps.LatLng(lat, lng);
  var marker = new google.maps.Marker({position: latlng, map: map, title:title});
}

