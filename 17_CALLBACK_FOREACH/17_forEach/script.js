// Zadatak 2

let sumElem = niz => {
    let suma = 0;
    niz.forEach(el =>{
        suma += el;
    
    }); // ova arrow f-ja jeste callback f-ja
    return suma;
}

// Zadatak 5

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el =>{
        if(el > max){
            max = el;
        }
    });
    return max;
}



let a = [1,3, 4, 6];
console.log (sumElem(a)); // sumaElem nije callback f-ja


// Zadatak 7
let indexMaxVr = niz =>{
    let max = niz[0];
    let idx = 0;
    niz.forEach((el, i) =>{
        if(el > max){
            max = el;
            idx = i;
        }
    });
    return idx;
}
console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 4];
console.log(indexMaxVr(b));

// Zadatak 19

let c = ["banane", "jabuk", "kruske","limun"];

let duzina = niz => {
    niz.forEach(el =>{
      console.log(el.length)
    });
   
}
duzina(c);

// Zadatak 20

let imena = ["Petar", "Stefan", "Nikola", "Vuk", "Ana"];
/*
let maxDuzinaPoslednji = niz => {
    let maxd = 0;
    niz.forEach(el =>{
        if(el.length > maxd){
            maxd = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el=>{
        if(el.length == maxd){
            maxStr = el;
        }
});
return maxStr
}
console.log(maxDuzinaPoslednji(imena)); */

let maxDuzinaPrvi = niz => {
    let maxd = 0;
    niz.forEach(el =>{
        if(el.length > maxd){
            maxd = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el=>{
        if(el.length == maxd && maxStr == undefined){
            maxStr = el;
        }
});
return maxStr
}
console.log(maxDuzinaPrvi(imena));


// Zadatak 21

let prosecnaDuzina = niz => {
    let duz = 0;
    niz.forEach(el => {
        duz += el.length;
    });
    return duz / niz.length;

}

console.log(prosecnaDuzina(imena));

let brojnatprosecnodugih = niz =>{
    let duz = prosecnaDuzina(niz);
    let br = 0;
    niz.forEach(el =>{
        if(el.length > duz){
            br++;
        }
    });
    return br;
}
console.log(brojnatprosecnodugih(imena));

// Zadatak 22
let brojSadrziA = niz =>{
    let br = 0;
    niz.forEach(el =>{
        if(el.includes("a") || el.includes("A")){
            br++;
        }
    });
    return br;
}
console.log(brojSadrziA(imena)); 

// Zadatak 23

let brojPocinjeA = niz =>{
    let br = 0;
    niz.forEach(el =>{
        if(el[0] == "a" || el[0] =="A"){
            br++;
        }
    });
    return br;
}
console.log(brojPocinjeA(imena)); 