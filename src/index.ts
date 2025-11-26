//importo tutte le classi
import { cittaDisponibile } from "./classi/classeCitta.js";
import { bicicletta, monopattino, scooter } from "./classi/classeMezzi.js";
import { cliente } from "./classi/classeUtente.js";
import type { IUtente } from "./interfacce/IUtente.js";

//prova creazione classi esempio


//inserisco un utente in array utenti
let utenti : cliente[]=[];
const utente1 = new cliente('Davide','DeMasi','dem@gmail.x','googlepay');
utenti.push(utente1);
console.log(utenti)


//funzione inserimento nuovo utente
let nuovoUtente = new cliente('','','','')
const addMezzo = document.getElementById('add-mezzi');
if(addMezzo){
    addMezzo.addEventListener('click',()=>{
    nuovoUtente.aggiungiUtente('carlo','demasi','carlo@gmail.x','bancomat');
    utenti.push(nuovoUtente)
    console.log(utenti)
})
}else{
    console.error('elemento html non trovato');
}