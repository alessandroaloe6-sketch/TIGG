# 🎲 Gioco dell'Oca — Multiplayer Online

Un'implementazione web del classico **Gioco dell'Oca** con supporto multiplayer online, bot automatici e chat in tempo reale.

## Come si gioca

Il Gioco dell'Oca è un gioco da tavolo per 2–4 giocatori. A turno, ogni giocatore lancia un dado e avanza sul tabellone. Le caselle speciali cambiano le sorti della partita:

- 🪿 **Oca** — avanza di nuovo della stessa quantità
- 🌉 **Ponte** — salti su una casella specifica
- 💀 **Morte** — torni alla casella di partenza
- 🏛️ **Labirinto** — salti un turno
- ⚓ **Prigione** — rimani bloccato per più turni
- 🔮 **Maledizione** — effetti negativi casuali

Vince il primo giocatore che raggiunge esattamente l'ultima casella.

## Funzionalità

- Multiplayer online tramite codice partita o link diretto
- Bot automatici per riempire i posti liberi
- Sostituzione automatica con bot se un giocatore si disconnette (timeout 30s)
- Chat in-game
- Board generata casualmente ad ogni partita
- Animazioni e dado 3D

## Avviare il server

### Requisiti
- [Node.js](https://nodejs.org/) versione 16 o superiore

### Installazione

```bash
git clone https://github.com/alessandroaloe6-sketch/TIGG.git
cd TIGG/GameApi-main
npm install
```

### Avvio

```bash
npm start
```

Il server parte su **http://localhost:3000** — apri il browser e sei pronto a giocare.

### Multiplayer online

Per giocare con amici online puoi usare [VS Code Dev Tunnels](https://code.visualstudio.com/docs/remote/tunnels) o [ngrok](https://ngrok.com/) per esporre il server temporaneamente:

```bash
# Con ngrok
ngrok http 3000
```

Condividi il link generato con i tuoi amici e inizia la partita!

## Struttura del progetto

```
GameApi-main/
├── src/
│   ├── index.js          # Entry point del server Express
│   └── routes/           # API REST (auth, games, lobby)
├── static/
│   ├── index.html        # Frontend completo del gioco (single-file)
│   └── assets/           # Immagini token giocatori
├── data/                 # Dati persistenti (partite, utenti)
└── package.json
```

## API Docs

Swagger UI disponibile su `http://localhost:3000/api-docs` dopo l'avvio.
