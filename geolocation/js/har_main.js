function calculateDistances(lat, lon){
    let dpulze = haversine(lat,lon,2.922561,101.650965)
    let sunway = haversine(lat,lon,3.073065,101.607787)
    let klcc = haversine(lat,lon,3.158761,101.714524)

    return [dpulze,sunway,klcc]
}

let ellocate = document.getElementById("locate")
ellocate.addEventListener("click",function(){

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            let ellat = document.getElementById("lat")
            let ellong = document.getElementById("long")
            let eldpulze = document.getElementById("depulze")
            let elsunway = document.getElementById("sunway")
            let elklcc = document.getElementById("klcc")

            let userlat = position.coords.latitude
            let userlong = position.coords.longitude

            let distances = calculateDistances(userlat, userlong)


            ellat.innerHTML = "latitude" + userlat
            ellong.innerHTML = "longittude" + userlong

            eldpulze.innerHTML = "Cyberjaya is" + distances[0]
            elklcc.innerHTML = "KLCC is" + distances[2]
            elsunway.innerHTML = "SUNWAY is" + distances[1]

        })
    } else {
        alert("geolocation is not suportted")
    }
})