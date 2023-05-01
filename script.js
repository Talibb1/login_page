
let nameArray = []

function userData() {

    let FullName = document.getElementById('username').value

    let Email = document.getElementById('email').value

    let Password = document.getElementById('password').value

    let ConfirmPassword = document.getElementById('confirm-password').value

    // console.log(FullName, Email, Password, ConfirmPassword);


    let userobject = (FullName, Email, Password, ConfirmPassword)

    console.log(userobject.FullName, userobject.Email, userobject.Password, userobject.ConfirmPassword);

    nameArray.puch(userobject)

    let stringified = JSON.stringify(nameArray)

    console.log(stringified)

    localStorage.setItem('Fullname', stringified)
}



