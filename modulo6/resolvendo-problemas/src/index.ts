// Exercício 1

const onEdit = (text1: string, text2: string) => {

    //Se a diferença de tamanho delas, forem maior que um, retorna false. Pois para ser onEdit, a diferença entre ambas, só pode ser de um caractere. 
    if ((text2.length - text1.length) > 1) {
        return false
    }

    // ver a a sting 1 e maior que a string 2, e retorna se a string 1 contém a string 2.
    if (text1.length > text2.length) {
        return text1.includes(text2)
    }

    // ver a a sting 2 e maior que a string 1, e retorna se a string 2 contém a string 1.
    if (text1.length < text2.length) {
        return text2.includes(text1)
    }

    // entra nesse for, se o tamanho da string for o mesmo, ou até 1 caractere de diferença. 
    // Se tivermos mais de um caractere diferente, ira me retornar false, ou seja, não é one edit.
    let cont = 0
    for (let i = 0; i < text1.length; i++) {
        if (text1[i] !== text2[i]) {
            cont++
        }
    }

    return cont === 1
}

console.log(onEdit("soraia", "çoraia"))
console.log(onEdit("soraia", "sorai"))
console.log(onEdit("soraia", "soraiak"))
console.log(onEdit("soraia", "çoraial"))

// Exercício 2

type qtdString = {
    letra: string,
    qtdLetra: number
}

const textComprehension = (text: string): string => {

    let arrayText = []
    let char = text[0]
    let charCont = 0

    for (let string of text) {
        if (string !== char) {
            arrayText.push(char+ charCont)
            char = string
            charCont = 0
        }
        charCont++
    }
    arrayText.push(char + charCont)
    let result = ""

    for(let character of arrayText){
        result += character
    }
    return result.length > text.length ? text : result
}

console.log(textComprehension("soraia"))
console.log(textComprehension("soraiaaaaaa"))