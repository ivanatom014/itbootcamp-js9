console.log("events")


/// 1. Dohvatiti element na koji zelimo da postavimo osluskivac

let btnHello = document.getElementById("hello");


//2. Postavljam osluskivac na element koji smo dohvatili
btnHello.addEventListener("click",() => {
   console.log("Hello!")
});



////  ////  /// ///

let btnHelloHello = document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick", () =>{
    console.log("Hello Hello");
})

///////////////

let btnEvents = document.getElementById("hello3");
btnEvents.addEventListener("click",()=>{
    console.log("Event click");
})


btnEvents.addEventListener("dblclick",()=>{
    console.log("Event dblclick");
})


//////// ////// //////

/* Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1. */

let btnBrojac = document.getElementById("brojac");
let brojac = 1;
btnBrojac.addEventListener("click", ()=>{
   console.log(`Brojac je ${brojac}`);
  // brojac = brojac + 1; // brojac++


});

/* Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1. */


let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spanRez = document.getElementById("rezultat");


let br = 0;
btnMinus.addEventListener("click",()=>{
   br--;
   if(br < 0){
    br = 0;
   }
   
   // za 4. zadatak
   spanRez.innerHTML = br;
});



btnPlus.addEventListener("click",()=>{
    br++;
    spanRez.innerHTML = br;
});


// Napraviti input polje i dugmeU input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
// // Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.


let inputUnos = document.getElementById("ime");
let btnPrikazi = document.getElementById("prikazi");
let spanPrikaz = document.getElementById("prikaz");



btnPrikazi.addEventListener("click", () =>{
    let value = inputUnos.value;
    spanPrikaz.innerHTML += `Hello ${value}`;
     // inputUnos.value= "";
});

btnPrikazi.addEventListener("dblclick",() =>{
    
    let checkedPol = document.querySelector("input[name='pol']:checked"); // Jedan radio bitton koji je cekiran (vraca HTML tag)
    let valueChekedPol = checkedPol.value; // Daje vrednos (value iz iz seletovanog html taga
    console.log(valueChekedPol);
    console.log(checkedPol.value);


    /////// Selectovanje svih radio buttons prema name atributu ///

    let inputRadios = document.getElementsByName('pol')
    inputRadios.forEach(input => {
         if(input.cheked){
            console.log(input.value);
         }
    });


    /// Isto postizemo i ukoliko koristimo querySelectorAll

    let inputRadioQuery = document.querySelectorAll("input[name='pol']");
    inputRadioQuery.forEach(input =>{
        console.log(input.value);
    })

});;


////////////////////// kvadriraj broj ///

let inputkvadar = document.getElementById("kvadriraj");
let spanKvadrata = document.getElementById("prikazkvadrata");
let btnIzracunaj = document.getElementById("izracunaj");
btnIzracunaj.addEventListener("click", () =>{
    let value = inputkvadar.value;
     spanKvadrata.innerHTML = `${value * value}`;
});

////////////////////// Prepolovi broj ///////
let inputprepolovi = document.getElementById("prepolovi");
let spanPrepolovi = document.getElementById("prikazPrepolovi");
let btnIzracunaj2 = document.getElementById("izracunaj2");
btnIzracunaj2.addEventListener("click", () =>{
    let value = inputprepolovi.value;
     spanPrepolovi.innerHTML = `${value / 2}`;
});


////////////////////// Povrsina kruga ///////
let inputPovrsina = document.getElementById("povrsina");
let spanPovrsina = document.getElementById("prikazPovrsina");
let btnIzracunaj3 = document.getElementById("izracunaj3");
btnIzracunaj3.addEventListener("click", () =>{
    let value = inputPovrsina.value;
     spanPovrsina.innerHTML = `${(value * value) * 3.14}`;
});