/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype in JavaScript. sono i tipi di dati. i principali sono:
number => per indicare un dato di tipo numerico.
string => per indicare un dato di tipo stringa e va scritto tra sincolo o doppio apice ("")
boolean => per indicare un dato di tipo "vero" o "falso"
null => per indicare un dato che dia come risultato "null"
undefined => per indicare un dato non definito
*/



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Alessandra"
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12
let number2 = 20
 console.log ( number1 + number2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x
x = 12
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Russo" 
console.log (myName)

/* const myName = "Alessandra"
myName = "Russo"
console.log (myName) // ==>> mi da un errore , poichè è impossibile riassegnare un valore ad una variabile dichiarata con il costrutto const
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number3 = 4
console.log ( number3 - x )
// oppure potevamo fare direttamente in questo modo
console.log (4-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log ("john e John sono uguali?", name1 === name2)
console.log ("john e John sono uguali se vengono trasformate in lowercase?", name1.tolowercase === name2.tolowercase)