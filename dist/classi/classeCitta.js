import { bicicletta, monopattino, scooter } from "./classeMezzo.js";
export class cittaServita {
    constructor(mezziDisponibili) {
        this.nome = 'Biella';
        this.mezziDisponibili = mezziDisponibili;
    }
    aggiungiMezzo(mezzo) {
        let newMezzo;
        if (mezzo.tipo === "bicicletta") {
            newMezzo = new bicicletta(mezzo.tipo);
            this.mezziDisponibili.push(newMezzo);
            console.log("mezzo inserito:bicicletta");
            console.log(this.mezziDisponibili);
        }
        if (mezzo.tipo === "monopattino") {
            newMezzo = new monopattino(mezzo.tipo);
            this.mezziDisponibili.push(newMezzo);
            console.log("mezzo inserito:monopattino");
            console.log(this.mezziDisponibili);
        }
        if (mezzo.tipo === "scooter") {
            newMezzo = new scooter(mezzo.tipo);
            this.mezziDisponibili.push(newMezzo);
            console.log("mezzo inserito:scooter");
            console.log(this.mezziDisponibili);
        }
    }
}
//# sourceMappingURL=classeCitta.js.map