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
    }
    assegnaUtente(utente) {
        console.log(`this.tipo è assegnato a ${utente}`);
    }
}
//# sourceMappingURL=classeMezzo.js.map