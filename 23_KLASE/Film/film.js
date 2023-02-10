class Film {
    #naslov;
    #reziser;
    #godinaIzdanja;
    #ocene;
    constructor(naslov, reziser, godinaIzdanja, ocene){
      this.naslov = naslov;
      this.reziser = reziser;
      this.godinaIzdanja = godinaIzdanja;
      this.ocene = ocene;
}

stampaj(){
    console.log(` Prikaz ${this.naslov}`);
}


prosek () {
    let sumaOcena = 0;
    this.ocene.forEach(ocena =>{
        sumaOcena += ocena;

    });
    return sumaOcena / this.ocene.length;
}


get naslov(){
    return this.#naslov
}

set naslov(n){
    if(n.length > 0){
        this.#naslov = n;
    }
    else{
        this.#naslov = "Film";
    }
}

get reziser(){
    return this.#reziser
}

set reziser(r){
    if(r.length > 0){
        this.#reziser = r;
    }
    else{
        this.#reziser = "John Doe";
    }
}

get godinaIzdanja(){
    return this.#godinaIzdanja;
}

set godinaIzdanja(g){
    if(g > 1800){
        this.#godinaIzdanja = g;
    }
    else{
        this.#godinaIzdanja = 1800;
    }
}


 get ocene(){
    return this.#ocene
 }

 set ocene(o){
   if(Array.isArray(o)){
    this.#ocene = o;
   }
   else{
    this.#ocene = [];
   }
 }



}


export {Film}