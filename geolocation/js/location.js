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


// let elLocate = document.getElementById("btnLocate")
// elLocate.addEventListener("click",function(){
    
//     var a = document.getElementById("demo1");
//     var b = document.getElementById("demo2");

//     function getlocation() {}
//     if(navigator.geolocation){ 
//         navigator.geolocation.getCurrentPosition(function(position){
//             a.innerHTML = "Latitude: " + position.coords.latitude
//             b.innerHTML = "Longitude: " + position.coords.longitude
//         })
//     } else {
//         alert("Geolocation is not supported!")
//     }
// })