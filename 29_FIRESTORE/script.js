console.log(db) // db je objekat baze podatak

let users = db.collection('users');
console.log(users);

let user1 = users.doc('jmatejic');
console.log(user1);

let user2 = db.doc('users/sstanimirovic');
console.log(user2);


/* 
kada pikiraamo dokument preko ovih komandi, mozemo da izvrsimo jednu od 4 osnovne operacije 
CRUD(Create, Read, Update, Delete)
Create: doc.set(...)
Read: doc.get(...)
Update: doc.update(...)
Delete: doc.delete(...)

Sve cetiri metode kao rezultat vracaju Promise, ovo znaci mozemo da lancamo .then() i .catch() na bilo koju od ove cetiri metode
*/

// set

db.collection('customers')
.doc('cust001')
.set({
    
    name: "Laza Lazic",
    age: 35,
    addresess:["Beograd", "Cacak"],
    salary: 400
})
.then(()=>{
    console.log("Uspesno dodata musterija")
})
.catch((err)=>{
    console.log("Greska" + err)
})




db.collection('customers')
.doc('cust001')
.set({
    height:185
}, {
    merge: true
})
.then(()=>{
    console.log("Uspesno dodata musterija")
})
.catch((err)=>{
    console.log("Greska" + err)
})

let datum1 = new Date("2021-03-15 19:00:00");
let datum2 = new Date("2021-03-15 21:00:00");


db.collection("tasks")
.doc("fudbal")
.set({
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbalica sa drustvom"
}, {merge: true})
.then(function() {
    console.log("Task successfully added!");
})
.catch(function(error) {
    console.error("Error adding task: ", error);
});

db.collection("tasks")
.doc('domaci')
.set({
   title: 'Domaci zadatak',
   start_date:firebase.firestore.Timestamp.fromDate(datum1),
   due_date: firebase.firestore.Timestamp.fromDate(datum2),
   priority: true,
   description: "Uradi domaci"

}).then(()=>{
    console.log("Uspesno dodat task");
}).catch(err=>{
    console.log(`Desila se greska: ${err}`);
});

// Update metoda

db.collection('users')
.doc('vristic')
.update({
    adrese: ["Nis", "Beograd"],
    godine: 2
})
.then(()=>{ 
    console.log("Korisnik uspesno izmenjen");
   return db.collection('users')
    .doc('vristic')
    .update({
    adrese: firebase.firestore.FieldValue.arrayUnion("Leskovac")
    });
})
.then(()=>{
    console.log("Korisnik uspesno izmenjen");
})
.catch(err=>{
    console.log(`Desila se greska: ${err}`);
});



db.collection("tasks")
.doc('domaci')
.update({
    description:"Obavezno uradi domaci zadatak"
}).then(()=>{
    console.log("Uspesno izmenjen task");
}).catch(err=>{
    console.log(`Desila se greska: ${err}`);
});


console.log(1);
console.log(2);