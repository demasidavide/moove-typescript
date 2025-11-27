import type { IUtente } from "./IUtente.ts";

export interface IMezzo {
  tipo:string;
  idMezzo: number;
  stato: boolean;
  statoLetto:boolean;
  assegnaUtente(utente:IUtente):void;
}
