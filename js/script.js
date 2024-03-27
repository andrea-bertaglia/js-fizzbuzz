// Test
console.log("Hello World!");

// 1. Inizializzo la variabile di appoggio
let result = "contenuto di result"; // string
console.log(result);

// Dichiaro una variabile per catturare l'elemento HTML
const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

// Dichiaro una variabile di appoggio per gestire la classe relativa al background
let bgClass; // string | null

// 2. Creo un ciclo da 1 a 100
for (let i = 1; i <=100; i++) {

    // 3. Assegnazione valori ai multipli di 3 e 5
    if (i % 15 === 0) {
        result = "FizzBuzz";
        bgClass = "fizz-buzz";
    } else if (i % 3 === 0 ) {
        result = "Fizz";
        bgClass = "fizz";
    } else if (i % 5 === 0) {
        result = "Buzz";
        bgClass = "buzz";
    } else {
        result = i;
        bgClass = "other";
    }

    // Aggiungo l'elemento in pagina
    const colElem = document.createElement("div"); // object
    // Aggiungo il valore nell'elemento
    colElem.innerHTML = result;
    // Aggiungo la classe comune a tutti
    colElem.classList.add("col");
    // Aggiungo la classe specifica del background
    colElem.classList.add(bgClass);

    // Stampo in console gli elementi
    console.log(colElem);  

    // Stampo in pagina gli elementi
    rowElem.append(colElem);

    // Stampa in console dei risultati
    // console.log(result);
}
