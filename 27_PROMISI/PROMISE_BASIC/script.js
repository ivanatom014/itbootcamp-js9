let getSomething = ()=>{
    let obj = new Promise((resolve, reject)=>{
        // Ako je sve proslo ok onda je resolve
        // Ako nestoo nije proslo dobro onda je reject
         // resolve("nesto je resolve");
        reject("nesto je reject");
    
    });
    return obj; // vraca objekat promise
}

// Ako je Promise vratio resolve, realizuje se .than() grana
// Ako je Promise realizovao reject, realizuje se .catch grana

getSomething().than( a =>{
    console.log(`Aktivirana je .than grana ${a}`);
}).catch( b =>{
    console.log(`Aktivirana je .catch grana ${b}`);
});




console.log(obj);
