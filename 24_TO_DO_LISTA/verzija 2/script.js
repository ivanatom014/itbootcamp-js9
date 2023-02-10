// DOM
let btnDodaj =  document.getElementById('submit');
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");
/*
btnDodaj.addEventListener("click", () => {
    let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja

    if(inputTaskValue != "") {
        let liNewTask = document.createElement("li"); // Kreiram novi <li>
        liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
        ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
        inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
    }
}) 

ulTasks.addEventListener("click", e =>{
  
if(e.target.tagName == "LI"){
    console.log("Klikknuto na Li");
    
    if(e.target.style.textDecoration == 'line-through'){
        e.target.style.textDecoration = 'none';
   }
    else{
        e.target.style.textDecoration = 'line-through';
    } 
e.target.remove();

}

}); */


/*
btnDodaj.addEventListener("click", () => {
    let inputTaskValue = inputTask.value; 
    let liNewTask = document.createElement("li");
    liNewTask.textContent += inputTaskValue; 
    if(inputTaskValue != "") {
        if(document.querySelector("input[value='gore']:checked")){
          
            ulTasks.insertBefore(liNewTask, ulTasks.firstChild);
         // ul.ulTasks.prepend(liNewTask) -moze i ovako, dodaje li na pocetak 
        }
        else{
            ulTasks.appendChild(liNewTask); 
        }
        
    }

    ulTasks.addEventListener("click", e =>{
        if(e.target.tagName == "LI"){
           e.target.remove();
        }
          });

          inputTask.value = ""; 
    
}); */


//// INPUT ENTER DEO ////



 btnDodaj.remove();

inputTask.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        let inputTaskValue = inputTask.value; 
        let liNewTask = document.createElement("li"); 
        liNewTask.textContent += inputTaskValue;

        if(inputTaskValue != "") {
            if(document.querySelector("input[value='gore']:checked")){
                ulTasks.insertBefore(liNewTask, ulTasks.firstChild);
            }
            else{
                ulTasks.appendChild(liNewTask); 
            }     
        }
        inputTask.value = "";
    }

    ulTasks.addEventListener("click", e =>{
        if(e.target.tagName == "LI"){
           e.target.remove();
        }
          });
 }) ;

 //////// LOCAL STORAGE //////

 //// Smestanje u lokalnu memoriju ///

 localStorage.setItem("username","Jelena");
 localStorage.setItem("city", "Nis");


 /// Update u lokalnoj memoriji

 localStorage.setItem("username", "Stefan");

 // Ukoliko key postoji vec u local storage onda vrsi update vrednosti za taj key
 // Ukoliko key ne postoji u local storage onda vrsi dodavanje (novi unos) u local storage

console.log(localStorage.getItem("city"));
let u = localStorage.getItem("username");
console.log(u);


localStorage.setItem("year", 28);
let god = localStorage.getItem("year");
god++;
localStorage.setItem("year", god);
console.log(`Imam ${god} godina`)


