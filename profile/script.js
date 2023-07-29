let userDetails = JSON.parse(localStorage.getItem('userDetails'));

console.log(userDetails);

let fullName = document.getElementById('name');
let email = document.getElementById('Email');
let token = document.getElementById('token');
let password = document.getElementById('Password');


fullName.value = userDetails.fullName;
email.value = userDetails.email;
password.value = userDetails.password;
token.value = userDetails.Token;

document.getElementById('logOut').addEventListener('click' , (event) => {
    localStorage.removeItem('userDetails');
    window.location.href = '/index.html'
    console.log("first")
})
  
