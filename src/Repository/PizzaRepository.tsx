import {
    Tamanho,
    Sabor,
    Pizza
} from '../MockBackend/models';


const getTamanhosDisponiveis = async() => {
    return await fetch('http://127.0.0.1:8080/tamanhos')
        .then(response => response.json());
};

const getRecheiosBordaDisponíveis = async() => {
    return await fetch('http://127.0.0.1:8080/bordas')
    .then(response => response.json());
}

const getSaboresDisponiveis = async() => {
    return await fetch('http://127.0.0.1:8080/sabores')
    .then(response => response.json());
}

const getRecomendation = (): Pizza => {
    return {
        sabor: {
            doisSabores: false,
            primeiroSabor: Sabor.BACON
        },
        borda: {
            recheada: false
        },
        tamanho: Tamanho.GRANDE
    }
}

const database = {
    tamanhos: getTamanhosDisponiveis,
    bordas: getRecheiosBordaDisponíveis,
    sabores: getSaboresDisponiveis,
    recomendation: getRecomendation
}

export default database;
