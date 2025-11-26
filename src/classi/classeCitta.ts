import type { ICitta } from "../interfacce/ICitta.ts";
import type { IMezzo } from "../interfacce/IMezzo.ts";
import { bicicletta, monopattino, scooter } from "./classeMezzi.js";

export class cittaDisponibile implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string, mezziDisponibili: IMezzo[]) {
    this.nome = nome;
    this.mezziDisponibili = mezziDisponibili;
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    let newMezzo;
    if (mezzo.tipo === "bicicletta") {
      newMezzo = new bicicletta(mezzo.tipo, mezzo.idMezzo, mezzo.stato);
      this.mezziDisponibili.push(newMezzo);
      console.log("mezzo inserito:bicicletta");
      console.log(this.mezziDisponibili);
    }
    if (mezzo.tipo === "monopattino") {
      newMezzo = new monopattino(mezzo.tipo, mezzo.idMezzo, mezzo.stato);
      this.mezziDisponibili.push(newMezzo);
      console.log("mezzo inserito:monopattino");
      console.log(this.mezziDisponibili);
    }
    if (mezzo.tipo === "scooter") {
      newMezzo = new scooter(mezzo.tipo, mezzo.idMezzo, mezzo.stato);
      this.mezziDisponibili.push(newMezzo);
      console.log("mezzo inserito:scooter");
      console.log(this.mezziDisponibili);
    }
  }
}
