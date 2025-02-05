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

//Crea una funzione che controlli che un array non contenga i numeri 1 o 3. Se non li contiene, ritorna "true", altrimenti ritorna "false".

const newArr = [4, 8, "banana", true, 17]

function check13(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return false
    } else {
        return true
    }
}

console.log(check13(newArr))

//Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro. Angolo acuto: meno di 90° > ritorna "acuto". Angolo ottuso: tra 90° e 180° > ritorna "ottuso". Angolo retto: 90°  > ritorna "retto". Angolo piatto: 180° > ritorna "piatto". 

function angle(gradi) {
    if (gradi < 90) {
        return "acuto" 
    } else if (gradi === 90) {
        return "retto" 
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso"
    } else if (gradi === 180) {
        return "piatto" 
    } else {
        return "invalid"
    }
}

console.log(angle(180))

//Crea una funziona che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT". 

let frase = "Istituto Nazionale Previdenza Sociale"

function acronym(str) {
    const words = str.split(" ")
    const firstLetters = []
    words.forEach((word) => {
        if (word.length > 0) { 
            word.toUpperCase()
            firstLetters.push(word[0])
        }
    })
    const acronimo = firstLetters.join("")

    return acronimo
}

console.log(acronym(frase))