import {Pacijent} from "./pacijenti.js"


let p1 = new Pacijent ("Milica", 1.65, 40);
let p2 = new Pacijent("Goran", 2.02, 105);
let p3 = new Pacijent ("Milan", 1.69, 70);
let p4 = new Pacijent ("Ana", 1.73, 70);

p1.stampaj();
p2.stampaj();
p3.stampaj();
p4.stampaj();


 // Kreirati niz od barem tri pacijenta.

 let pacijenti = [p1, p2, p3, p4];

 // Ispisati podatke o pacijentu sa najmanjom težinom.

let btnMinTezina = document.getElementById("racunajMinTezinu");
let pMinTezina = document.getElementById("minTezina");

btnMinTezina.addEventListener("click", ()=>{
    let minPac = pacijenti[0];
 pacijenti.forEach(p =>{
    if(p.tezina < minPac.tezina){
        minPac = p;
    }

 });
  minPac.stampaj();

  pMinTezina.innerHTML = minPac.stampajListu();
});



// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
 let btnbmi = document.getElementById("racunajMaxbmi");
 let pmaxbmi = document.getElementById("maxBmi")

btnbmi.addEventListener("click", () =>{
    let maxbmi = pacijenti[0];
    pacijenti.forEach(p =>{
       if(p.bmi() > maxbmi.bmi()){
           maxbmi = p;
       }
   
    });
    maxbmi.stampaj();

    pmaxbmi.innerHTML = maxbmi.stampajListu();

});
 

// Ispisati sve pacijente čije ime sadrži slovo A.


let btnA = document.getElementById("slovoA");
let ppacijenti = document.getElementById("slovo")

btnA.addEventListener("click",()=>{
    
    for(let i = 0; i < pacijenti.length; i++){
     if(pacijenti[i].ime.includes("A") || pacijenti[i].ime.includes("a")){
        pacijenti[i].stampaj();
     ppacijenti.innerHTML += pacijenti[i].stampajListu();
    }
}

});
   
       
// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = (niz) =>{
    let sumaVisina = 0;
    let brPac = niz.length;
    niz.forEach(p =>{
     sumaVisina += p.visina;
    });

    return sumaVisina / brPac;
}

console.log (srednjaVisina(pacijenti));

let divavgVisina = document.querySelector("#avgVisina")
divavgVisina.innerHTML = `Prosecna visina svih pacijenata je: ${srednjaVisina(pacijenti)}`;

