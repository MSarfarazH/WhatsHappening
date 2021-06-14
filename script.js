
console.log("Hello World")

const corsApiUrl = 'https://cors-anywhere.herokuapp.com/'


var eventsContainerEl = document.querySelector("#events-container");

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


 
/// Singular Event Data ///
// var getEvent = function(){
    
     
//     fetch( corsApiUrl +'https://api.yelp.com/v3/events/san-francisco-yelp-10-year-anniversary-celebration', {
//     method: 'GET',
//     headers: new Headers({
//         'Authorization': 'Bearer 4FnW2xv5cVqRkDlYYF14_XYL6MmRVN661ctTKgsXOnD5ihmrJ2hqvCoMu0ItSgRlvByZexlvH8QeKxo6XZ8BUvgQolMKmUmsv1ijEsLLdK34XvK0rYqscbmy9wDAYHYx',
//         // "Content-type": "application/json"
//     })
    
//     })
//     .then(response => response.json())
//     .then(data => console.log(data));

// }

var displayEvents = function(events){
    if( events.length === 0 ){
        eventsContainerEl.textContent = "There are no events in your area";
        return;
    }
    
}

for (var i = 0; i < events.length; i++){
    var eventsEl = document.createElement('a');
    eventsEl.classList = 'list-item flex-row justify-space-between align-center';
    eventsEl.setAttribute("href", events[i].image_url )

    var titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    eventsEl.appendChild(titleEl);

    var typeEl = document.createElement('span');

if (events[i].pull_request){
    typeEl.textContent = 'Pull request';
} else {
    typeEl.textContent = ' Events '; 
}

    eventsEl.appendChild(typeEl);

    eventsContainerEl.appendChild(eventsEl);
 }






// getEvent()

getEvents()


