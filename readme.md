Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.

PSEUDOCODICE
1. Creazione nel DOM di un div quadrato e assegnare dimensione.
2. Creazione griglie nel quadrato.
    - Aggiungere tramite JS nel DOM gli elementi che contengono i numeri da 1 a 100.
    - Ogni griglia ha una sua dimensione, quindi dovrò DIVIDERE il quadrato in 100 parti / 10.
3. Ciclo for per generare numeri da 1 a 100 nei vari article.
4. Mettere in ascolto i vari article.
5. Aggiungere la classe ACTIVE.
6. Mettere griglia in display none
    - Quando clicco bottone play (displa inline)