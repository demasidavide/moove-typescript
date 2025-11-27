import type { IMezzo } from "../interfacce/IMezzo.js";
import type { IUtente } from "../interfacce/IUtente.js";

//funzione per id autoincrement-----------
let ultimoId = 0;
export function generaId(): number {
  ultimoId++;
  return ultimoId;
}
//-----------------------------------------

export class mezzo implements IMezzo {
  tipo: string;
  idMezzo: number;
  stato: boolean;

  constructor(tipo: string) {
    this.idMezzo = generaId();
    this.tipo = tipo;
    this.stato = true;
  }
  assegnaUtente(utente: IUtente): void {
    console.log(`this.tipo è assegnato a ${utente}`);
  }
}


