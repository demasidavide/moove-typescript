export class cliente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        mezzo.statoLetto = false;
    }
}
//# sourceMappingURL=classeUtente.js.map