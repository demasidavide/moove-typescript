export class cliente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        mezzo.statoLetto = false;
        console.log(`Utente ${this.nome} ha prenotato ${mezzo.tipo}`);
    }
}
//# sourceMappingURL=classeUtente.js.map