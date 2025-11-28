import { mezzo } from "./classeMezzo.js";
export class cittaServita {
    constructor(nome, mezziDisponibili) {
        this.nome = nome;
        this.mezziDisponibili = mezziDisponibili;
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log(`Il mezzo ${mezzo.tipo} è stato aggiunto alla città ${this.nome}`);
    }
}
//# sourceMappingURL=classeCitta.js.map