export class bicicletta {
    constructor(tipo, idMezzo, stato) {
        this.idMezzo = idMezzo;
        this.tipo = tipo;
        this.stato = true;
        this.numPasseggeri = 1;
    }
    assegnaUtente(utente) {
        console.log(`this.tipo è assegnato a ${utente}`);
    }
}
export class monopattino {
    constructor(tipo, idMezzo, stato) {
        this.idMezzo = idMezzo;
        this.tipo = tipo;
        this.stato = true;
        this.numPasseggeri = 1;
    }
    assegnaUtente(utente) {
        console.log(`this.tipo è assegnato a ${utente}`);
    }
}
export class scooter {
    constructor(tipo, idMezzo, stato) {
        this.idMezzo = idMezzo;
        this.tipo = tipo;
        this.stato = true;
        this.numPasseggeri = 2;
    }
    assegnaUtente(utente) {
        console.log(`this.tipo è assegnato a ${utente}`);
    }
}
//# sourceMappingURL=classeMezzi.js.map