import {db, collection , getDocs , doc , deleteDoc} from "/firebase.js"; 

let AllPost = document.getElementById('All-Post')


const allCompetitionPost = async()=>{
    try {
        const querySnapshot = await getDocs(collection(db, "post"));
        if (querySnapshot.empty) {
            AllPost.innerHTML = "No Post Avalaible" 
        }
querySnapshot.forEach((doc) => {
    const {Title , Description , Question , Amount , Ticket ,Image} = doc.data();
    AllPost.innerHTML +=`<div class="container">
  <ul class="list-group">
  <li class="list-group-item">${Title}</li>
  <li class="list-group-item">${Description}</li>
  <li class="list-group-item">${Question}</li>
  <li class="list-group-item">${Amount}</li>
  <li class="list-group-item">${Ticket}</li>
  <li class="list-group-item"><a class="nav-link" href="${Image}" target='blank'>${Image}</a></li>
  <li class="list-group-item"><button type="button" class="btn btn-danger" onclick="deleteData('${doc.id}')">Delete</button></li>
</ul>
</div>`
  console.log(doc.id, " => ", doc.data() , Image);
});
    } catch (error) {
        console.log(error);
    }
}
allCompetitionPost()





const deleteData = async(id)=>{
    console.log(id);
    
   try {
    await deleteDoc(doc(db, "post", id));
    allCompetitionPost()
   } catch (error) {
    console.log(error);
    
   }
}