let ellocate = document.getElementById("btnlocate")
ellocate.addEventListener("click",function(position){

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            let ellat = document.getElementById("lat")
            let ellong = document.getElementById("long")
            ellat.innerHTML = "latitude" + position.coords.latitude
            ellong.innerHTML = "longittude" + position.coords.longitude
        })
    } else {
        alert("geolocation is not suportted")
    }
})

