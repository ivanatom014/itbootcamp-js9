let getResponse = resourse =>{

  // 1. Kreiranje XML objekta

  let request = new XMLHttpRequest();

  // 2. Otvaranje kreiranog zahteva
  request.open("GET", resourse);

  // 3. Slanje zahteva
  request.send();

return new Promise((resolve, reject)=>{
    request.addEventListener("readystatechange", ()=>{
      if(request.readyState == 4 && request.status == 200){
         // sve ok i koristimo resolve kome prosledjujemo podatke iz json fajla
         resolve(request.responseText);
      }
      else if(request.readyState == 4){
        reject("nije moguce dohvatiti podatke") // nesto nije ok i korsitimo reject kome saljemo greske
       
      }
      
  });
  });
 
}

getResponse("../JSON/prvi.json").then(sadrzaj =>{
  console.log("prvi jason izvrsen(resolved)", sadrzaj);
  return getResponse("../JSON/drugi.json"); // vraca promise ukoliko je resolved, na njega se odnosi naredni then
}).then(sadrzajDrugog => {
  console.log("drugi jason izvrsen(resolved)", sadrzajDrugog);
  return getResponse("../JSON/treci.json"); // promise ukoliko je resolved, na njega se odnosi naredni then
}).then(sadrzajTreceg =>{
  console.log("treci jason izvrsen(resolved)", sadrzajTreceg);
})
.catch(greska =>{
  console.log("Promise reject", greska);
})

console.log("Kraj")