/*
let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);
console.log(cars[0]); // toyota
console.log(cars[2]); // volvo
console.log(cars[3]); // undefined

cars[1] = "Peugeot";
console.log(cars);

let razno = [15, -3.5,"hello", true, [1,2,3]];
console.log(razno);


// Ispis elemenata niza cars
for(let i = 0; i < cars.lenght; i++){
    console.log(cars[i]);
}

// Pristup elementima niza razno
for(let i = 0; i < razno.lenght; i++){
    console.log(razno[i]);
}
let unutrasnjiNiz = razno[4];
for(let i = 0; i < unutrasnjiNiz.lenght; i++){
    console.log(unutrasnjiNiz[i]);
} 

// Uvecanje
for(let i = 0; i <razno[4].length; i++){
    razno[4][i] = razno[4][i]*1.1;
}
for(let i = 0; i <razno[4].length; i++){
   console.log(razno[4][i]);
}
*/


let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [5, 1, 2];
// zadatak 2
let sumaElem = niz => {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir;
}
console.log(sumaElem(brojevi));
console.log(sumaElem(brojevi2));

// zadatak 3
let proizvodElem = niz => {
    let pr = 1;
    for(let i = 0; i < niz.length; i++){
        pr *= niz[i];
    }
    return pr;
}
console.log(proizvodElem(brojevi3));



// Zadatak 4

// I nacin
let srednjaVrednost = niz =>{
    let zbir = 0;
    br_brojeva = 0;
    for(let i = 0; i < niz.length; i++){
        zbir += niz[i];
        br_brojeva++;
    }
    let arsr = zbir/br_brojeva;
    return arsr
}
console.log(srednjaVrednost(brojevi3));

// II nacin
let srednja = niz =>{
    let zbir = 0;
    for(let i = 0; i < niz.length; i++){
        zbir += niz[i];
    }
    return zbir/niz.length;
}
console.log(srednja(brojevi3));

// III nacin
let srVrednost = niz =>{
    let zbir = sumaElem(niz);
    let br = niz.length;
    return zbir/br;
}
console.log(srVrednost(brojevi3));

// IV nacin

let vrednost = niz => sumaElem(niz)/niz.length
console.log(vrednost(brojevi3));

// Zadatak 4a) Naci srednju vrednost parnih elemenata celobrojnog niza

let srednjaVrednostParnih = niz =>{
    let zbir = 0;
    let br_brojeva = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            zbir = zbir + niz[i];
            br_brojeva++
        }
    }
    let arsr = zbir/br_brojeva;
    return arsr
}
console.log(srednjaVrednostParnih(brojevi3));



// Zadatak 5 i 6

let brojevi6 = [4, 6, 10];
console.log(Math.max(...brojevi6));
console.log(Math.min(...brojevi6));


// Zadatak 5
let maxNiza = niz => {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] > max){
            max = niz[i];
        }
    }
    return max;
}
let br = [8, 11, 10, 11, 4];
console.log(maxNiza(br));

// Zadatak 6
let minNiza = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

console.log(minNiza(br));

//// Zadatak 7


let indMaxniza = niz =>{
    let max = maxNiza(niz);
    let index = -1;
    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
        }
    }
    return index;
}
let elementi = [15,13, 10, 15];
console.log(indMaxniza(elementi));


// Ova funkcija vraca indeks prvog maksimuma
let indMaxniza2 = niz =>{
    let max = maxNiza(niz);
    let index = -1;
    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
            break
        }
    }
    return index;
}
let elementi1 = [15,13, 10, 15];
console.log(indMaxniza2(elementi1));

//// Ova funkcija vraca indeks prvog maksimuma

let indMaxniza3 = niz =>{
    let max = maxNiza(niz);
    let index = -1;
    for(let i = 0; i < niz.length; i++){
        if(max == niz[i]){
            index = i;
            return index;
        }
    }
}
console.log(indMaxniza3(elementi));


//// Zadatak 9
let elementi6 = [3, 2, 4];
let brojElemenata = niz =>{
    let arsrs = srednjaVrednost(niz);
    let br_veci = 0;
    for(let i=0; i < niz.length; i++){
        if(niz[i] > arsrs){
            br_veci++;
        }
    }
    return br_veci
}
console.log(brojElemenata(elementi6));


// Zadatak 10

let elementi5 = [3, 2, 4, -3];
let zbir_poz = niz =>{
    let zbir = 0;
    for(let i=0; i<niz.length; i++){
        if(niz[i]>0){
            zbir= zbir + niz[i];
        }
    }
    return zbir

}
console.log(zbir_poz(elementi5));

// Zadatak 11
let elementi10 = [3, 2, 4, 6];
let parniElementi = niz =>{
   let br_parnih = 0;
    for(let i=0; i < niz.length; i++){
          if(niz[i] % 2 == 0){
            br_parnih++;
             }
    }
    return br_parnih
}
console.log(parniElementi(elementi10));


// Zadatak 12
let nn = [10, 12, 11, 13, 14, 16];
let paranBrNeparanInd = niz =>{
    let br = 0;
    for(let i =0; i <niz.length; i++){
       if(niz[i] % 2 == 0 && i % 2 != 0){
        br++;
       }
    }
    return br;
}

console.log(paranBrNeparanInd(nn));

// II nacin

let nm = [10, 12, 11, 13, 14, 16];
let paranBrNeparanInd1 = niz =>{
    let br = 0;
    for(let i = 1; i <niz.length; i+=2){
       if(niz[i] % 2 == 0 ){
        br++;
       }
    }
    return br;
}

console.log(paranBrNeparanInd1(nm));


// Zadatak 13
let par = [3, 4, 6, 4];
let sumaParnihIN = niz =>{
    let sumParnih = 0;
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 0){
            sumParnih = sumParnih + niz[i];
        }
    }
    return sumParnih;
}
console.log(sumaParnihIN(par));


// Zadatak 14
let znak = [-10, -5, -4]
let znakElem = niz =>{
    for(let i = 0; i < niz.length; i++){
        niz[i] = niz[i] * (-1);
    }
    return niz
}
console.log(znakElem(znak));

// Zadatak 15
let zn = [-1, 3, -3, 5];
let znak2 = niz =>{
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 != 0 && i % 2 == 0){
            niz[i] = niz[i] * (-1);
        }
    }
    return niz;
}
console.log(znak2(zn));