// Test
console.log("Hello World!");

// 1. Inizializzo la variabile di appoggio
let result = "contenuto di result"; // string
console.log(result);

// Dichiaro una variabile per catturare l'elemento HTML
const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

// 2. Creo un ciclo da 1 a 100
for (let i = 1; i <=100; i++) {

    // 3. Assegnazione valori ai multipli di 3 e 5
    if (i % 15 === 0) {
        result = "FizzBuzz"
    } else if (i % 3 === 0 ) {
        result = "Fizz";
    } else if (i % 5 === 0) {
        result = "Buzz";
    } else {
        result = i;
    }

    // Aggiungo l'elemento in pagina
    const colElem = document.createElement("div"); // object
    // Aggiungo il valore nell'elemento
    colElem.innerHTML = result;
    colElem.classList.add("col");
    // Aggiungo la classe corrispondente all'elemento
    if (result === "FizzBuzz") { 
        colElem.classList.add("fizz-buzz")
    } else if (result === "Fizz") {
        colElem.classList.add("fizz")
    } else if (result === "Buzz") {
        colElem.classList.add("buzz")
    }

    // Stampo in console gli elementi
    console.log(colElem);  
      
    // Stampo in pagina gli elementi
    rowElem.append(colElem);

    // Stampa in console dei risultati
    // console.log(result);
}
