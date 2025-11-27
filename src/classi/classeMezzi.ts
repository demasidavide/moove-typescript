import type { IMezzo } from "../interfacce/IMezzo.ts";
import type { IUtente } from "../interfacce/IUtente.ts";

let ultimoId =0;

export function generaId(): number{
    ultimoId ++;
    return ultimoId;
}

export class bicicletta implements IMezzo {
  static ultimoId : number=0
  tipo: string;
  idMezzo: number;
  stato: boolean;
  numPasseggeri: number;

  constructor(tipo: string) {
    this.idMezzo = generaId();
    this.tipo = tipo;
    this.stato = true;
    this.numPasseggeri = 1;
  }
  assegnaUtente(utente: IUtente): void {
    console.log(`this.tipo è assegnato a ${utente}`);
  }
}

export class monopattino implements IMezzo {
  tipo: string;
  idMezzo: number;
  stato: boolean;
  numPasseggeri: number;

  constructor(tipo: string) {
    this.idMezzo = generaId();
    this.tipo = tipo;
    this.stato = true;
    this.numPasseggeri = 1;
  }
  assegnaUtente(utente: IUtente): void {
    console.log(`this.tipo è assegnato a ${utente}`);
  }
}

export class scooter implements IMezzo {
  tipo: string;
  idMezzo: number;
  stato: boolean;
  numPasseggeri: number;

  constructor(tipo: string) {
    this.idMezzo = generaId();
    this.tipo = tipo;
    this.stato = true;
    this.numPasseggeri = 2;
  }
  assegnaUtente(utente: IUtente): void {
    console.log(`this.tipo è assegnato a ${utente}`);
  }
}
