export class Chatroom {
    constructor(r, u){
        this.room = r;
        this.username = u,
        this.chats = db.collection('chats');
    }
     // seteri
    set username(u){
        if((u.length > 2 && u.length < 10) && !u.includes(" ")){
            this._username = u
        }
        else{
         alert( "Username treba da se sastoji izmedju 2 i 10 karaktera i ne sme da sadrzi praznine")
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
        this.chats.onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type == "added"){
                  //  console.log(change.doc.data())
                  callback(change.doc.data());
                }
            })
        })
    }


}
