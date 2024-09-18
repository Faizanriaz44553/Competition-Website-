
import {db, doc, getDoc } from "../../../../firebase.js"; 

// let number = "32"
// let convertNumber = number.

let detailId = localStorage.getItem('cardId')
let DetailSection = document.getElementById("container")
let ticketDiv = document.getElementById("ticket-div")
let signupBtn = document.getElementById("signupBtn")
let loginBtn = document.getElementById("loginBtn")
console.log(`post id =====> ${detailId}`);


const DetailPostView = async()=>{
    const docRef = doc(db, "post", detailId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    const {Title , Description ,Question , Amount, Ticket , Image} = docSnap.data();
    DetailSection.innerHTML = `<div class="sec-div" id="DetailSection">
            <div class="image-div">
               <img src="${Image}" alt="no img found">
            </div>
            <div class="content-div">
                <h1>${Title}</h1>
                <p class="des-para">Description: <br>${Description}</p> 
                <h2>Q: ${Question}?</h2>
                <div class="note-div"><p class="note-para">Note: <br>To participate in the competition, complete the payment first. After payment, you will be able to answer the question and enter the competition. Only those who answer correctly will have a chance to win the prize.</p></div>
                <span class="price"><h1 class="price">$: ${Amount}</h1></span> 
            </div>
        </div>`
        let ticketArray = Ticket.split(',').map(item => item.trim());

    // Step 2: Now use map to loop through the array
    ticketArray.map((item) => {
      console.log(`============> get ticket ${item}`);
      ticketDiv.innerHTML += `<div class="ticket-box"><p>${item}</p></div>`
      
    });

  console.log("Document data:", docSnap.data() , "========>" , Title , Description ,Question , Amount, Ticket , Image);
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}

DetailPostView()
// A-World Free Website Template - Free-CSS.com






// login funtion started
const loginRedirect = ()=>{
console.log('========> Login');
window.location.href = '/dashboard/A-World Free Website Template - Free-CSS.com/html/login.html'

}
loginBtn.addEventListener('click' , loginRedirect)
// login funtion ended


// Signup funtion started
const SignupRedirect = ()=>{
console.log('========> Signup');
window.location.href = '/dashboard/A-World Free Website Template - Free-CSS.com/html/signup.html'

}
signupBtn.addEventListener('click' , SignupRedirect)
// Signup funtion ended