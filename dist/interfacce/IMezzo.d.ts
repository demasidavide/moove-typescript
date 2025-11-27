import type { IUtente } from "./IUtente.ts";
export interface IMezzo {
    tipo: string;
    idMezzo: number;
    stato: boolean;
    assegnaUtente(utente: IUtente): void;
}
//# sourceMappingURL=IMezzo.d.ts.map