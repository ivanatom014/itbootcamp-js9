// 1. Ispisati brojeve od 1 do 20 
let w = 1;
while(w <= 20) {
    console.log(w);
    w++; // w =+ 1; // w = w + 1;
}

for(i=1; i<=20; i++) {
    console.log(i);
}

// 2. Ispisati brojeve od 20 do 1
for(i=20; i>=1; i--) {
    console.log(i);
}

// 3. Ispisati parne brojeve od 1 do 20 
// 1. nacin
for(i = 1; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// 2. nacin
for(i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 5. Odrediti sumu brojeva od 1 do n
let s = 0;
let n = 5;
for(i = 1; i <= n; i++) {
    s += i;
}

console.log(`Suma je ${s}`);

// 7. Odrediti proizvod brojeva od n do m
n = 2;
let m = 5;
let sum = 1;
for(i = n; i <= m; i++) {
    sum *= i;
}
console.log(sum);


// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora)
// 1.png
// 2.png
// 3.png
for(i = 1; i <= 3; i++) {
    document.write(`<img src="slike/${i}.png">`);
} 

// Ispisatti prvih n parnih brojeva pocevsi od broja 2.
n = 3;
i = 2;
br_parnih = 0;

while(br_parnih < n) {
    if(i%2 == 0) {
        br_parnih++;
        console.log(`${br_parnih}. od ${n} parnih je broj ${i}`);
    }
    i++;
}

// Koliko brojeva ucestvuje u sumiranju dok suma ne predje broj k?
let k = 10;
let suma = 0;
let br_brojeva = 0; // Pitam se?
let ii = 1; // Koliko njih ce ucestvovati

while(suma < k) {
    suma += ii;
    br_brojeva++;
    ii++;
}
console.log(br_brojeva);

// Koliko neparnih brojeva ucestvuje u sumiranju dok suma ne predje broj k?
k = 10;
suma = 0;
br_brojeva = 0; // Pitam se?
ii = 1; // Koliko njih ce ucestvovati

while(suma < k) {
    if(ii%2 != 0) {
    suma += ii;
    br_brojeva++;
}
ii++;
}
console.log(br_brojeva - 1);

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let deljiv13 = 0
for(b=5; b<=150; b++){
    if(b%13==0){
   deljiv13++;
    }
}
console.log(`U intervalu od 5 do 150 ima ${deljiv13} brojeva koji su deljivi sa brojem 13`);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.
n = 10;
m = 14;
let zbir = 0;
br_brojeva = 0;

for(i = n; i <= m; i++) {
    zbir += i;
    br_brojeva++;
}
let arsr = zbir / br_brojeva;
console.log(`Aritmeticka sredina je: ${arsr}`);
// (10 + 11 + 12 + 13 + 14) / 5 = 60 / 5 = 12

// 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
n = 50;
m = 70;
sum = 0;
let poslednjaCifra = 0;
for(i = n; i <= m; i++) {
    if(i % 10 == 4) {
        sum += i;
        poslednjaCifra++;
    }
}
console.log(`Prebrojali smo ${poslednjaCifra} broja koji se zavrsavaju sa 4, a njihov zbir je ${sum}.`)

// 16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 6;
m = 10;
let a = 3;
suma = 0;
for(i = n; i <= m; i++) {
    if(i % a != 0) {
        suma += i;
    }
}
console.log(suma);

// 18. Odrediti sa koliko brojeva je deljiv uneti broj k
k = 12;
brojevi = 0;
for(i = 1; i <= k; i++) {
    if(k % 2 == 0 || k % 3 == 0) {
        brojevi ++;
        i++;
    }
}
console.log(brojevi);

// 19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.


// 20. Napraviti tabelu sa 6 redova. Svaki red tabele treba da ima po dve ćelije (dve kolone). Svakom parnom redu dodati klasu „obojen“. Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.
let str = `<table border = "1">`;
// Ispis redova
for(i = 1; i <= 6; i++) {
    if(i % 2 == 0) {
        str += 
        `
            <tr class="roze">
                <td>Tekst</td> 
                <td>Tekst</td>
            </tr>
        `;
    }
    else {
        str += 
        `
            <tr>
                <td>Tekst</td> 
                <td>Tekst</td>
            </tr>
        `;
    }
    
}
str += `</table>`;
// document.body.innerHTML += str;
document.write(str);

// 21. Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
let lista = `<ul>`;
for(i = 1; i <= 10; i++){
    if(i % 3 == 0) {
        lista += 
        `
        <li>
            <ul>
                <li>Element ${i}</li>
            </ul>
        </li>
        `;
    }
    else {
        lista += `<li>Element ${i}</li>`;
    }
    
}
lista += `</ul>`;
document.write(lista);


/*
 <ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>
        <ul>
            <li>Element 3</li>
        </ul>
    </li>
</ul> 
*/


