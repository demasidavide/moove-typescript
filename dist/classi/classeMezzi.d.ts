import type { IMezzo } from "../interfacce/IMezzo.ts";
import type { IUtente } from "../interfacce/IUtente.ts";
export declare class bicicletta implements IMezzo {
    tipo: string;
    idMezzo: number;
    stato: boolean;
    numPasseggeri: number;
    constructor(tipo: string, idMezzo: number, stato: boolean);
    assegnaUtente(utente: IUtente): void;
}
export declare class monopattino implements IMezzo {
    tipo: string;
    idMezzo: number;
    stato: boolean;
    numPasseggeri: number;
    constructor(tipo: string, idMezzo: number, stato: boolean);
    assegnaUtente(utente: IUtente): void;
}
export declare class scooter implements IMezzo {
    tipo: string;
    idMezzo: number;
    stato: boolean;
    numPasseggeri: number;
    constructor(tipo: string, idMezzo: number, stato: boolean);
    assegnaUtente(utente: IUtente): void;
}
//# sourceMappingURL=classeMezzi.d.ts.map