function transformUppercase(_val) {
    return _val.toUpperCase();
}

let elusername = document.getElementById("username")
elusername.addEventListener("keyup",function() {
    elusername.value = transformUppercase(elusername.value)
})


function checkPassword() {
    let eluserpassword = document.getElementById(("userpassword"))
    let pass_val = eluserpassword.value;

    if (pass_val.length > 5) {
        alert("Password alert...OK!")
    } else {
        alert("Password too short!")
    }
}


// old way 
let elpw = document.getElementById("userpassword")
elpw.onblur = checkPassword













// function transformUppercase(_val){
//     return _val.toUpperCase();
// }

// // DOM event listener
// let jsusername = document.getElementById("namaPengguna")
// jsusername.addEventListener("keyup",function(){
//     jsusername.value = transformUppercase(jsusername.value)
// })

// function checkPassword(){
//     let userpassword = document.getElementById("kataLaluan")
//     let pass_val = userpassword.value

//     if(pass_val.length > 5){
//         alert("Password check...OK!")
//     } else {
//         alert("Password too short!")
//     }
// }

// // traditional DOM event handler
// let elKL = document.getElementById("kataLaluan")
// elKL.onblur = checkPassword