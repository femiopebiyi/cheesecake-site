import {initializeApp} from "firebase/app"


import {
    getFirestore, onSnapshot, addDoc, serverTimestamp,
    collection
} from "firebase/firestore"


const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const submit = document.querySelector('.submit')

const firebaseConfig = {
    apiKey: "AIzaSyA61FAzUz-SPsrdO7pL93FR7-iWjsJPqxM",
    authDomain: "cheesecake-site.firebaseapp.com",
    projectId: "cheesecake-site",
    storageBucket: "cheesecake-site.appspot.com",
    messagingSenderId: "66559122874",
    appId: "1:66559122874:web:32e70a40946ef00aa95183"
};

//init firebase

initializeApp(firebaseConfig)

//  init services

const database = getFirestore()

const colRef = collection(database, "contactUs")



const navButtons = document.querySelectorAll(".ul li")

const hamButton = document.querySelector(".ham-container");
const hamMenu = document.querySelector(".ham-nav");

navButtons[0].classList.add("clicked")

navButtons.forEach(function(button){
    button.addEventListener('click', function(e){
        // e.preventDefault()
        button.classList.add('clicked')
        navButtons.forEach(function(otherButton){
            if(otherButton !== button){
                otherButton.classList.remove('clicked')
            }
        }) 
    })
})

hamButton.addEventListener ("click", ()=>{


        hamMenu.classList.toggle("clickedd");
        




        // if(hamMenu.style.display === "none"){
        //     hamMenu.style.display = "flex"
        // }else{
        //     hamMenu.style.display = "none"
        // }
        

        
    })
    

            document.getElementById('menu1').addEventListener('click', function () {
  this.classList.toggle('close');
});




onSnapshot(colRef, (snapshot)=>{
    let details =[]
    snapshot.docs.forEach(doc=>{
        details.push({...doc.data(), id: doc.id})
    })

    console.log(details)
})


const addMessage = () =>{
    submit.innerHTML = "submitting....."
addDoc(colRef, {
        name: name.value,
        email: email.value,
        message: message.value,
        createdAt : serverTimestamp()
    })
        .then(()=>{
            
            name.value = ''
            email.value = ''
            message.value = ''
            submit.innerHTML = "submitted"
        })
        .then(()=>{
            submit.innerHTML = "Contact us now"
        })
        .catch(()=>{
            alert("not done")
        })
}

submit.addEventListener("click", ()=>{
    if(!message.value.trim() || !name.value.trim() || !email.value.trim()){
        alert("Please fill all inputs")
    } else{
        addMessage()
    }
})

