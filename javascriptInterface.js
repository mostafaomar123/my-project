// document.getElementById("register").onsubmit = function () {
//     let user = document.getElementById("user").value;
//     let password = document.getElementById("pass").value;
//     let userReg = /\w/ig;
//     let passReg = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/ig;
//     let validationEmail = userReg.test(user);
//     let validationPassword = passReg.test(password);
//     if (validationEmail === true && validationPassword === true) {
//     return true
//     }
//     return false;
// };
document.getElementById("login").addEventListener("click", function () {
  let user = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      let token = json.token;
      localStorage.setItem("token", token);
      console.log(token);
    })
    .catch((error) => console.log(error));
});

