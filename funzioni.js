// crea una funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50, o se la somma dei due è 50



function checkNumber(a, b) {
    if ((a === 50) || (b === 50) || (a + b === 50)) {
        console.log("true")
} else {
    console.log("false")
}
}

checkNumber(25, 25)

// Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

let myString = "HelloWorld!"

function removeChar(myString, pos) {
    let arr = myString.split("")
    arr.splice(pos, 1)
    let newString = arr.join("")

    return newString
}

console.log(removeChar(myString, 5))

//Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false".

function anotherCheckNum(a, b) {
    if (((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) || ((a >= 70 && a <= 100) && (b >= 70 && b <= 100))) {
        console.log("true")
    } else {
        console.log("false")
    }
}

anotherCheckNum(65, 66)

//Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", Altrimenti ritorni "false".

function cityName(city) {
    if ((city.startsWith("Los")) || (city.startsWith("New")) ) {
        return city
    } else {
        return false
    }
}

console.log(cityName("Roma"))

//Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

const myArr = [3, 4, 7, 12, 28] 

function arraySum(arr) {
    let sum = arr.reduce((accumulator, current) => accumulator + current, 0)
    return sum
}

console.log(arraySum(myArr))
