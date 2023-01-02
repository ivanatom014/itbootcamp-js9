console.log(document); // objekat (koren DOM stabla)
console.log(document.body); // objekta (body tag iz DOM stabla)

let el1 = document.getElementById("p2");
console.log(el1); // objekat iz dom stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML Collection objekata iz DOM stabla
let el3 = document.getElementsByTagName("p");
console.log(el3); // HTML Collection objekata iz DOM stabla
let el4 = document.getElementsByTagName("a");
console.log(el4);

let el5 = document.getElementsByName("p");
console.log(el5); // NodeList objekata iz DOM stabla

// Pristup elementima HTML Collection

for(let i= 0; i < el2.length; i++){
    console.log(el2[i]); // el[i] je element iz html kolekcije el2
}

/*
el2.forEach(e =>{
    console.log(e);
}); */ // Ovako ne moze - HTML Collection ne poseduje forEach petlju 

let elems = Array.from(el2);
elems.forEach(e =>{
console.log(e);
});

// Pristup elementima NodeList - moze i preko for i preko forEach
el5.forEach(e =>{
    console.log(e);
});


// Primena medota querySelector
let t1 = document.querySelector("#p2"); // kao parametar ide css selektor
console.log(t1); 
let t2 = document.querySelector(".par");
console.log(t2); // objekat - PRVI objekat obuhvacen prosledjenim CSS selektorom

let t3 = document.querySelectorAll(".par:nth-child(odd");
console.log(t3);

t1.innerHTML += "Novi tekst paragrafa sa id-jem <span class='bold'>p2</span> "
/*
for(let i= 0; i < el2.length; i++){
    t3[i].innerHTML += "Promena teksta paragrafa sa id-jem <span class='bold'>p2</span> "
} */


let link = document.querySelector("a");
link.href = "https://www.google.com";
link.target = "_blank";
link.id = "link";


link.style.color ="red";
link.style.bordr = "1px solid blue";
link.style.fontSize= "24px"; 

// link.style = "color:red; border: 1px solid blue; font-size: 24px"; 

// 1 Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“


let parg = document.getElementsByTagName("p");
for(let i =0; i<parg.length;i++){
    parg[i].innerHTML += "VAZNO!!!"
}

// 2 Svim divovima na stranici sa klasom “error”, dodati po jedan naslov najveće veličine sa tekstom “Greška!”.

let divs = document.querySelectorAll("div");
for(let i =0; i<divs.length;i++){
    divs[i].innerHTML += "<h1>Greska</h1>";
}

// 3 Neka je 𝑛 broj paragrafa u datom dokumentu. U svakom 𝑖-tom paragrafu dodati broj 𝑖^2, za svako 𝑖=1, 2, …, 𝑛.
let n = document.getElementsByTagName("p");
for(let i =0; i<n.length;i++){
    n[i].innerHTML += (i + 1) ** 2;
}

// 4 Svim slikama dodati alternativni tekst.
 let pic = document.getElementsByTagName("img");
 for(let i =0; i<pic.length;i++){
    pic[i].alt += "slike"
 }

 // 5 Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.
let ljub = document.getElementsByTagName("p")
for(let i =0; i<ljub.length;i++){
    ljub[i].style.color = "purple";
}

//  6 Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju.
 for(let i = 0;i<ljub.length;i++ ){
    if( i % 2 == 0){
        ljub[i].style.backgroundColor = "green";
    }
    else {
        ljub[i].style.backgroundColor = "red";
    }
 }

 //  7 Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.


 let linkovi = document.getElementsByTagName("a");
 

for(let i = 0; i < linkovi.length;i++){
linkovi[i].style.padding = "5px";
 linkovi[i].style.fontSize = "18px";
 linkovi[i].style.textDecoration = "none";
    if(i % 2 == 0){
        linkovi[i].style = "background-color:green;color:purple"
    }
    else {
        linkovi[i].style = "background-color:blue;color:white"
        
    }
}

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 



 let table = document.querySelector("table");
 console.log(table.parentNode);
 console.log(table.childNode[0]);
 console.log(table.childNode[1]);