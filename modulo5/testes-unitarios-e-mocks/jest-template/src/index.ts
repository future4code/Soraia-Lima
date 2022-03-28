export interface Character {
    nome: string,
    vida: number,
    forca: number,
    defesa: number
}

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.nome ||
        input.vida === undefined ||
        input.forca === undefined ||
        input.defesa === undefined
    ) {
        return false
    }

    if (input.vida <= 0 || input.forca <= 0 || input.defesa <= 0) {
        return false
    }

    return true
}

 // 3.a
export function performAttack(atacante: Character, defensor: Character) {
    if (!validateCharacter(atacante) || !validateCharacter(defensor)) {
        throw new Error("Invalid Character")
    }

    if (defensor.defesa < atacante.defesa) {
        defensor.vida -= atacante.defesa - defensor.defesa
    }
}

export function performAttack2(atacante: Character, defensor: Character) {
    
}
