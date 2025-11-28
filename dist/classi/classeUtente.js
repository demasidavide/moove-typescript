export class cliente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        //assegna false per renderlo nonn piu disponibile
        mezzo.statoLetto = false;
    }
}
//# sourceMappingURL=classeUtente.js.map