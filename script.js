fetch('https://www.eventbrite.com/oauth/authorize?response_type=JGHSTKJALPP3F5VDYROH&client_id=WKBXEMGXQAZ3QUMBMS&redirect_uri=www.google.com',{
method: "GET",
headers: { "Authorization": "Bearer JGHSTKJALPP3F5VDYROH"}
})
.then(response => response.json())
.then(json => console.log(json));
try {
    
} catch (error) {
    
}(err => console.log(err));

