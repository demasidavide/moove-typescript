export class cliente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        console.log(`Utente ${this.nome} ha prenotato ${mezzo.tipo}`);
    }
    aggiungiUtente(nome, cognome, email, metodoPagamento) {
        new cliente(this.nome = nome, this.cognome = cognome, this.email = email, this.metodoPagamento = metodoPagamento);
    }
}
//# sourceMappingURL=classeUtente.js.map