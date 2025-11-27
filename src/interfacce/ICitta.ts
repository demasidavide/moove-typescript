import type { IMezzo } from "./IMezzo.ts";

export interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  
  aggiungiMezzo(citta: string,mezzo: string): void;
}
