const pessoaContratada = (nome) => (
    {
        nome,
        email: `${nome}@trybe.com`
    }
);

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

// Projeto zooFunctions finalizado
// Comecando o projeto Shooping Cart
// Dia 01 projeto shopping cart (ontem 15/08/23 resolvi descansar a mente )
// Dia 02 projeto shopping cart
// Dia 03 projeto shopping cart
// Dia 04 projeto shopping cart
// Dia 05 projeto shopping cart
// Dia 06 projeto shopping cart
// Dia 07 projeto shopping cart
// Dia 01 projeto solar system - Finalizado no mesmo dia
// Dia 01 projeto tryunfo
// Dia 02 projeto tryunfo
// Dia 03 projeto tryunfo
// Dia 04 projeto tryunfo
// Dia 05 projeto tryunfo
// Dia 06 projeto tryunfo
// Dia 07 projeto tryunfo - requisitos 05, 06 e 07
// Dia 08 projeto tryunfo
// Dia 09 projeto tryunfo

console.log(newEmployees(pessoaContratada));