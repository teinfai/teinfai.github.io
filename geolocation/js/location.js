let elLocate = document.getElementById("btnLocate")
elLocate.addEventListener("click",function(){
    
    var a = document.getElementById("demo1");
    var b = document.getElementById("demo2");

    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(function(position){
            a.innerHTML = "Latitude: " + position.coords.latitude
            b.innerHTML = "Longitude: " + position.coords.longitude
        })
    } else {
        alert("Geolocation is not supported!")
    }
})