console.log("callback");

let getResponse = (resourse, callback) =>{

    // 1. Kreiranje XML objekta

    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", ()=>{
        if(request.readyState == 4 && request.status == 200){
            // sve ok
           // console.log(request.responseText);
           callback(request.responseText, undefined);
        }
        else if(request.readyState == 4){

            // nesto nije ok
         //   console.log("Nije moguce dohvatiti podatke");

         callback(undefined,"Nije moguce dohvatiti podatke")
        }
        
    });

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resourse);

    // 3. Slanje zahteva
    request.send();


}
// Ucitaj najpre prvi json fajl
getResponse("../JSON/prvi.json", (data, err) =>{
 
  if(data){

    // Ukoliko je sve ok sa prvim json fajlom, ispisi njegove podatke i potom ucitaj drugi json fajl
    console.log(data); 
    getResponse("../JSON/drugi.json",(data, err)=>{
      if(data){

        // Ukoliko je sve ok sa drugim json fajlom ispisi njegove podatke i potom ucitaj treci json fajl
        console.log(data);
        getResponse("../JSON/treci.json", (data, err)=>{
          if(data){
            console.log(data);
          }
          else{
            console.log(err);  // Ispisuje gresku ako treci json fajl nije prosao
          }
        })

      }
      else{
        console.log(err);  // Ispisuje gresku ako drugi json fajl nije prosao
      }
    });
  }
  else{
    console.log(err); // Ispisuje gresku ako prvi json fajl nije prosao
  }
});




console.log("Kraj")