function calculaFib(num) {
    // Inicia a sequência com os primeiros dois números da sequência de Fibonacci
    let fibonacci = [0, 1];

    // Calcula os próximos números da sequência Fibonacci até ultrapassar o número informado
    while (fibonacci[fibonacci.length - 1] <= num) {
        let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextNumber);
    }

    // Verifica se o número está presente na sequência Fibonacci
    if (fibonacci.includes(num)) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso
console.log(calculaFib(21)); // Saída: 21 pertence à sequência de Fibonacci.
console.log(calculaFib(24)); // Saída: 24 não pertence à sequência de Fibonacci.