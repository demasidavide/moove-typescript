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

  aggiungiMezzo(mezzo:IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    console.log(`Il mezzo ${mezzo.tipo} è stato aggiunto alla città ${this.nome}`)
  }
}
