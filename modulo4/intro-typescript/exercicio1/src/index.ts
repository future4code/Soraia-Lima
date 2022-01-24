// 1)
function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(2, 4, 4))

// 2)
// function imprimeTresCoresFavoritas(){
//     // const cor1 = process.argv[2] 
// }