import type { IMezzo } from "../interfacce/IMezzo.ts";
import type { IUtente } from "../interfacce/IUtente.ts";
export declare class cliente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    constructor(nome: string, cognome: string, email: string, metodoPagamento: string);
    prenotaMezzo(mezzo: IMezzo): void;
    aggiungiUtente(nome: string, cognome: string, email: string, metodoPagamento: string): void;
}
//# sourceMappingURL=classeUtente.d.ts.map