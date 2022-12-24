let x = 5;
let y = 7;

if(x == y)
{
    console.log("jednake vrednosti");
}
else 
{
    console.log("Razlicite vrednosti");
}


// Isto kao prethodni samo kontra pitanje
if(x != y)
{
    console.log("Razlicite vrednosti");
}
else{
    console.log("Iste vrednosti");
}

// 1. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”
let proizvod = 105;
if(proizvod > 100)
{
    document.write("<p>Throw away</p>");
}
else
{
    document.write("<p>Pack up</p>");
}


// 2. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.
let temp = -2;
if(temp >= 0){
    document.write("<p style='color: red;'>Temperatura u plusu</p>")
}
else {
    document.write("<p style='color: blue;'>Temperatura u minusu</p>")
}

// 3. U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).
let pol ="z";
if(pol == "m"){
    document.write("<img src='https://cdn1.vectorstock.com/i/1000x1000/90/35/avatar-men-design-vector-14499035.jpg' style='width: 70px;'>");
}
else{
    document.write("<img src='https://img.freepik.com/premium-vector/blond-woman-avatar-portrait-young-girl-vector-illustration-face_217290-581.jpg?w=2000' style='width: 70px;'>")
}

// 4.    U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne. Popodne je kada prođe 12:00 sati, ne računajući i to vreme

let currentDate = new Date();
let time = currentDate.getHours();
if (time > 12){
    document.write("<p>Popodne je</p>")
}
else {
    document.write("<p>Jutro je</p>")
}

// 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

let currentYear = new Date();
let year = currentDate.getFullYear();
let brth = 1994;

let godine = year - brth;

if(godine >= 18){
    document.write("<p>Osoba je punoletna</p>");
} 
else {
    document.write("<p>Osoba nije punoletna</p>");
}


// // 6.
// a = 6;
// b = 7;
// c = 2;

// let max;

// if(a > b && a > c) {
//     let = a;
// }
// else if (b > a && b > c){
//     let = b;
// }
// else (c > b && c > a){
//     let = c;
// }

// document.write(`<p>Maksimum je ${max}</p>`);

// 6. Sa maksimumom
let b1 = 10;
let b2 = 15;
let b3 = 13;

let maks = b1;
if(maks < b2) {
    maks = b2;
}
if(maks < b3) {
    maks = b3
}
document.write(`<p>Maksimum je ${maks}</p>`);

// Sa minimumom
let min = b1;
if(min > b2) {
    min = b2
}
if(b3 < min) {
    min = b3;
}
document.write(`<p>Minimum je ${min}</p>`);


