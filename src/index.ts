//importo tutte le classi
import { cittaDisponibile } from "./classi/classeCitta.js";
import { bicicletta, monopattino, scooter } from "./classi/classeMezzi.js";
import { cliente } from "./classi/classeUtente.js";
import type { IMezzo } from "./interfacce/IMezzo.js";
import type { IUtente } from "./interfacce/IUtente.js";

//creazione mezzi
const bici1 = new bicicletta("mountain-bike", 1, true);
const bici2 = new bicicletta("mountain-bike", 2, false);
const moto1 = new scooter("booster", 3, false);
const moto2 = new scooter("cagiva", 4, true);
//creazione citta
let mezziDisponibili: IMezzo[] = [];
const citta1 = new cittaDisponibile("biella", [bici1, bici2]);
const citta2 = new cittaDisponibile("cossato", [moto1, moto2]);

citta1.mezziDisponibili.forEach((element) => {
  if (element.stato) {
    console.log(
      citta1.nome,
      "mezzo disponibile",
      element.tipo,
      element.idMezzo
    );
  } else {
    console.log(
      citta1.nome,
      "mezzo NON disponibile",
      element.tipo,
      element.idMezzo
    );
  }
});
citta2.mezziDisponibili.forEach((element) => {
  if (element.stato) {
    console.log(
      citta2.nome,
      "mezzo disponibile",
      element.tipo,
      element.idMezzo
    );
  } else {
    console.log(
      citta2.nome,
      "mezzo NON disponibile",
      element.tipo,
      element.idMezzo
    );
  }
});

//creazione utenti
const utente1 = new cliente(
  "mario",
  "rossi",
  "mariorossi@gmail.x",
  "googlepay"
);
const utente2 = new cliente("milo", "bruno", "milobruno@gmail.x", "paypal");

//inserisco un utente in array utenti
// let utenti : cliente[]=[];
// const utente1 = new cliente('Davide','DeMasi','dem@gmail.x','googlepay');
// utenti.push(utente1);
// console.log(utenti)

//funzione inserimento nuovo utente
// let nuovoUtente = new cliente('','','','')
// const addMezzo = document.getElementById('add-mezzi');
// if(addMezzo){
//     addMezzo.addEventListener('click',()=>{
//     nuovoUtente.aggiungiUtente('carlo','demasi','carlo@gmail.x','bancomat');
//     utenti.push(nuovoUtente)
//     console.log(utenti)
// })
// }else{
//     console.error('elemento html non trovato');
// }
