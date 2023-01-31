import{Chatroom} from './chat.js';
import{ChatUi} from './ui.js';


let chatroom = new Chatroom("#js", "sefan");

chatroom.getChats((data)=>{
    console.log(data);
});

let ul = document.querySelector('ul');
let chatUi = new ChatUi(ul);


chatroom.getChats(data =>{
   chatUi.templateLi(data)
})

