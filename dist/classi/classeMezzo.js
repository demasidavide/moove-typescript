//funzione per id autoincrement-----------
let ultimoId = 0;
export function generaId() {
    ultimoId++;
    return ultimoId;
}
//-----------------------------------------
export class mezzo {
    constructor(tipo) {
        this.idMezzo = generaId();
        this.tipo = tipo;
        this.stato = true;
        this.disponibilita = this.stato ? 'disponibile' : 'non disponibile';
    }
    get statoLetto() {
        return this.stato;
    }
    set statoLetto(nuovoStato) {
        this.stato = nuovoStato;
        this.disponibilita = nuovoStato ? "disponibile" : "Non disponibile";
    }
    assegnaUtente(utente) {
        utente.prenotaMezzo(this);
        console.log(`Il mezzo ${this.tipo} è stato assegnato a ${utente.nome} ${utente.cognome}`);
    }
}
//# sourceMappingURL=classeMezzo.js.map