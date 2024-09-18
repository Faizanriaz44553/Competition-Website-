import { auth, createUserWithEmailAndPassword } from "../../../../firebase.js";

let Fname = document.getElementById("Fname")
let Uname = document.getElementById("Uname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let password = document.getElementById("password")
let Cpassword = document.getElementById("Cpassword")
let submitBtn = document.getElementById("submitBtn")

const signupFuntion = ()=>{
    console.log("ho gaya failed");
      
    if (Fname.value.trim() === '' || Uname.value.trim() === '' || email.value.trim() === '' || phone.value.trim() === '' || password.value.trim() === '' || Cpassword.value.trim() === '') {
        console.log('input is empty');
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Input Feild Is Empty",
          });
    } else {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
}
submitBtn.addEventListener('click' , signupFuntion)