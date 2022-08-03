const conferirAposta = (num1, num2) => (num1 === num2) ? 'Você Ganhou!!' : 'Tente novamente!!';

const sorteio = (numeroApostado, callback) => {
    const numeroSorteado = Math.round(Math.random() * 4) + 1;
    console.log(`Você jogou ${numeroApostado} e o número sorteado foi ${numeroSorteado}`);
    return callback(numeroApostado, numeroSorteado);
};

console.log(sorteio(2, conferirAposta));