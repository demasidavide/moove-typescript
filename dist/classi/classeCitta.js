import { mezzo } from "./classeMezzo.js";
export class cittaServita {
    constructor(nome, mezziDisponibili) {
        this.nome = nome;
        this.mezziDisponibili = mezziDisponibili;
    }
    aggiungiMezzo(mezzo) {
        if (mezzo.cittaAssegnata) {
            console.log(`ERRORE: il mezzo ${mezzo.tipo} con ID: ${mezzo.idMezzo} è gia stato assegnato alla città ${mezzo.cittaAssegnata.nome}`);
            return;
        }
        else {
            this.mezziDisponibili.push(mezzo);
            mezzo.cittaAssegnata = this;
            console.log(`Il mezzo ${mezzo.tipo} è stato aggiunto alla città ${this.nome}`);
        }
    }
}
//# sourceMappingURL=classeCitta.js.map