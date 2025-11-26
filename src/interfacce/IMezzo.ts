import type { IUtente } from "./IUtente.ts";

export interface IMezzo {
  tipo:string;
  idMezzo: number;
  stato: boolean;
  numPasseggeri: number;

  assegnaUtente(utente:IUtente):void;
}
