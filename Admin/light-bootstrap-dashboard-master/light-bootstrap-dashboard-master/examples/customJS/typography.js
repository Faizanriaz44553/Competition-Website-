
import {db, collection, addDoc ,doc , setDoc , ref , uploadBytes , getDownloadURL , uploadBytesResumable , storage} from "../../../../../firebase.js"; 




let postImages = document.getElementById("image")
let title = document.getElementById("title")
let description = document.getElementById("description")
let question = document.getElementById("question")
let amount = document.getElementById("amount")
let ticket = document.getElementById("ticket")
let heading = document.getElementById("heading")
let about = document.getElementById("about")
let PostBtn = document.querySelector("#PostBtn")
let aboutBtn = document.querySelector("#aboutBtn")
let getImage;




const PostData = async()=>{

  console.log(`ho gaya ${title.value}${description.value}${question.value}${amount.value}${ticket.value}`);
  
  if (title.value.trim() === '' || description.value.trim() === '' || question.value.trim() === '' || amount.value.trim() === '' || ticket.value.trim() === '') {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Input Feild Is Empty",
    });
  } else {
    try {
      const docRef = await addDoc(collection(db, "post"), {
        Title : title.value,
        Description : description.value,
        Question : question.value,
        Amount:amount.value,
        Ticket: ticket.value,
        Image : getImage
      });
      console.log("Document written with ID: ", docRef);
    
    } catch (e) {
      console.log("Error adding document: ", e);
    }
    finally{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Competition is Added",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
PostBtn.addEventListener('click' , PostData)


const addAboutSection = async () => {
  try {
    const docRef = doc(db, "about", "aboutSection"); // Specific document ID
    await setDoc(docRef, {
      Heading: heading.value,
      About: about.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
}
aboutBtn.addEventListener('click' , addAboutSection)


const PostUploadImages =()=>{
  try {
    let files = postImages.files[0];
  console.log(files);
  const mountainsRef = ref(storage, 'Banner-images/' + files.name);
     console.log(mountainsRef);
const uploadTask = uploadBytesResumable(mountainsRef, files);
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
   console.log(error);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref)
    .then((downloadURL) => {
      getImage = downloadURL;
      console.log('File available at', downloadURL);
    });
  }
);
  } catch (error) {
    console.log(error);
  }
}
postImages.addEventListener("change" , PostUploadImages)