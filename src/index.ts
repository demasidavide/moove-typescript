//----------------------GUIDA------------------------
//La pagina eseguirà le seguenti funzioni in ordine: 
/** 1.Verra stampata la lista dei mezzi disponibili in due città Milano e Biella 
    2.Verranno aggiunti due mezzi in città diverse. Ogni mezzo ha ID univoco autoincrement
    3.Proverò ad assegnare lo stesso mezzo a due città diverse, generando messaggio di errore e non  salvataggio.
    4.Assegno due mezzi a utenti diversi
    5.Proverò ad assegnare lo stesso mezzo a due utenti generando messaggio errore e impossibilità di
      prenotare il mezzo
    6.Riepilogo lista mezzi disponibili. Milano visualizzerà "Nessun mezzo disponibile"*/

//importo tutte le classi
import { cittaServita } from "./classi/classeCitta.js";
import { mezzo } from "./classi/classeMezzo.js";
import { cliente } from "./classi/classeUtente.js";
import type { ICitta } from "./interfacce/ICitta.js";
import type { IMezzo } from "./interfacce/IMezzo.js";
import type { IUtente } from "./interfacce/IUtente.js";

//creazione mezzi di partenza
const bici1 = new mezzo("mountain-bike");
const bici2 = new mezzo("specialized");
const scooter1 = new mezzo("yamaha");
const scooter2 = new mezzo("honda");
const monopattino1 = new mezzo("ducati")
const monopattino2 = new mezzo("xiamoi")
//creazione utenti
const utente1 = new cliente('Milo','Bruno','milobruno@gmail.x','paypal')
const utente2 = new cliente('Carlo','Rossi','carlorossi@gmail.x','visa')
const utente3 = new cliente('Maria','Verdi','mariaverdi@gmail.x','googlepay')
//creazione citta
const milano = new cittaServita('Milano',[monopattino1]);//milano
const biella = new cittaServita('Biella',[bici1]);//biella
//stampo lista mezzi disponibili
stampaLista(biella)
stampaLista(milano)

//aggiungo tramite funzione due mezzi
biella.aggiungiMezzo(bici2)
biella.aggiungiMezzo(scooter2)

//aggiungo due volte lo stesso mezzo in città diverse per testare il controllo errore
milano.aggiungiMezzo(bici2)//elemento non salvato perche gia assegnato a riga28

//visualizzo lista mezzi aggiornata
stampaLista(biella)
stampaLista(milano)

//utenti diversi prendono un mezzo
addAssegna(bici1,utente2,biella)
addAssegna(bici2,utente3,biella)

//assegno mezzo gia assegnato per vedere errore
addAssegna(bici1,utente1,biella)//impossibile assegnare perche gia assegnato a riga39

//assegno ultimo mezzo presente nella città Milano e aggiorno lista per visualizzare "Nessun mezzo"
addAssegna(monopattino1,utente2,milano)
stampaLista(biella)
stampaLista(milano)//verrà visualizzato "Nessun mezzo disponibile"

//funzione stampa lista mezzi disponibili e controllo mezzi disponibili
function stampaLista(nomeCitta:ICitta){
  if(nomeCitta.mezziDisponibili.every(mezzo=>mezzo.stato === false)){
    console.log(`Nessun mezzo disponibile a ${nomeCitta.nome}`)
  }else{
   console.log(`I mezzi disponibili a ${nomeCitta.nome} sono:`)
  nomeCitta.mezziDisponibili.forEach(mezzo=>{
  if(mezzo.stato){
    console.log(mezzo.tipo, 'con ID:',mezzo.idMezzo)
  }
})};
}

//function per aggregare i dati da stampare e controllo errori assegnazione
function addAssegna(nomeMezzo:IMezzo,nomeUtente:IUtente,nomeCitta:ICitta){
  //controllo per vedere se assegnazione di un mezzo è gia avvenuta
  if(nomeMezzo.stato === false){
    console.log(`ATTENZIONE ${nomeUtente.nome} ${nomeUtente.cognome} il mezzo ${nomeMezzo.tipo} con ID: ${nomeMezzo.idMezzo} nella città di ${nomeCitta.nome} è gia stato assegnato e non è più disponibile`)
    return;
  }
  //altrimenti assegno il mezzo a utente e città
  nomeMezzo.assegnaUtente(nomeUtente);
  console.log(`Il mezzo ${nomeMezzo.tipo} con ID: ${nomeMezzo.idMezzo} è stato assegnato a ${nomeUtente.nome} ${nomeUtente.cognome} nella citta di ${nomeCitta.nome}`)
}






