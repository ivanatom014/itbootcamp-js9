let blog1 = {
    title: "HTML",
    likes: 15,
    dislikes: 5
};

let blog2 = {
    title: "CSS!",
    likes: 20,
    dislikes: 35
};


let blog3 = {
    title: "js",
    likes: 5,
    dislikes: 7
};


// Ispis niza objekata
let blogs = [blog1, blog2, blog3];
console.log(blogs); 

// Ispis jednog objekta iz niza
console.log(blogs[2]);

// Ispis propertija

console.log(blogs[2].title);

// Ispis svih naslova blogova u konzoli

blogs.forEach(blog =>{

  console.log(blog.title);

});


/// Ispis svih naslova blogova na stranici

for(let i = 0; i < blogs.length; i++){
    document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
    document.body.innerHTML += `<p>likes:${blogs[i].likes}</p>`;
    document.body.innerHTML += `<p>dislikes:${blogs[i].dislikes}</p>`;
}


// Zadatak 1

let sumLikes = arrObjs => {
      let sum = 0;
      arrObjs.forEach(obj =>{
        sum += obj.likes;
      });
      return sum;
}

console.log(sumLikes(blogs));

// Zadatak 2

let avgLikes = blogs => {
    return sumLikes(blogs) / blogs.length;
}

console.log(`porsecan broj lajkova je: ${avgLikes(blogs)}`);


// Zadatak 3 

let vise_pozitivnih = arrObjs =>{
    arrObjs.forEach(obj =>{
        if(obj.likes > obj.dislikes){
            console.log(obj.title);
        }
    });
}
vise_pozitivnih(blogs);

// Zadatak 4

let duplo_vise = arrObjs => {
    arrObjs.forEach(ob =>{
        if(ob.likes >= ob.dislikes * 2){
            console.log(ob.title);
        }
    });
}
duplo_vise(blogs);

// Zadatak 5

let uzvicnik = niz => {
    niz.forEach(e => {
        if(e.title.endsWith("!")){
            console.log(e.title);
        }
    });
}
uzvicnik(blogs);


