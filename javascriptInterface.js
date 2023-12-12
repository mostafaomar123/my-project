document.getElementById("register").onsubmit = function () {
    let user = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let userReg = /\w+@\w+.\w+/ig;
    let passReg = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/ig;
    let validationEmail = userReg.test(user);
    let validationPassword = passReg.test(password);
    if (validationEmail === true && validationPassword === true) {
    return true;
    }
    return false;
};
