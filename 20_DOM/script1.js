// Dohvatiti prvi paragraf na stranici. 

let p = document.getElementById("prvi");
     console.log(p);

// Dohvatiti prvi div tag sa klasom „error

let div = document.querySelector("div.error");
console.log(div);

// Dohvatiti sve linkove na stranici.
let li = document.getElementsByTagName("a");
for(let i=0; i <li.length;i++){
    console.log(li[i]);
}

// Dohvatiti sve slike na stranici.
let slike = document.getElementsByTagName("img");
for(let i=0; i <li.length;i++){
    console.log(slike[i]);
}

// Dohvatiti poslednji red u tabeli.

let r = document.querySelector("tr:last-child");
console.log(r);