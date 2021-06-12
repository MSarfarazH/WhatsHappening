
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/'



var EventNameEl = document.querySelector('#event-name');

// This layer will communicate with google.//
var getEvents = function(){
    
    fetch( corsApiUrl +'https://api.yelp.com/v3/events', {
    method: 'GET',
    headers: new Headers({
        'Authorization': 'Bearer 4FnW2xv5cVqRkDlYYF14_XYL6MmRVN661ctTKgsXOnD5ihmrJ2hqvCoMu0ItSgRlvByZexlvH8QeKxo6XZ8BUvgQolMKmUmsv1ijEsLLdK34XvK0rYqscbmy9wDAYHYx',
        // "Content-type": "application/json"
    })
    
    })
    .then(response => response.json())
    .then(data => console.log(data));
 }
/// Google API///
var getEvent = function(){
    var apiUrl = 'https://api.yelp.com/v3/events/san-francisco-yelp-10-year-anniversary-celebration'

    fetch(event_site_url).then(function (response){
        if (response.ok) {
         response.json().then(function (data){
             displayEvent(data);
         })
        }
    })

}

var displayEvent = function(){

}