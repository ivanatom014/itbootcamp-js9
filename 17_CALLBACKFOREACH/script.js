// Funkcija 1: niz => for petljom prodjemo kroz sve elemente niza i svaki ispisemo u konzoli
// Funkcija 1: niz => for petljom prodjemo kroz sve elemente niza i svaki ispisemo u div element

function ispisKonzola(poruka){
    console.log(poruka);
}

function ispisStranica(poruka){
    let div = document.getElementById("container");
    div.innerHTML = poruka;
}


function ispisNiza(niz, cb){
    let poruka = " ";
    for(let i = 0; i < niz.length;i++){
        poruka += (niz[i] + " "); 
    }
    cb(poruka);
}

ispisKonzola("bla bla");
ispisStranica("bla bla bla");

let a = [6, 8, 9, 8, 5];
let b = ["pera", "mika", "zika"];
ispisNiza(a,ispisStranica);
ispisNiza(a,ispisKonzola);
ispisNiza(b,ispisKonzola);


a.forEach(ispisKonzola);
// forEach petlja je metoda koja za svaki element niza poziva callback f-ju

a.forEach(function(element){
    console.log(element);
})

// forEach ce za svaki element niza a, da pozove anonimnu f-ju i prosledice svaki put po jedan elemenat niza

a.forEach(elem => {
    console.log(elem);
})