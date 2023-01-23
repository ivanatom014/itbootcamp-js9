import { Film} from "./film.js";



let f1 = new Film ("CinemaParadiso", "Tornatore", "1984", [10, 10, 9]);

let f2 = new Film("Avatar","Cameron", "2003", [7, 10, 6, ]);

let f3 = new Film("", "","2011", [7, 10, 5]);

f1.stampaj();
f2.stampaj();
f3.stampaj();
console.log(f3.ocene)

let filmovi = [f1, f2, f3];

console.log(`Prosecna ocena ${f1.naslov} filma je: ${f1.prosek()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilmova = (niz, vek) =>{
    // 19.vek
    // 1801 - 1900
   let pocetnaGod = vek * 100 - 99;
   let krajnjaGod = vek * 100;


   niz.forEach(film =>{
    if(film.godinaIzdanja >= pocetnaGod && film.godinaIzdanja <= krajnjaGod){
        console.log(film.naslov);
    }
   })
}

vekFilmova(filmovi, 21);


/// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova

let prosecnaOcena = niz =>{
    let Ukupnasuma = 0;
    let br = 0;
    niz.forEach(f =>{
        f.ocene.forEach(ocene =>{
            Ukupnasuma += ocene
            br++; 
        })
    })
   // br += f.ocene.length; 
    return Ukupnasuma / br;
    
}

console.log(prosecnaOcena(filmovi));

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
let najboljeOcenjeni = (niz) => {
    let naj = niz[0];
    niz.forEach((f) => {
      if (naj.prosek() < f.prosek()) {
        naj = f;
      }
    });
    return naj;
  };
  console.log(najboljeOcenjeni(filmovi));



//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = niz =>{
    let avgSvihFilmova = prosecnaOcena(niz); // prosecna ocena svih filmova

    // avg svih filmova je npr 7
    // neki ima ocenu 6.5 - 7 = -0.5
    // neki 6.6 - 7 = - 0.4
    // neki 7.1 = 0.1
    let minFilm = niz[0]; // pretpostavka za film najblizi proseku
let minRastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());


niz.forEach(f =>{
     let rastojanje = Math.abs(avgSvihFilmova - f.prosek()) // koliko se razlikuje prosecna ocena svih filmova od prosecne ocene posmatranog filma
    if(minRastojanje > rastojanje){

     minRastojanje = rastojanje;
     minFilm = f;
    }
})

return minFilm;

}

console.log(osrednjiFilm(filmovi)); 


// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.


let najmanjaOcenaNajboljeg = niz =>{
    let najFilm = najboljeOcenjeni(niz);
    let najslabijaOcena = najFilm.ocene[0];
    najFilm.ocene.forEach(o=>{
        if(najslabijaOcena > o){
            najslabijaOcena = o;
        }
    });
 console.log(najslabijaOcena);
}

najmanjaOcenaNajboljeg(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio


let najmanjaOcena = niz =>{
    // Ovo mozemo da razlozimo
    /*
    let prviObjekat = niz[0]; // Ovo je objekat
    let nizOcenaPrvogObjekta = prviObjekat.ocene; // ovo je niz ocena selektovanog objekta
    let najmanja = nizOcenaPrvogObjekta[0]; // ovo je prva ocena iz niza ocena */

    let najmanja = niz[0].ocene[0];
    niz.forEach(film =>{
        film.ocene.forEach(o =>{
            if(o < najmanja){
                najmanja = o;
            }
        });
    });
    return najmanja;

}

console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

let sveOcene = niz =>{
 let arrSveOcene = [];
 niz.forEach(film =>{
   // arrSveOcene.push(film.ocene); // Daje niz u kome su ocene za svaki od filmova podnizovi (vise niszova u jednom velikom nizu)
   arrSveOcene = arrSveOcene.concat(film.ocene); // nema nizova, samo jedan veliki niz sa svim ocenama
 });
 return arrSveOcene;
 // arrSveOcene.push(f1.ocene);
//  arrSveOcene = arrSveOcene.concat(f1.ocene);
}

console.log(sveOcene(filmovi));

let najcescaOcena = nizOcena =>{
    let pretpostavkaNajucestalijiElem = nizOcena[0];
    let brPojavljivanjaPretpostavke = 1 // sigurno se jednom pojavila
    for(let i =0 ; i <nizOcena.length;i++){
        let tekuci = nizOcena[i] // zvezdica
        let tekuciBrPojavljivanja = 0;

        for(let j = 0; j <nizOcena.length;j++){
            if(tekuci == nizOcena[j]){
             tekuciBrPojavljivanja++   // nasli smo isti element i treba povecati broj pojavljivanja tekuceg

            }
        }

     if(tekuciBrPojavljivanja > brPojavljivanjaPretpostavke){
        brPojavljivanjaPretpostavke = tekuciBrPojavljivanja;
        pretpostavkaNajucestalijiElem = tekuci;
     }

    }
    return pretpostavkaNajucestalijiElem;
}

let nizSvihOcena = sveOcene(filmovi);
console.log(najcescaOcena(nizSvihOcena))


// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (ocena, filmovi) =>{
  let nizFilmova = [];
  filmovi.forEach(film =>{
    if(film.prosek() > ocena){
        nizFilmova.push(film);
    }
  });
  return nizFilmova;

}

console.log(f1.prosek(), f2.prosek(),f3.prosek());
console.log(iznadOcene(8.35,filmovi));


// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (ocena, filmovi) =>{
let nizFilmova = iznadOcene(ocena, filmovi);
let noviji = nizFilmova[0];
nizFilmova.forEach(f => {
    if(f.godinaIzdanja > noviji.godinaIzdanja){
        noviji = f;
    }
});

console.log(noviji);
}
iznadOceneNoviji(8, filmovi);

