const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compararRespostas = (gabarito, respostaDoEstudante) => {
    let count = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        if (gabarito[index] === respostaDoEstudante[index]) {
            count += 1;
        } else if (respostaDoEstudante[index] === 'N.A') {
            count += 0;
        } else {
            count -= 0.5;
        }
    }
    return count;
}

const notaAluno = (gabarito, respostaEstudante, callback) => callback(gabarito, respostaEstudante);

console.log(notaAluno(RIGHT_ANSWERS, STUDENT_ANSWERS, compararRespostas))