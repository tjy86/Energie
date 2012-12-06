$(function(){

$('#graph_button').click(send_json_request_to_rails);

});

function send_json_request_to_rails () {
    $.ajax({
    type: "POST",
    url: "/graph"
  }).done(function( msg ) { 
    display_graph(msg)      
    //alert( "Data Saved: " + msg );
  });
}

function display_graph(zipcodes)
{
  Morris.Bar({
    element: 'graph',
    // in this case data is expecting an array of objects.  which is what movies is
    data: zipcodes,
    xkey: 'zipcode',
    ykeys: ['kwh'],
    labels: ['Zipcode', 'KWH']
  });

}