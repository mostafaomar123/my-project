document.getElementById("register").onsubmit = function () {
    let user = document.getElementById("user").value;
    let password = document.getElementById("pass");
    let passReg = /\d{5}/ig
    let userReg = /\w+@\w+.\w+/ig
    let validationPassword = passReg.test(password)
    let validationEmail = userReg.test(user)
    if ((validationEmail === false) & validationPassword === false) {
    return false;
    }
    return true
};