import { Auto} from "./auto.js";


let a1 = new Auto("Audi", "bela", true);
console.log(a1);
console.log(a1._marka); // "Audi"
console.log(a1.marka); // undefined

let a2 = new Auto("Opel", "crvena", true);
console.log(a2);

// Klasa - sablon, korisnicki tip
// Objekat - instance (realizacija) klase = promenjiva neke klase

a1.sviraj();
a2.sviraj();

a1._marka = "Skoda";
console.log(a1);

a1._marka = "";
console.log(a1);

a1.marka = "Peugeot"; // U pozadini ovde se poziva metoda
console.log(a1);

a1.marka = "";
a1.boja = "zuta";
a1.imaKrov = false;
console.log(a1);
console.log(a1.marka + " " + a1.boja + " " + a1.imaKrov); // cita getere

let a3 = new Auto("", "", 0);
console.log(a3);





