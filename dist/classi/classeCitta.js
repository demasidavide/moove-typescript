import { mezzo } from "./classeMezzo.js";
export class cittaServita {
    constructor(mezziDisponibili) {
        this.nome = 'Biella';
        this.mezziDisponibili = mezziDisponibili;
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log(`Il mezzo ${mezzo.tipo} è stato aggiunto alla città ${this.nome}`);
    }
}
//# sourceMappingURL=classeCitta.js.map