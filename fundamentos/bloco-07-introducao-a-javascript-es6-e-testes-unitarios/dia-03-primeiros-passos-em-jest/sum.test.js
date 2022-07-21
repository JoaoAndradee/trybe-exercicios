const {sum, myRemove, myFizzBuzz} = require('./sum');

describe('A função sum deve retornar o valor de a + b', () => {
    it('Testa se a soma de 4 e 5 é 9', () => {
        expect(9).toEqual(sum(4, 5));
    });

    it('Testa se a soma de 0 e 0 é 0', () => {
        expect(0).toEqual(sum(0, 0));
    });

    it('Testa se a funcao sum lanca um erro quando os parametros são 4 e "5" (string)', () => {
        expect(() => {
            sum(4, "5");
        }).toThrow();
    });

    it('Testa se a funcao sum lanca um erro com a mensagem "parameters must be numbers"', () => {
        expect(() => {
            sum(4, "5");
        }).toThrow('parameters must be numbers');
    });
});

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
        expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
    })
});

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    
})