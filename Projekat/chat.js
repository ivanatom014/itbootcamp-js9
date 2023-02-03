export class Chatroom {
    constructor(r, u){
        this.room = r;
        this.username = u,
        this.chats = db.collection('chats');
        this.unsub; // bice undefined prilikom kreiranja objekta
    }
     // seteri

     set username(u){
         if(!u.trim()){
            alert("Korisnicko ime ne sme biti sastavljeno samo od praznina i tabova ")
        }
       else if(u.trim().length < 2 || u.trim().length > 10){
            alert("Username treba da bude izmedju 2 i 10 karaktera");
        }
        else{
            this._username = u;
        }
     }
     
  
     set room(r){
        this._room = r;
    }
    // geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    // Update sobe
    updateRoom(ur){
        this.room = ur;
        if(this.unsub){
            this.unsub();
        }
    }




    // Metod za dodavanje ceta
    async addChat(mess) {
        let date = new Date();
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };
        let response = await this.chats.add(docChat); 
        return response; // Vracamo Promise i od njega mozemo potrazivati .then() i .catch()
    }

    // Pracenje poruka u bazi i ispis dodatnih poruka

    getChats(callback){
        this.unsub = this.chats
        .orderBy('created_at')
        .where('room', '==', this.room)
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type == "added"){
                  //  console.log(change.doc.data())
                  callback(change.doc.data());
                }
            })
        }) 
    }
}
