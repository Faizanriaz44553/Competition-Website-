import {db, collection , doc, getDoc } from "/firebase.js"; 

let heading = document.getElementById("heading");
let para= document.getElementById("para")

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