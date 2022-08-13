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

// dia de projeto
// mais um dia de projeto (zooFunctions)
// mais um dia de projeto (zooFunctions)
// another project day (zooFunctions);
// Outro dia de projeto zooFunctions;
// ZooFunctions dia de projeto, quase finalizando.

console.log(newEmployees(pessoaContratada));