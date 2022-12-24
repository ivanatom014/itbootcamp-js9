console.log(`Funkcije`);

function zdravo() {
    console.log(`Zdravo!`);
}
zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for(i = 1; i <= 5; i++) {
    zdravo(); // Poziva funkciju onoliko puta koliko se izvrsi FOR petlja
}

//////////////////////////////////////////

function hello(name) {
    console.log(`Hello ${name}`);
}

hello("Andjela");
hello("Dusica");

//////////////////////////////////////////

function hello_full_name(ime, prezime) {
    console.log(`Hello ${ime} ${prezime}`);
}

hello_full_name("Dusica", "Andric");

let im = "Ana";
let pr = "Ivanovic";
hello_full_name(im, pr);


///////////////////////////////////////////

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function bojiParagraf(boja) {
    document.write(`<p style="color:${boja};">Obojeni tekst</p>`);
}

bojiParagraf("red");
bojiParagraf("orange");

// 2. Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function sabiranje(a, b) {
    console.log(a + b);
    console.log(a * b);
    console.log(a - b);
    console.log(a / b);
}
sabiranje(12, 4);

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(photo) {
    document.write(`<img src=${photo}>`)
}
slika("1.jpg");

// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function font(size) {
    document.write(`<p style="font-size: ${size}">Velicina teksta</p> `);
}
font("27px");

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
function font(size) {
    document.write(`<p style="font-size: ${size}">Velicina teksta</p> `);
}
for(i = 20; i < 25; i++){
font(`${i}px`);
}


// 4. zadatak
/* Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. */


function maks2(br1, br2){
   if(br1 > br2){
    return br1;
   }
   else{
    return br2;
   }
}

let m1 = maks2(3, 6);
console.log(`veci je broj ${m1}`)

// Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
