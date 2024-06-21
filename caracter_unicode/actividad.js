//1. /\p{Sc}/gu
//2. /\p{Z}/gu
//3. /[\p{L}\p{Script=Greek}]/gu
//4. /[\p{L}\p{N}]/gu


let moneda = "$ € £ ¥ CHF"
let patternMoneda = /\p{Sc}/gu
let matchesMoneda = moneda.match(patternMoneda)
console.log(matchesMoneda)

let espacio = "Hola mundo,  xd"
let patternEspacio = /\p{Z}/gu
let matchesEspacio = espacio.match(patternEspacio)
console.log(matchesEspacio)

let letras = "A B C D 2 E 55ffgfh F G H I J K ## L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω"
let patternLetras = /[\p{L}\p{Script=Greek}]/gu
let matchesLetras = letras.match(patternLetras)
console.log(matchesLetras)

let letraNumero = "a b c d e 1 2 3 4 5 φ χ ψ ω"
let patternLetraNumero = /[\p{L}\p{N}]/gu
let matchesLetraNumero = letraNumero.match(patternLetraNumero)
console.log(matchesLetraNumero)