/*
db.collection('customers')
.doc('cust001')
.delete()
.then(()=>{
    console.log("Dokument uspesno izbrisan");
})
.catch((e)=>{
    console.log("Desila se greska:" + e);
})

// Dodavanje dokumenta u kolekciju prilikom metode add()

db.collection('customers')
.add({
    name: "Mika Mikic",
    age: 25,
    addresess:["Beograd", "Cacak"],
    salary: 800
})
.then(()=>{
    console.log("Dokument uspesno dodat");
})
.catch((e)=>{
    console.log("Desila se greska:" + e);
})

// 1) moze se dohvatiti jedan dokument
// 2) moze se dohvatiti vise dokumenta

// 1.

db.collection('users')
.doc('vristic')
.get()
.then((doc)=>{
    if(doc.exists){
        let data = doc.data()
        console.log("Uspesno skinut dokument:" + doc.id)
        console.log(data)
    }
    else{
        console.log("Ne postoji dati dokument")
    }
})
.catch((e)=>{
    console.log("Desila se greska:" + e);
})
*/

// 2.
/*
db.collection('customers')
.get()
.then((snapshot)=>{
    snapshot.forEach((doc)=>{
        console.log("Uspesno skinut dokument" + doc.id);
        console.log(doc.data());
    })
})
.catch((e)=>{
    console.log("Desila se greska:" + e);
}) */


// Get metoda kod kolekcije
// 1. prikazivanje dokumenta u odredjenom redosledu (orderBy)
// 2. prikazivanje odredjenog broja dokumenata (limit)
// prikazivanje dokumenata koji zadovoljavaju odredjene kriterijume - filtiranje (where)

// 1. orderBy
/*
db.collection('customers')
.orderBy('salary', 'desc')
.orderBy('name','asc')
.get()
.then((snapshot)=>{
    snapshot.forEach((doc)=>{
        console.log("Uspesno skinut dokument" + doc.id);
        console.log(doc.data());
    })
})
.catch((e)=>{
    console.log("Desila se greska:" + e);
})

*/

// 2. Limit
/*
db.collection('customers')
.limit(3)
.orderBy('salary', 'desc')
.orderBy('name','asc')
.get()
.then((snapshot)=>{
    snapshot.forEach((doc)=>{
        console.log("Uspesno skinut dokument" + doc.id);
        console.log(doc.data());
    })
})
.catch((e)=>{
    console.log("Desila se greska:" + e);
}) */

// 3. Where
/*
db.collection('customers')
 .where('salary','>', 500) // svi oni cija je plat veca od 500
.where('salary','<=', 600) // svi oni cija je plata manja ili jednaka od 600
// .where('name','<=','M')
.get()
.then((snapshot)=>{
    snapshot.forEach((doc)=>{
        console.log("Uspesno skinut dokument" + doc.id);
        console.log(doc.data());
    })
})
.catch((e)=>{
    console.log("Desila se greska:" + e);
}) */


/// Vezbanje

// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
/*
db.collection("customers")
    .orderBy("name", "asc")
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Imena:");
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
// adresa u Nisu
db.collection("customers")
    .where("addresses", "array-contains", "Nis")
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Adresa u Nisu ");
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
// plata >= 500
db.collection("customers")
    .where("salary", ">=", 500)
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Plata >= 500 ");
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
// plata izmedju 300 i 800
db.collection("customers")
    .where("salary", ">", 300)
    .where("salary", "<", 800)
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Plata izmedju 300 i 800");
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
// Imaju platu manju od 900, i imaju 30 godina
db.collection("customers")
    .where("salary", "<", 900)
    .where("age", "==", 30)
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Plata manja od 900 i 30 godina");
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
// Imaju adresu u Nišu ili Beogradu
db.collection("customers")
    .where("addresses", "array-contains-any", ["Nis", "Beograd"])
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Adresa Nis ili Beograd");
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
// Imaju 22, 25 ili 28 godina
db.collection("customers")
    .where("age", "in", [22, 25, 28])
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Godine");
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
    */


    ////////// Vezbanje Tasks ////////

  // 1.
  /*
    db.collection("tasks")
    .where("priority", "==", true)
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Uspesno skinut dokument" + doc.id);
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })

    // 2 
    let datum = new Date();
    let godina = datum.getFullYear(); 
    let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
    let datum2 = new Date(godina + 1,0, 1)// 1. januar sledece godine
    let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
    let ts2 = firebase.firestore.Timestamp.fromDate(datum2);
    db.collection("tasks")
    .where('due_time', '>=', ts1)
    .where('due_time', '<', ts2)
    .get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Uspesno skinut dokument" + doc.id);
            console.log(doc.data());
        });
    })
    .catch((e) => {
        console.log("Greska: " + e);
    })
*/

// 3 

let datum = new Date();
let t = firebase.firestore.Timestamp.fromDate(datum);

db.collection('tasks')
.where('due_date', '<=', datum)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Uspesno skinut dokument" + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
})



// 4 
/*
let datum = new Date();
let t = firebase.firestore.Timestamp.fromDate(datum);

db.collection('tasks')
.where('start_date', '>', t)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Uspesno skinut dokument" + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
})
*/