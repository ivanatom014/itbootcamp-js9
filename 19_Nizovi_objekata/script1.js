
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

let blog4 = {
    title: "Responsive web",
    likes: 3,
    dislikes: 15
};

let blog5 = {
    title: "NoSQL DB",
    likes: 200,
    dislikes: 15
};

let blog6 = {
    title: "Event Listener",
    likes: 700,
    dislikes: 19
};

let user = {
    username:"Jelena",
    age: 28,
    blogs: [blog1, blog2, blog3],
    logBlogs: function(){
        this.blogs.forEach(blog=>{
            console.log(blog.title);
        });
    }
}

let user1 = {
    username:"Stefan",
    age: 13,
    blogs: [blog4, blog5],
    logBlogs: function(){
        this.blogs.forEach(blog=>{
            console.log(blog.title);
        });
    }
}

let user2 = {
    username:"JohnDoe",
    age: 36,
    blogs: [blog6],
    logBlogs: function(){
        this.blogs.forEach(blog=>{
            console.log(blog.title);
        });
    }
}

// Ispisati sve blogove korisnika user
console.log(user.blogs);

// Ispisati naslov prvog bloga koji je napisao korisnik user

console.log(user.blogs[0]); // Ovo je prvi blog korisnika user

// Ispisati naslov prvog bloga koji je napisao korisnik user

console.log(user.blogs[0].title);

user.logBlogs();


///////////////////////

let users = [user, user1, user2];

// Zadatak 2 - ispisati imena korisnika koji imaju ispod 18 godina


users.forEach(u => {
    if(u.age < 18){
        console.log(u.username);
    }
})

// Zadatak 3 - naslovi koji imaju vise od 50 lajkova

users.forEach(user =>{
   let blogs = user.blogs; // niz blogova tekuceg user-a
   blogs.forEach(blog =>{
    if(blog.likes > 50){
        console.log(blog.title);
    }
   });
})

// Zadatak 4 - ispisati blogove korisnika JohnDoe

users.forEach(user =>{
    if(user.username == "JohnDoe"){
        user.logBlogs();
    }
});
// Napraviti arrow f-ju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove

let printBlogs = username =>{
    users.forEach(user =>{
        if(user.username == username){
            user.logBlogs();
        }
    });
}

printBlogs("Stefan");