# Moove - Mobility Sharing Platform

> Logica per la gestione di veicoli urbani condivisi, sviluppato come progetto educativo per dimostrare l'implementazione di funzioni in TypeScript.

## 📖 Indice

- [Panoramica](#panoramica)
- [Funzionalità](#funzionalità)
- [Prerequisiti](#prerequisiti)
- [Installazione](#installazione)
- [Struttura del Progetto](#struttura-del-progetto)
- [Testing](#testing)
- [Autore](#autore)

## Panoramica

Questo progetto simula la logica di funzionamento di una startup di sharing mobility, dove gli utenti possono noleggiare diversi tipi di veicoli disponibili in città. Il sistema gestisce la disponibilità dei veicoli nelle città, il loro inserimento e le prenotazioni degli utenti.

### Obiettivi del progetto

- Dimostrare l'uso di TypeScript per costruire applicazioni scalabili
- Implementare i software piu comuni (Github, CodePen)
- Praticare la programmazione orientata agli oggetti
- Scrivere codice pulito, manutenibile e testabile

## Funzionalità

### Gestione Veicoli

- Registrazione di nuovi veicoli nel sistema
- Assegnazione veicoli alle città
- Monitoraggio stato (disponibile, in uso)

### Sistema di Prenotazione

- Validazione disponibilità
- Gestione conflitti di prenotazione

## Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** (v16.0.0 o superiore) - [Download](https://nodejs.org/)
- **npm** (v7.0.0 o superiore) - Incluso con Node.js
- **Git** - [Download](https://git-scm.com/)
- Un editor di codice (consigliato: [VS Code](https://code.visualstudio.com/))

### Verifica installazione

```bash
node --version  # Deve mostrare v16.0.0 o superiore
npm --version   # Deve mostrare v7.0.0 o superiore
git --version
```

## Installazione

### 1. Clona il repository

```bash
git clone https://github.com/demasidavide/moove-typescript.git
```

### 2. Installa le dipendenze

```bash
npm install
```

Questo installerà tutte le dipendenze necessarie definite nel `package.json`.

### Esempi di codice

#### Esempio 1: Stampare lista veicoli per città

```typescript
import { cittaServita } from "./classi/classeCitta.js";
import { mezzo } from "./classi/classeMezzo.js";
import type { ICitta } from "./interfacce/ICitta.js";
import type { IMezzo } from "./interfacce/IMezzo.js";

//funzione stampa lista mezzi disponibili e controllo mezzi disponibili
function stampaLista(nomeCitta: ICitta) {
  if (nomeCitta.mezziDisponibili.every((mezzo) => mezzo.stato === false)) {
    console.log(`Nessun mezzo disponibile a ${nomeCitta.nome}`);
  } else {
    console.log(`I mezzi disponibili a ${nomeCitta.nome} sono:`);
    nomeCitta.mezziDisponibili.forEach((mezzo) => {
      if (mezzo.stato) {
        console.log(mezzo.tipo, "con ID:", mezzo.idMezzo);
      }
    });
  }
}
stampaLista(milano);
```

#### Esempio 2: Prenotare un mezzo e assegnarlo a un utente

```typescript
function addAssegna(nomeMezzo: IMezzo, nomeUtente: IUtente, nomeCitta: ICitta) {
  //controllo per vedere se assegnazione di un mezzo è gia avvenuta
  if (nomeMezzo.stato === false) {
    console.log(
      `ATTENZIONE ${nomeUtente.nome} ${nomeUtente.cognome} il mezzo ${nomeMezzo.tipo} con ID: ${nomeMezzo.idMezzo} nella città di ${nomeCitta.nome} è gia stato assegnato e non è più disponibile`
    );
    return;
  }
  //altrimenti assegno il mezzo a utente e città
  nomeMezzo.assegnaUtente(nomeUtente);
  console.log(
    `Il mezzo ${nomeMezzo.tipo} con ID: ${nomeMezzo.idMezzo} è stato assegnato a ${nomeUtente.nome} ${nomeUtente.cognome} nella citta di ${nomeCitta.nome}`
  );
}
addAssegna(monopattino1, utente2, milano);
```

## Struttura del Progetto

```
moove-typescript/
│
├── src/
│   ├── classi/
│   │   ├── classeCitta.ts
│   │   ├── classeMezzo.ts
│   │   └── classeUtente.ts
│   ├── interfacce/
│   │   ├── ICitta.ts
│   │   ├── IMezzo.ts
│   │   └── IUtente.ts
│   │
│   └── index.ts
├──tsconfig.json
└──README.md
```

### Struttura dei test

```
La pagina eseguirà le seguenti funzioni in ordine:
    1.Verra stampata la lista dei mezzi disponibili in due città Milano e Biella
    2.Verranno aggiunti due mezzi in città diverse. Ogni mezzo ha ID univoco autoincrement
    3.Proverò ad assegnare lo stesso mezzo a due città diverse, generando messaggio di errore e non  salvataggio.
    4.Assegno due mezzi a utenti diversi
    5.Proverò ad assegnare lo stesso mezzo a due utenti generando messaggio errore e impossibilità di
      prenotare il mezzo
    6.Riepilogo lista mezzi disponibili. Milano visualizzerà "Nessun mezzo disponibile"
```

## Testing

Puoi testare il progetto qui:

-CodePen: (https://codepen.io/demasidavide/pen/bNpMjQx?editors=1011)

## Autore

**[Davide De Masi ]**

- GitHub: [demasidavide](https://github.com/demasidavide)
- LinkedIn: [Davide De Masi](https://linkedin.com/in/davide-d-88b35799/)
