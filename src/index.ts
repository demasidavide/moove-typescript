//importo tutte le classi
import { cittaServita } from "./classi/classeCitta.js";
import { mezzo } from "./classi/classeMezzo.js";
import { cliente } from "./classi/classeUtente.js";
import type { ICitta } from "./interfacce/ICitta.js";

//creazione mezzi di partenza
const bici1 = new mezzo("mountain-bike");
//creazione utente
const utente = new cliente('Milo','Bruno','milobruno@gmail.x','paypal')
//creazione citta
const biella = new cittaServita([bici1]);//biella
console.log(`La città selezionata è: ${biella.nome}`);
stampaLista()
//aggiungo manualmente 2mezzi
addMezzo('graziella',biella)
addMezzo('monopattino',biella);
addMezzo('scooter',biella)
stampaLista()
//utente prende un mezzo
bici1.assegnaUtente(utente)
stampaLista()

//funzione per aggiungi mezzo
function addMezzo(nome:string,cittadest:ICitta){
  const nuovo = new mezzo(nome);
  cittadest.aggiungiMezzo(nuovo,nome)
}

//stampa lista mezzi disponibili per test
function stampaLista(){
   console.log('I mezzi disponibili sono:')
  biella.mezziDisponibili.forEach(mezzo=>{
  if(mezzo.stato){
    console.log(mezzo.tipo,mezzo.idMezzo)
  }
});
}







