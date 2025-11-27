import type { IMezzo } from "../interfacce/IMezzo.js";
import type { IUtente } from "../interfacce/IUtente.js";
export declare function generaId(): number;
export declare class mezzo implements IMezzo {
    tipo: string;
    idMezzo: number;
    stato: boolean;
    constructor(tipo: string);
    assegnaUtente(utente: IUtente): void;
}
//# sourceMappingURL=classeMezzo.d.ts.map