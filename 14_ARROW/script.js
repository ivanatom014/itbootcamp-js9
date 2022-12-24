// Imenovane f-je

function sum(a, b)
{ 
    return a + b;
}

let rez = sum(1, 2);
console.log(rez);

// Anonimne funkcije
let suma = function(a, b) // Anonimna f-ja (function), {parametar, {return}}
{
    return a + b
}

rez = suma(1, 2) // poziv anonimne f-je preko promenjive
console.log(rez)


// Arrow funkcije (anonimne funkcije sa skracenim zapisom)

let sum2 = (a, b) => {
    return a + b;
}
rez = sum2(5, 6);
console.log(rez);

//

let hello = () =>{
    console.log("Hello word");
}
hello();
hello();

// 
let eho = (s1, s2) =>{
    let rezultat = s1 + ", " + s2;
    console.log(rezultat);
}

eho("Ivana", "Tomic");



/* Napisati arrow funkciju koja prihavata 3 parametra:  ime, prezime, godine
A koja ispisuje jedan od zadatih tekstova:
   - Osoba ____  ____ je punoletna
   - Osoba ____  ____ je maloletna */

 // I nacin

   let osoba = (a, b, c) => {
    if(c > 18){
        console.log("Osoba je punoletna");
    }
    else {
        console.log("Osoba je maloletna");
    }
   }

   osoba("Ivana", "Tomic", 17);

   // II nacin

   let ispisHTML = (ime, prezime, godine) =>{
    if(godine >= 18){
        let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
        return ispis;
    }
    else{
        let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
        return ispis;
    }
   }

   document.body.innerHTML += ispisHTML("Ivana","Tomic", 29);
   document.body.innerHTML += ispisHTML("Pera","Peric", 29);

// Zadatak 3
let neparan = (n) => {
    if(n % 2 == 0){
        return false;
    }
    else{
        return true;
    }
}
console.log(neparan(3));
console.log(neparan(6));

// II nacin - bez pomocnih promenjivih

let neparan4 = (n) =>{
    if(n%2 ==1){
        return true;
    }
    else{
        return false;
    }
}
// III nacin - isto kao II naci, samo skaraceno
let neparan5 = (n) =>{
    return(n % 2 ==1);
}
console.log(neparan5(9));
console.log(neparan5(2));

// IV nacin, isto kao III nacin, samo koristeci svojstva arrow funkcije
// Ako arrow f-ja ima JEDAN parametar, onda ne mora u zagradama
// Ako se telo arrow f-je sastoji samo od return naredbe, ona nije obavezna

let neparan6 = n => (n % 2 == 1);

console.log(neparan6(9));
console.log(neparan6(2));

// zadatak 4

// I nacin
let maks2 = (a, b) => {
    if(a > b){
        return a
    }
    else{
        return b;
    }
}
console.log(maks2(4, 9));

// II nacin - arrow f-ja sa skracenim zapisom
let max2 = (a, b) => (a > b) ? a : b; // 


console.log(max2(13, 6));


/// Maksimum 4 broja
let maks4 = (a, b, c, d) => {
    return maks2( maks2(a, b), maks2(c, d));
}

console.log(maks4(6, 10, -5, 12));


// zadatak 5.

let slika = (photo) => {
    document.write(`<img src=${photo}>`)
}
slika("ss.jpg");

// zadatak 6

let color = (bj) => {
    document.write(`<p style="color:${bj}">Tekst</p>`)
}
color("blue");