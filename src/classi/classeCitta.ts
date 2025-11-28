import type { ICitta } from "../interfacce/ICitta.ts";
import type { IMezzo } from "../interfacce/IMezzo.ts";
import { mezzo } from "./classeMezzo.js";

export class cittaServita implements ICitta {
  nome:string;
  mezziDisponibili: IMezzo[];

  constructor(nome:string,mezziDisponibili: IMezzo[]) {
    this.nome = nome;
    this.mezziDisponibili = mezziDisponibili;
  }

  aggiungiMezzo(mezzo:IMezzo): void {
    //controllo se il mezzo è gia stato assegnato e nel caso evito il salvataggio
    if(mezzo.cittaAssegnata){
      console.log(`ERRORE: il mezzo ${mezzo.tipo} con ID: ${mezzo.idMezzo} è gia stato assegnato alla città ${mezzo.cittaAssegnata.nome}`)
      return;
    }else{
    this.mezziDisponibili.push(mezzo);
    mezzo.cittaAssegnata = this;
    console.log(`Il mezzo ${mezzo.tipo} con ID: ${mezzo.idMezzo} è stato aggiunto alla città ${this.nome}`)
  }}
}
