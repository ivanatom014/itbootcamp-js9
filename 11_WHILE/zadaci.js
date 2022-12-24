//Zadatak 1a
let a = 1;
while(a <= 20) {
    console.log(a);
    a++;
}

// Zadatak 1b
a = 1;
let poruka = "";
while(a <= 20) {
   poruka = poruka + a + " "; // poruka += (a + " ");
    a++; // i+= 1 // = i + 1;
}
console.log(poruka);

// 2. zadatak prvi nacin
let i = 20;
while(i >= 1){
    console.log(i);
    i--;
}

// 2. zadatak drugi nacin
i = 1;
while(i <= 20) {
    console.log(21 - i);
    i++;
}


// 3.
// 1. nacin
i = 1;
while(i <= 20) {
    if(i % 2 == 0) {
    console.log(i);
    }
    i++;
}

// 2. nacin
i = 2;
while(i <= 20) {
    console.log(i);
    i += 2;
}

// 4. zadatak

let n = 8;
i = 1;
while(i <= n) {
    if(i%3 == 0) {
        document.write("<p style='color: blue'> neki tekst</p>");
    }
    else if(i%3 == 1) {
        document.write("<p style='color: red'>Neki tekst</p>");
    }
    else {
        document.write("<p style='color: green'> neki tekst</p>");
    }
    i++;
}

n = 7;
i = 1;
while(i <= n) {
    if(i%2 == 0) {
        document.write("<img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' style='border: 2px solid red;' width='150'>")
    }
    else {
    document.write("<img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' style='border: 1px solid blue;' width='150'>")
    }
    i++;
}


// Zadatak 4
n = 7;
i = 1;
while (i <= n) {
    if(i % 3 == 0){
        document.body.innerHTML += "<p class='plava'>Neki tekst</p>";
    }
    else if(i % 3 == 1) {
        document.body.innerHTML += "<p style='color: green'>Neki tekst</p>";
    }
    else {
        document.body.innerHTML += "<p style='color: red'>Neki tekst</p>";
    }
    i++;
}

// 6. zadatak
i = 1;
let suma = 0;
while(i <= 100) {
    suma += i; //suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);

// 7. zadatak
i = 1;
n = 15;
let sum = 0;
while(i <= n) {
    sum += i;
    i++;
}
console.log(`Suma je ${sum}`)

// 8.
let m = 7;
n = 5;
let sum1 = 0;
i = n;
while(i <= m) {
    sum1 += i;
    i++;
}
console.log(`Suma je ${sum1}`);

// 9. 
n = 4;
m = 5;
i = n;
let proizvod = 1;

while(i <= m){
    proizvod = proizvod * i;
    i++;
}
console.log(proizvod);

// 10.a
n = 3;
m = 6;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n;
while(i <= m) {
    if(i % 2 == 0) {
//        sumaKvadrataParnih += (i * i);
        sumaKvadrataParnih += (i ** 2);
    }
    else {
        sumaKubovaNeparnih += (i * i * i); // (i ** 3)
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je ${sumaKvadrataParnih}`);
console.log(`Suma kvadrata neparnih brojeva od ${n} do ${m} jednaka je ${sumaKubovaNeparnih}`);

// 11.
let k = 11;
i = 1;
let brojDelioca = 0;
while(i <= k) {
    if(k % i == 0) {
        brojDelioca++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} jednak je ${brojDelioca}`);

// 12.
if(brojDelioca == 2) {
    console.log(`Broj ${k} je prost`);
}
else {
    console.log(`Broj ${k} je slozen`);
}

//DOMACI Odredi zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7. Rezultat ispisati u konzoli.

n = 3;
m = 22;
i = n;
let sum2 = 0;

while(i <= m) {
    if(i%3==0 && i %7!==0){
    sum2 += i;
}
    if(m%3==0 && m %7!==0){
    sum2 += m;
}
console.log(sum2);
    i++;
}
console.log(`Zbir je ${sum2}`);