let sati = 17;
let minuti = 42;
let minUkupno = sati * 60 + minuti;

console.log(minUkupno);

// Zadatak jedan

let sat = 18;
let minut = 16;
let odPonoci = sati * 60 + minuti;

console.log(odPonoci);

let doPonoci = 24 * 60 - odPonoci;
console.log(doPonoci);

// Zadatak dva

let minOdPonoci = 135;
let hours = Math.floor(minOdPonoci / 60);
let minutes = minOdPonoci % 60;
console.log(hours + ":" + minutes);

// Zadatak 2a
minutes = minOdPonoci % 60; // 95 % 60 = 35 (ostatak)
hours = (minOdPonoci - minutes) / 60; // (95 - 35) = 60 / 60 = 1
console.log(hours + ":" + minutes);

// Zadatak cetiri
let datum = new Date(); // datum je objekat koji sadrzi info o trenutnom datumu i vremenu
//let mesec = datum.getMonth() + 1;
//console.log(datum.getFullYear() + "/" + mesec);
let h = datum.getHours();
let m = datum.getMinutes();
console.log(h + ":" + m);
let mop = h * 60 + m;
console.log(mop);

// Zadatak 3
let ukupnaCenaRobe = 1399;
let novcanica = 2000;
let kurs = novcanica - ukupnaCenaRobe;
console.log(kurs);

// Zadatak 5
let dan = datum.getDate();
let mesec = datum.getMonth() + 1;
let godina = datum.getFullYear();
console.log(dan + "." + mesec + "." + godina);
console.log(godina + "/" + mesec + "/" + dan);

// Zadatak 6
// Prva konverzija
let euro = 150;
let kurss = 117.2986;
let dinara = euro * kurss;
console.log(dinara);

// Druga konverzija
let novacDinara = 13000;
let konverzijaEuro = novacDinara / kurss;
console.log(konverzijaEuro);

// Zadatak 7
let ukupnoEvra = 70;
let evroDinar = 117.2986;
let dolarDinar = 110.5542;

let dinar = ukupnoEvra * evroDinar;
let dolari = dinar / dolarDinar;
let dolarEvro = dolari 


// Osmi zadatak

let c1 = 10;
let f1 = c1 * 1.8 + 32;
console.log(f1);

let f2 = 50;
let c2 = (f2 - 32) / 1.8;
console.log(c2);

// Deveti zadatak

