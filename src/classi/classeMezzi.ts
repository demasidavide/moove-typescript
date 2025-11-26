import type { IMezzo } from "../interfacce/IMezzo.ts";
import type { IUtente } from "../interfacce/IUtente.ts";

export class bicicletta implements IMezzo {
  tipo: string;
  idMezzo: number;
  stato: boolean;
  numPasseggeri: number;

  constructor(tipo: string, idMezzo: number, stato: boolean) {
    this.idMezzo = idMezzo;
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

  constructor(tipo: string, idMezzo: number, stato: boolean) {
    this.idMezzo = idMezzo;
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

  constructor(tipo: string, idMezzo: number, stato: boolean) {
    this.idMezzo = idMezzo;
    this.tipo = tipo;
    this.stato = true;
    this.numPasseggeri = 2;
  }
  assegnaUtente(utente: IUtente): void {
    console.log(`this.tipo è assegnato a ${utente}`);
  }
}
