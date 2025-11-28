import type { ICitta } from "../interfacce/ICitta.js";
import type { IMezzo } from "../interfacce/IMezzo.js";
import type { IUtente } from "../interfacce/IUtente.js";

//funzione per id autoincrement univoco-----------
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
  disponibilita: string;
  cittaAssegnata?: ICitta;//aggiunta per assegnare città a mezzo ed evitare assegnazioni doppie

  constructor(tipo: string) {
    this.idMezzo = generaId();
    this.tipo = tipo;
    this.stato = true;
    this.disponibilita = this.stato ? 'disponibile' : 'non disponibile';
  }

  get statoLetto():boolean{
    return this.stato
  }

  set statoLetto(nuovoStato:boolean){
    this.stato = nuovoStato;
     this.disponibilita = nuovoStato ? "disponibile" : "Non disponibile";
    }

  assegnaUtente(utente: IUtente): void {
    //passa a classeUtente che setta a false il mezzo e lo toglie dai mezzi disponibili
        utente.prenotaMezzo(this)
  }
}
