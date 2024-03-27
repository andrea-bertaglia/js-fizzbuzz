// Test
console.log("Hello World!");

// 1. Inizializzo la variabile di appoggio
let result = "contenuto di result"; // string
console.log(result);

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

    // Stampa in console dei risultati
    console.log(result);
}
