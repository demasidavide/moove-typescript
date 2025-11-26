import type { ICitta } from "../interfacce/ICitta.ts";
import type { IMezzo } from "../interfacce/IMezzo.ts";
export declare class cittaDisponibile implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];
    constructor(nome: string, mezziDisponibili: IMezzo[]);
    aggiungiMezzo(mezzo: IMezzo): void;
}
//# sourceMappingURL=classeCitta.d.ts.map