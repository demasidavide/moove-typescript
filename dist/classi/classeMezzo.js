//funzione per id autoincrement univoco-----------
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
        //passa a classeUtente che setta a false il mezzo e lo toglie dai mezzi disponibili
        utente.prenotaMezzo(this);
    }
}
//# sourceMappingURL=classeMezzo.js.map