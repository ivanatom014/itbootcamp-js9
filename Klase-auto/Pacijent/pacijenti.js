export class Pacijent{
    #ime;
    #visina;
    #tezina
    constructor(ime, visina, tezina){
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }
    get ime(){
        return this.#ime;
    }
    set ime(i){
        if(i.length > 0){
            this.#ime = i;
        }
        else[
            this.#ime = "Niste uneli ime"
        ]
    }

    get visina(){
        return this.#visina;
    }

    set visina(v){
        if(v > 0 && v < 250){
            this.#visina = v;
        }
        else{
            this.#visina = "Nije uneta odgovarajuca visina";
        }
    }

    get tezina(){
        return this.#tezina;
    }
    set tezina(t){  
        if(t > 0 && t < 550){
            this.#tezina = t;
        }
        else{
            this.#tezina = "Nije uneta odgovarajuca tezina"
        }
        
    }

    stampaj(){
        console.log(this);
    }

    stampajListu(){
        let htmlLista =
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>`;
        return htmlLista;
    }

    bmi(){
        let bmivrednost = this.#tezina / ((this.#visina/100) * (this.#visina/100));
        return bmivrednost;
    }

    kritican(){
        if(this.bmi() < 15 || this.bmi() > 40){
            return true;
        }
        else{
            return false;
        }
    }


}


