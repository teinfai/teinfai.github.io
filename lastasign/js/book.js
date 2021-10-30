let confirmnow = document.getElementById('confirm')
confirmnow.addEventListener("click", function () {
    let username = document.getElementById("username")
    let usernameval = username.value

    let useremail = document.getElementById("useremail")
    let useremailval = useremail.value

    let book_selection = document.getElementById("book_selection")
    let book_selectionval = book_selection.value

    let userremarks = document.getElementById("userremarks")
    let userremarksval = userremarks.value

    confirmNow(usernameval, useremailval, book_selectionval, userremarksval)

})



function confirmNow(username, useremail, book_selection, userremarks) {
    let url = 'https://api.sheety.co/2c4974ff237a85e61170436810de54d4/registrationApp/registerpage';
    let body = {
        registerpage: {
            name: username,
            email: useremail,
            book: book_selection,
            remark: userremarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.registerpage);
        });
}








