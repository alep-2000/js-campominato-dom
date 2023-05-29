PROBLEMA:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

SOTTOPROBLEMA:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

SOLUZIONE:
1 - Creare una funzione in cui generare numeri random (16) nel range di numeri della difficoltà scelta;
2 - Creare un array in cui inserire i numeri random vuoto;
3 - Creare una funzione per riempire l'array
    3.1 - Creare un ciclo while per generare il numero random almeno 16 volte 
    3.2 - Creare un controllo per i numeri;
        3.2.1 - ? SE il numero random è già uscito inserire nell'array e estrarne un altro;
        3.2.2 - ALTRIMENTI inserire il numero nell'array e andare avanti;

SOTTOPROBLEMA:
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

SOLUZIONE:
1 - Creare un controllo sulle celle;
    1.1 - ? SE il numero della cella cliccata è presente nell'array la cella si colora di rosso e non si può cliccare nessun'altra cella
    1.2 - ALTRIMENTI la cella di colora di azzurro e si va avanti;

SOTTOPROBLEMA:
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

SOLUZIONE:
1 - Creare un controllo per far terminare la partita;
    1.1 - ? SE il giocatore clicca su una bomba o colora le caselle di blu evitando le bombe, la partita termina;
    1.2 - ALTRIMENTI va avanti
2 - Tenere il conteggio delle caselle di colore blu cliccate;
3 - Creare un div per il punteggio;
4 - Mostrare a video il punteggio;
