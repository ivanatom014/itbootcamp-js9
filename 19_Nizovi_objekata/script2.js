let student1 = {
    ime: "Dragan",
    prezime: "Petrovic",
    godStudija: 3,
    ocene: [9,8, 9, 8],
};
let student2 = {
    ime: "Milan",
    prezime: "Markovic",
    godStudija: 4,
    ocene: [10, 10, 9],
};
let student3 = {
    ime: "Milos",
    prezime: "Zarkovic",
    godStudija: 4,
    ocene: [8, 9, 7, 8, 9, 6, 6, 8, 7, 8, 9, 8, 7],
};
let student4 = {
    ime: "Mosa",
    prezime: "Aijade",
    godStudija: 4,
    ocene: [10,10,9],
};
let studenti = [student1, student2, student3, student4];


// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
let prosecnaOcena = ocene => {
    let sum = 0;
    ocene.forEach(o => {
        sum += o;
    });
    return sum / ocene.length;
}
let najStudent = studenti => {
    let naj = studenti[0]; // pretpostavka da je ovo najbolji student
    studenti.forEach(student => {
        if(prosecnaOcena(naj.ocene) < prosecnaOcena(student.ocene)) {
            naj = student;
        }
    });
    return `${naj.ime} ${naj.prezime}`;
}
console.log(najStudent(studenti));


// Zbir ocena f-ja

let sviNajStudenti = studenti => {
    let ime_najboljeg = "";
    let prezime_najboljeg = "";
    let prosek_najboljeg = -1;
    studenti.forEach( student => {
        let zbir = 0;
        student.ocene.forEach(ocena => {
            zbir += ocena;
        });
        let prosek = zbir / student.ocene.length;
        if(prosek > prosek_najboljeg) {
            prosek_najboljeg = prosek;
            ime_najboljeg = student.ime;
            prezime_najboljeg = student.prezime;
        }
    });
    return `${ime_najboljeg} ${prezime_najboljeg}`;
}



