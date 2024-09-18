import {db, collection , getDocs , doc, getDoc } from "../../../../firebase.js"; 

let AllPost = document.getElementById("allCompetition")
let heading = document.getElementById("heading");
let para= document.getElementById("para")
// AllPost.innerHTML = `<p>loading....</p>`

const allCompetitionPost = async () => {
  AllPost.innerHTML = `<span class="loader"></span>`
  try {
    const querySnapshot = await getDocs(collection(db, "post"));
    AllPost.innerHTML = ""
    querySnapshot.forEach((doc) => {
      const { Title, Description, Question, Amount, Ticket, Image } = doc.data();
      
      // Adding card with onclick to call detailView function
      AllPost.innerHTML += `
      <div class="card" style="width: 18rem;" onclick="detailView('${doc.id}')">
        <img src="${Image}" class="card-img-top" style="height: 200px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${Title}</h5>
          <p class="card-text">${Description}</p>
          <h5 class="card-title">$${Amount}</h5>
        </div>
      </div>`;
      console.log(doc.id, " => ", doc.data(), Image);
    });
  } catch (error) {
    console.log(error);
  }
}

allCompetitionPost();

// Function to store the card ID and navigate to the detail page
window.detailView = (id) => {
  localStorage.setItem('cardId', id);
  window.location.href = '/dashboard/A-World Free Website Template - Free-CSS.com/html/postDetail.html';
  console.log(id);
}


const AboutSection = async () => {
    try {
      const docRef = doc(db, "about", "aboutSection");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const { Heading, About } = docSnap.data();
        heading.innerHTML = Heading;  // Display the heading in the HTML element
        para.innerHTML = About;       // Display the about text in the paragraph element

        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error retrieving document: ", error);
    }
  }
AboutSection()