import type { IMezzo } from "./IMezzo.ts";

export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  prenotaMezzo(mezzo: IMezzo): void;
  aggiungiUtente(nome:string,cognome:string,email:string,metodoPagamento:string):void;
}
