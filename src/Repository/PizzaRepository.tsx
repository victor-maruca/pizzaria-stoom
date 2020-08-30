import { 
    RecheiosBordaDisponíveis, 
    SaboresDisponíveis, 
    TamanhosDisponiveis, 
} from '../MockDatabase/data';
import {
    Tamanho,
    Sabor,
    RecheioBorda,
    Pizza
} from '../MockDatabase/models';

const getTamanhosDisponiveis = (): Tamanho[]  => {
    // Fake database access ...
    return TamanhosDisponiveis;
}

const getRecheiosBordaDisponíveis = (): RecheioBorda[] => {
    // Fake database access ...
    return RecheiosBordaDisponíveis;
}

const getSaboresDisponiveis = (): Sabor[] => {
    // Fake database access ...
    return SaboresDisponíveis;
}

const getRecomendation = (): Pizza => {
    let bordas = getRecheiosBordaDisponíveis();
    let sabores = getSaboresDisponiveis();
    let tamanhos = getTamanhosDisponiveis();
    return {
        borda: {
            recheada: true,
            recheioBorda: bordas[Math.floor(Math.random() * bordas.length)]
        },
        sabor: {
            doisSabores: false,
            primeiroSabor: sabores[Math.floor(Math.random() * sabores.length)]
        },
        tamanho: tamanhos[Math.floor(Math.random() * tamanhos.length)]
    }
}

const database = {
    tamanhos: getTamanhosDisponiveis,
    bordas: getRecheiosBordaDisponíveis,
    sabores: getSaboresDisponiveis,
    recomendation: getRecomendation
}

export default database;
