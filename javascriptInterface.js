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
// fetch("https://dummyjson.com/products").then((result) => {
//     console.log(result);
//     let myData = result.json();
//     return myData
// }).then((myData) => {
//     console.lo
// })
// let getData = (apiLink) => {
//     return new Promise((resolve, reject) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText).products);
//             } else {
//                 reject(Error("No Data Found"))
//             }
//         };
//         myRequest.open("GET", apiLink);
//         myRequest.send();
//     });
// }
// getData("https://dummyjson.com/products").then((result) => {
//     console.log(result)
//     return result;
// }
// ).then((result) => {
//     result.length = 10;
//     console.log(result)
//     return result
// }
// ).catch((rejectedReason) => {
//     console.log(rejectedReason)
// })
