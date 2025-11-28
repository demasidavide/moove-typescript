import type { ICitta } from "../interfacce/ICitta.js";
import type { IMezzo } from "../interfacce/IMezzo.js";
import type { IUtente } from "../interfacce/IUtente.js";
export declare function generaId(): number;
export declare class mezzo implements IMezzo {
    tipo: string;
    idMezzo: number;
    stato: boolean;
    disponibilita: string;
    cittaAssegnata?: ICitta;
    constructor(tipo: string);
    get statoLetto(): boolean;
    set statoLetto(nuovoStato: boolean);
    assegnaUtente(utente: IUtente): void;
}
//# sourceMappingURL=classeMezzo.d.ts.map