import type { ICitta } from "./ICitta.js";
import type { IUtente } from "./IUtente.ts";

export interface IMezzo {
  tipo:string;
  idMezzo: number;
  stato: boolean;
  statoLetto:boolean;
  cittaAssegnata?: ICitta//aggiunta per assegnare città a mezzo ed evitare assegnazioni doppie
  
  assegnaUtente(utente:IUtente):void;
}
