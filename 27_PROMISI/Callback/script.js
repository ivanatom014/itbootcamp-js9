console.log("callback");

let getTodos = (resourse, callback) =>{

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

getTodos("../JSON/todos.json", (data, err) =>{
  // console.log(data, err);
  if(data){
    console.log(data); // Ispisuje podatke sa kojima moze da se raspolaze
  }
  else{
    console.log(err);
  }
});




console.log("Kraj")