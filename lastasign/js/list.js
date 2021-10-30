let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    getregistration()
})

function getregistration() {
    let url = 'https://api.sheety.co/2c4974ff237a85e61170436810de54d4/registrationApp/registerpage';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.registerpages);

            let registrationlist = document.getElementById("registrationlist")
            let bookingIds = []

            for (let k = registrationlist.rows.length - 1; k > 0; k--) {
                registrationlist.deleteRow(k)
            }


            for (let i = 0; i < json.registerpage.length; i++) {
                let gName = json.registerpage[i].name;
                let gEmail = json.registerpage[i].email;
                let gbook = json.registerpage[i].book;
                let gRemarks = json.registerpage[i].remark;
                let gId = json.registerpage[i].id;
                let btnId = "delete" + gId;

                let row = registrationlist.insertRow(registrationlist.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                row.insertCell(3).innerHTML = gbook
                row.insertCell(4).innerHTML = gRemarks
                row.insertCell(5).innerHTML = "<button id=" + btnId + " type='button' class='btn btn-danger'>Delete</button>"
                bookingIds.push(btnId)


            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteBooking(theId)
                })
            }
        });
}


function DeleteBooking(id) {
    let url = 'https://api.sheety.co/2c4974ff237a85e61170436810de54d4/registrationApp/registerpage/' + id;
    fetch(url, {
        method: 'DELETE',
    })

        .then(() => {
            alert("Record id " + id + " deleted!")
            getregistration()
        });
}