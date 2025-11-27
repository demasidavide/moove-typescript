import type { ICitta } from "../interfacce/ICitta.ts";
import type { IMezzo } from "../interfacce/IMezzo.ts";
import { mezzo } from "./classeMezzo.js";

export class cittaServita implements ICitta {
  nome:string;
  mezziDisponibili: IMezzo[];

  constructor(mezziDisponibili: IMezzo[]) {
    this.nome = 'Biella';
    this.mezziDisponibili = mezziDisponibili;
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    // let newMezzo;
    // if (mezzo.tipo === "bicicletta") {
    //   newMezzo = new bicicletta(mezzo.tipo);
    //   this.mezziDisponibili.push(newMezzo);
    //   console.log("mezzo inserito:bicicletta");
    //   console.log(this.mezziDisponibili);
    // }
    // if (mezzo.tipo === "monopattino") {
    //   newMezzo = new monopattino(mezzo.tipo);
    //   this.mezziDisponibili.push(newMezzo);
    //   console.log("mezzo inserito:monopattino");
    //   console.log(this.mezziDisponibili);
    // }
    // if (mezzo.tipo === "scooter") {
    //   newMezzo = new scooter(mezzo.tipo);
    //   this.mezziDisponibili.push(newMezzo);
    //   console.log("mezzo inserito:scooter");
    //   console.log(this.mezziDisponibili);
    // }
  }
}
