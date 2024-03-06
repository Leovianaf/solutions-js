function inverterString(str) {
    // Cria uma variável para armazenar a string invertida
    let invertedString = '';
    
    // Itera sobre a string, começando pelo último caractere
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

let minhaString = "Hello, world!";
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida);

// Saída esperada: "!dlrow ,olleH"