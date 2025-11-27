//importo tutte le classi
import { cittaServita } from "./classi/classeCitta.js";
import { mezzo } from "./classi/classeMezzo.js";
import { cliente } from "./classi/classeUtente.js";
import type { IMezzo } from "./interfacce/IMezzo.js";
import type { IUtente } from "./interfacce/IUtente.js";
import type { ICitta } from "./interfacce/ICitta.js";

//creazione mezzi
const bici1 = new mezzo("mountain-bike");
const bici2 = new mezzo("bici-graziella");
const moto1 = new mezzo("booster");
const moto2 = new mezzo("cagiva");
const listaMezzi: IMezzo[] = [bici1,bici2,moto1,moto2];

//creazione citta
const citta = new cittaServita([bici1, bici2,moto2]);//biella
console.log(`La città selezionata è: ${citta.nome}`);
stampaLista()

//creazione utente
const utente = new cliente('Milo','Bruno','milobruno@gmail.x','paypal')
//utente prende un mezzo
//utente.prenotaMezzo(bici2)
bici2.assegnaUtente(utente)
//console.log(` il mezzo ${bici2.tipo} ora è ${bici2.disponibilita}`)
stampaLista();




//stampa lista mezzi disponibili per test
function stampaLista(){
   console.log('I mezzi disponibili sono:')
  listaMezzi.forEach(mezzo=>{
  if(mezzo.stato){
    console.log(mezzo.tipo,mezzo.idMezzo)
  }
});
}






//const citta2 = new cittaDisponibile("cossato", [moto1, moto2]);
//let cittaDisponibili: ICitta[] = [citta1, citta2];

// const listaCitta = cittaDisponibili.map(citta => citta.nome).join(', ');
// const listaMezzi = mezziDisponibili.map(mezzo => mezzo.tipo).join(', ');

//funzione aggiungi mezzo con bottone simulato
// const addMezzo = document.getElementById('add-mezzi');
// if(addMezzo){
//     addMezzo.addEventListener('click',()=>{
//       let valoreCitta = prompt(`In quale città: ${listaCitta}`) ?? 'milano';
//       let valoreTipo = prompt(`scegli un mezzo da inserire: ${listaMezzi} `) ?? bicicletta
//     citta1.aggiungiMezzo(valoreCitta,valoreTipo);
//     mezziDisponibili.push()
//     console.log(valoreTipo ,'aggiunta in ',valoreCitta)
// })
// }else{
//     console.error('problema come sempre');
// }

//stampa elementi disponibili o no
// citta1.mezziDisponibili.forEach((element) => {
//   if (element.stato) {
//     console.log(
//       citta1.nome,
//       "mezzo disponibile",
//       element.tipo,
//       element.idMezzo
//     );
//   } else {
//     console.log(
//       citta1.nome,
//       "mezzo NON disponibile",
//       element.tipo,
//       element.idMezzo
//     );
//   }
// });
// citta2.mezziDisponibili.forEach((element) => {
//   if (element.stato) {
//     console.log(
//       citta2.nome,
//       "mezzo disponibile",
//       element.tipo,
//       element.idMezzo
//     );
//   } else {
//     console.log(
//       citta2.nome,
//       "mezzo NON disponibile",
//       element.tipo,
//       element.idMezzo
//     );
//   }
// });

//creazione utenti
// const utente1 = new cliente(
//   "mario",
//   "rossi",
//   "mariorossi@gmail.x",
//   "googlepay"
// );
// const utente2 = new cliente("milo", "bruno", "milobruno@gmail.x", "paypal");

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
