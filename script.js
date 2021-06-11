fetch('https://api.yelp.com/v3/events', {
method: 'post',
headers: new Headers({
    'Authorization': 'Bearer 4FnW2xv5cVqRkDlYYF14_XYL6MmRVN661ctTKgsXOnD5ihmrJ2hqvCoMu0ItSgRlvByZexlvH8QeKxo6XZ8BUvgQolMKmUmsv1ijEsLLdK34XvK0rYqscbmy9wDAYHYx',
}),

})
.then(response => response.json())
.then(data => console.log(data));
///Authorization


var EventNameEl = document.querySelector('#event-name');

// This layer will communicate with google.//
var getEvents = function(){
    var apiUrl = 'https://api.yelp.com/v3/events';
 }

var getEvent = function(){
    var apiUrl = 'https://api.yelp.com/v3/events/san-francisco-yelp-10-year-anniversary-celebration'

    fetch(event_site_url).then(function (response){
        if (response.ok) {
         response.json().then(function (data){
             displayEvent(data);
         })
        }
    })

