// let br = 0;
let br = "0";
if(br < 0) {
    console.log("Broj je manji od nule")
}
else if(br == 0) {
    console.log("Broj je jednak nuli")
}
else if( br > 1) {
    console.log("Broj je je veci od nule")
}
else {
    console.log("Zbunjen sam, nije broj");
}

console.log("Kraj grananja")

// Ako nesto moze da pripada na dva mesta, onda ce ici IF IF IF
// Ako nesto pripada samo jednom, onda ce ici IF - ELSE IF

// 7. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

// let date = new Date();
// let day = day.getDay();

// if(day == 0) {
//     console.log("Vikend");
// }
// else if(day == 6) {
//     console.log("Vikend");
// }
// else {
//     console.log("Radni dan")
// }

// // 8. Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let poeni = 60;

if(poeni < 51) {
    console.log("Student je pao ispit");
}
else if(poeni < 61) {
    console.log("Student je dobio 6");
}
else if(poeni < 71) {
    console.log("Student je dobio 7");
}
else if(poeni < 81) {
    console.log("Student je dobio 8");
}
else if(poeni < 91) {
    console.log("Student je dobio 9");
}
else {
    console.log("Student je dobio 10");
}

// 9. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati, u ostalim slučajevima ispisati dobro veče.
let trenutnoVreme = new Date();
let vreme = trenutnoVreme.getHours();

if (vreme < 12) {
    console.log("Dobro jutro");
} 
else if(vreme < 18) {
    console.log("Dobar dan");
}
else {
    console.log("Dobro vece");
}


// 10. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
let current = new Date();
let time = current.getHours();

if(time > 17) {
    console.log("Firma ne radi");
}
else if(time < 9) {
    console.log("Firma ne radi");
}
else {
    console.log("Firma radi");
}

// 11. Za unet sat početka i sat kraja radnog vremena dva lekara,  ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno)
let p1 = 8;
let k1 = 16;
let p2 = 16;
let k2 = 20;

if(k1 < p2) {
    console.log("Nema")
}
else if(k2 < p1) {
    console.log("Nema")
}
else {
    console.log("Ima preklapanja")
}

//12. Za uneti broj ispitati da li je paran ili nije.
let broj = 13;

// 10 / 2 = 5 + ostatak 0
// 206 / 2 = 103 + ostatak 0

// 13 / 2 = 6 + ostatak 1

// 0 / 2 = 0
// 2 / 0 - nije definisano, ne mozemo da delimo nulom

let ost = broj % 2;
if(ost == 0) {
    console.log("Paran broj");
}
else {
    console.log("Neparan broj");
}

// Moze i ovako
if(broj % 2 == 0) {
    console.log("Paran broj");
}
else {
    console.log("Neparan broj");
}

// 13. Za uneti broj ispisati da li je deljiv sa 3 ili ne.
broj = 15;
if(broj % 3 == 0) {
    console.log("Deljiv sa 3")
}
else {
    console.log("Nije deljiv sa 3")
}

// 14. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
// let e = 11;
// let m = 2;

// if(e > m) {
//     console.log(e - m);
// }
// else (m > e) {
//     console.log(m - e);
// }

//15. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
let s = -12;

if(s <= 0){
    console.log("Njegov prethodnik");
} else {
    console.log("Njegov sledbenik")
}

// 16. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 
//maks
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

//min
let min = b1;
if(min > b2) {
    min = b2
}
if(b3 < min) {
    min = b3;
}
document.write(`<p>Minimum je ${min}</p>`);

// srednji
let sr = b1 + b2 + b3 - maks - min;
document.write(`<p>Srednji broj je ${sr}</p>`);

// 17. Za učitani broj ispitati da li je ceo.
let brojevi = 12;
if(brojevi % 1 != 0) {
    console.log("Ovo nije ceo broj");
} else {
    console.log("Ovo je ceo broj");
}

// drugi nacin
let nr = 10.7;
console.log(Number.isInteger(nr));

// treci nacin
let nbr = 10.7;
if(Number.isInteger(nbr)) {
    console.log("Ceo broj")
}
else {
    console.log("Decimalan broj")
}

// 18. 