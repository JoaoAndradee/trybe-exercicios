const sum = require('./sum');

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