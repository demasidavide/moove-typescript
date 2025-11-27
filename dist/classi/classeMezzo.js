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
        console.log(`this.tipo è assegnato a ${utente}`);
    }
}
//# sourceMappingURL=classeMezzo.js.map