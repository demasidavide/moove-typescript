//importo tutte le classi
import { cittaServita } from "./classi/classeCitta.js";
import { mezzo } from "./classi/classeMezzo.js";
import { cliente } from "./classi/classeUtente.js";
//creazione mezzi di partenza
const bici1 = new mezzo("mountain-bike");
const bici2 = new mezzo("specialized");
const scooter1 = new mezzo("yamaha");
const scooter2 = new mezzo("honda");
const monopattino1 = new mezzo("ducati");
const monopattino2 = new mezzo("xiamoi");
//creazione utenti
const utente1 = new cliente('Milo', 'Bruno', 'milobruno@gmail.x', 'paypal');
const utente2 = new cliente('Carlo', 'Rossi', 'carlorossi@gmail.x', 'visa');
const utente3 = new cliente('Maria', 'Verdi', 'mariaverdi@gmail.x', 'googlepay');
//creazione citta
const milano = new cittaServita('Milano', [monopattino1]);
const biella = new cittaServita('Biella', [bici1]); //biella
//console.log(`La città selezionata per il servizio è: ${biella.nome}`);
stampaLista(biella);
stampaLista(milano);
//aggiungo tramite funzione due mezzi
biella.aggiungiMezzo(bici2);
biella.aggiungiMezzo(scooter2);
//aggiungo due volte lo stesso mezzo in città diverse per testare il controllo errore
milano.aggiungiMezzo(bici2); //elemento non salvato perche gia assegnato a riga28
//visualizzo lista mezzi aggiornata
stampaLista(biella);
stampaLista(milano);
//utenti diversi prendono un mezzo
addAssegna(bici1, utente2, biella);
addAssegna(bici2, utente3, biella);
//assegno mezzo gia assegnato per vedere errore
addAssegna(bici1, utente1, biella); //impossibile assegnare perche gia assegnato a riga39
//assegno ultimo mezzo presente nella città Milano e aggiorno lista per visualizzare "Nessun mezzo"
addAssegna(monopattino1, utente2, milano);
stampaLista(biella);
stampaLista(milano); //verrà visualizzato "Nessun mezzo disponibile"
//funzione stampa lista mezzi disponibili e controllo mezzi disponibili
function stampaLista(nomeCitta) {
    if (nomeCitta.mezziDisponibili.every(mezzo => mezzo.stato === false)) {
        console.log(`Nessun mezzo disponibile a ${nomeCitta.nome}`);
    }
    else {
        console.log(`I mezzi disponibili a ${nomeCitta.nome} sono:`);
        nomeCitta.mezziDisponibili.forEach(mezzo => {
            if (mezzo.stato) {
                console.log(mezzo.tipo, 'con ID:', mezzo.idMezzo);
            }
        });
    }
    ;
}
//function per aggregare i dati da stampare e controllo errori assegnazione
function addAssegna(nomeMezzo, nomeUtente, nomeCitta) {
    //controllo per vedere se assegnazione di un mezzo è gia avvenuta
    if (nomeMezzo.stato === false) {
        console.log(`ATTENZIONE ${nomeUtente.nome} ${nomeUtente.cognome} il mezzo ${nomeMezzo.tipo} con ID: ${nomeMezzo.idMezzo} nella città di ${nomeCitta.nome} gia assegnato e non disponibile`);
        return;
    }
    //altrimenti assegno il mezzo a utente e città
    nomeMezzo.assegnaUtente(nomeUtente);
    console.log(`Il mezzo ${nomeMezzo.tipo} con ID: ${nomeMezzo.idMezzo} è stato assegnato a ${nomeUtente.nome} ${nomeUtente.cognome} nella citta di ${nomeCitta.nome}`);
}
//# sourceMappingURL=index.js.map