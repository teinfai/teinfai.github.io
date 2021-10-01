let elLocate = document.getElementById("btnLocate")
elLocate.addEventListener("click",function(){
    
    var a = document.getElementById("demo");
    var b = document.getElementById("demo");

    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(function(position){
            a.innerHTML = "Latitude: " + position.coords.latitude
            b.innerHTML = "Longitude: " + position.coords.longitude
        })
    } else {
        alert("Geolocation is not supported!")
    }
})