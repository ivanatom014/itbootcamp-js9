/*

let paragrafi = document.getElementsByTagName("p");
for(let i = 0; i <paragrafi.length;i++){
    if(i % 2 ==0){
        paragrafi[i].classList.add('error')
    }
    else{
        paragrafi[i].classList.add('success')
    }
}

// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.


// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.

let p = document.getElementsByTagName("p");
for(let i = 0; i <p.length;i++){
    if(p[i].textContent.includes('error')){
        paragrafi[i].classList.add('error');
    }
   else if(p[i].textContent.includes('success')){
        paragrafi[i].classList.add('success');
    }
 
}  */

let naslov = document.createElement("h3");
naslov.innerHTML = "Naslov kreiran iz js";
document.body.append(naslov);


let lista = document.createElement("ul");

document.body.append(lista);
let li1 = document.createElement("li");
li1.innerHTML = "prva stavka liste";
lista.append(li1);

let li2 = document.createElement("li");
li2.innerHTML = "druga stavka liste";
lista.append(li2);


for(let i = 0; i < 3;i++){
    let par = document.createElement("p");
    par.innerHTML = `${i+1}-ta stavka liste`;
    let li = document.createElement("li");
    li.append(par);
    lista.append(li);

}
