import type { IMezzo } from "../interfacce/IMezzo.ts";
import type { IUtente } from "../interfacce/IUtente.ts";

export class cliente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    console.log(`Utente ${this.nome} ha prenotato ${mezzo.tipo}`);
  }  
  // aggiungiUtente(nome:string, cognome:string, email:string, metodoPagamento:string):void{
  //   new cliente(this.nome=nome,this.cognome = cognome,this.email = email,this.metodoPagamento = metodoPagamento)
  // }
}
