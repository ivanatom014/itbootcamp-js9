// Priooritet u logickim operatorima:
// 1. !
// 2. &&
// 3. ||

// and - &&
// daje true Iskljucivo ako imamo true && true
let a = 15;
let b = -6;

if(a==5 && b==6) {
    console.log("Hello!")
}

// or - ||
// NE daje true iskljucivo ako su oba izraza netacna
// tj. daje true ukoliko je makar jedan izraz tacan

if(a==5 || b==6) {
    console.log("world");
}

let c = 7;
if(a==5 && b==6 || c==7) {
    console.log(`Sva tri su tacna`)
}
else {
    console.log(`Neki od uslova nije tacan`)
}

if(a==5 || b==6 || c==7) {
    console.log(`Makar jedan od uslova je tacan`)
}
else {
    console.log(`Ni jedan od uslova nije tacan tj. svi uslovi su netacni`);
}


// 

if(c !== 7) {
    console.log(`c je razlicito od 7`);
}

if( !(c==7) ) {
    console.log(`c je razlicito od 7`);
}


// 21. Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 

if(a>b && a>c) {
    console.log("a je najveci broj");
}
else if(b>a && b>c) {
    console.log("b je najveci broj");
}
else {
    console.log("c je najveci");
}

// 22. U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let t = -22;

if(t < -15 || t > 40) {
    console.log("Ekstremna temperatura");
}

// 23. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

// let current = new Date();
// let godine = current.getFullYear;

let godine = 2002;
if( (godine%4==0 && godine%100!==0) || godine%400==0) {
    console.log(`Godina ${godine}. je prestupna`);
}
else{
    console.log(`Godina ${godine}. nije prestupna`);
}

// 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren. U suprotnom ispisati “zatvoreno”.

// Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati i sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati i sličicu zatvorenih vrata.
let dan = 1;
let sat = 22;

if(dan==0 || dan==6) {
    // Vikend
    if(sat>=10 && sat<18) {
        console.log("Vikend je i butik je trenutno otvoren");
        document.write(`<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg">`)
}
    else {
        console.log("Vikend je i butik je trenutno zatvoren");
        document.write(`<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg">`)
    }
}
   else {
    // Radni dan
    if(sat>=9 && sat<20) {
    console.log("Radni dan je i butik je trenutno otvoren");
    document.write(`<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg">`)
    }
    
    else {
        console.log("Radni dan je i butik je trenutno zatvoren");
        document.write(`<img src = "https://cdn2.vectorstock.com/i/1000x1000/14/11/close-sign-vector-12431411.jpg">`)
    }
}