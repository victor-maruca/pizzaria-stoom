import { RecheiosBordaDisponíveis, SaboresDisponíveis, TamanhosDisponiveis } from '../MockDatabase/data';

const getTamanhosDisponiveis = () => {
    // Fake database access ...
    return TamanhosDisponiveis;
}

const getRecheiosBordaDisponíveis = () => {
    // Fake database access ...
    return RecheiosBordaDisponíveis;
}

const getSaboresDisponiveis = () => {
    // Fake database access ...
    return SaboresDisponíveis;
}

const database = {
    tamanhos: getTamanhosDisponiveis,
    bordas: getRecheiosBordaDisponíveis,
    sabores: getSaboresDisponiveis
}

export default database;
