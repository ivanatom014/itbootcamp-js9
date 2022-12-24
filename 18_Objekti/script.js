let blog1 = {
    title: "HTML",
    content:"Ovo je blog o osnovnim HTML taagovima",
    author: "Jelena"
};
// Ispis celog objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis jendog propertija
console.log(blog1.title);
console.log(blog1['title']);

// Izmena propertija
blog1.content = "Osnove HTML-a";
console.log(blog1);



//////
let user = {
  username: "JM",
  age: 28,
  blogs:["IF naredba granjanja", "FOR petlja", "While petlja"],
  login: function(){
    console.log('Ulogovani ste');
  },
  logout: function(){
    console.log('Izlogovani ste');
  },
  logBlogs: function(){
    this.blogs.forEach(b =>{
        console.log(b);
    });

  }
  
};

user.login();
user.logout();
user.logBlogs();

user.blogs.forEach(b =>{
    document.write(`<p>${b}</p>`);
})


////////////// 

let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [5, 10, 15, 15, 15, 15, 15],
    prosecna: function(){
          let suma = 0;
          this.temperature.forEach(t =>{
            suma += t;
          })
          return suma / this.temperature.length
    },
// 2.
    brNatprosecnih: function(){
        let br = 0;
        let avg = this.prosecna();
        this.temperature.forEach(t=>{
            if(t > avg){
                br++;
            }
        });
        return br;
    },
// 3
    maxmerenja: function(){
      let broj = 0;
      let tempmax = this.temperature[0];
      this.temperature.forEach(el =>{
          if(el > tempmax){
              tempmax = el;
          }
      });
     this.temperature.forEach(el =>{
      if(el == tempmax){
          broj++;
      }
     });
     return broj;
  },

  // 5

     toplo: function(){
      if(this.brNatprosecnih() > this.temperature.length / 2){
        return true;
      }
      else{
        return false;
      }
     },

     // 6 
     /*
     leden: function(){
      for(let i = 0; i < this.temperature.length; i++){
        if(this.temperature[i] > 0){
          return false;
        }
      }
      return true
     } */
      /*
      leden: function (){
        let leden_dan = true;
        this.temperature.forEach(temp =>{
          if(temp > 0){
            leden_dan = false;
          }
        });
        return leden_dan;
      } */

      // III nacin
      leden: function(){
        let br_iznad_nule = 0;
        this.temperature.forEach(temp => {
          if(temp > 0){
            br_iznad_nule++
          }
        });
        if(br_iznad_nule == 0){
          return true;
        }
        else{
          return false;
        }
      }

};
console.log(dan.prosecna());
console.log(dan.brNatprosecnih()); 
console.log(dan.maxmerenja());
console.log(dan.toplo());
console.log(dan.leden());

