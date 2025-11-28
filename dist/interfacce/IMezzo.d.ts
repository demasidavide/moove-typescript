import type { ICitta } from "./ICitta.js";
import type { IUtente } from "./IUtente.ts";
export interface IMezzo {
    tipo: string;
    idMezzo: number;
    stato: boolean;
    statoLetto: boolean;
    cittaAssegnata?: ICitta;
    assegnaUtente(utente: IUtente): void;
}
//# sourceMappingURL=IMezzo.d.ts.map