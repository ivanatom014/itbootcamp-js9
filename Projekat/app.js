import{Chatroom} from './chat.js';
import{ChatUI} from './ui.js';

// DOM
let ul = document.querySelector('ul');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let inputUsername = document.querySelector('#inputUsername');
let formUsername = document.querySelector('#formUsername');
let navRoom = document.querySelector('nav')

let username = "Anonymus";
if(localStorage.username) {
    username = localStorage.username;
}

let chatroom = new Chatroom("#js", username);
/*let chatroom1 = new Chatroom("#js", "Jelena");
chatroom1.username = "ddd dd  "; */

chatroom.getChats((data)=>{
    console.log(data);
});


let chatUI = new ChatUI(ul);

chatroom.getChats(data =>{
   chatUI.templateLI(data)
})


//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    if(!message.trim()){
        alert("Nije moguce poslati praznu poruku")
    }
    else{  
        chatroom.addChat(message)
        .then(() => {
            formMessage.reset();
        })
        .catch(err => {
            console.log(err);
        });}
   
});

// Username dugme

formUsername.addEventListener('submit', e =>{
    e.preventDefault();
    let newUsername = inputUsername.value
    chatroom.username = newUsername
    localStorage.setItem("username", newUsername);
    formUsername.reset();
});


navRoom.addEventListener("click", e=>{
    if(e.target.tagName == "BUTTON"){
        //1 uzimam ime sobe na koju je kliknuto
        let newRoom = e.target.textContent;
      // 2 setujem ime sobe na koju je kliknuto
        chatroom.updateRoom(newRoom)
       // chatroom.room = newRoom; 
        // 3 izbrisati sve poruke sa ekrana
        
         chatUI.clearUL();

        chatroom.getChats(data =>{
            chatUI.templateLI(data);
         })
        
    }

})


/*
formMessage.addEventListener('submit', e => {
    e.preventDefault();
   
    let message = inputMessage.value;
    if(!message.trim()){
        alert("Nije moguce poslati praznu poruku")
    }

    else{
        chatroom.addChat(message)
        .then( () => {
            console.log("Uspešno dodat čet");
        })
        .catch( err => {
            console.log(err);
        });
    }
  
          inputMessage.value = ""
});
*/












// chatroom.addChat("Imamo gostovanje")
//     .then( () => {
//         console.log("Uspešno dodat čet");
//     })
//     .catch( err => {
//         console.log(err);
//     });