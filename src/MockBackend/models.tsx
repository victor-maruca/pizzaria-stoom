export enum RecheioBorda {
    CATUPIRY,
    CHEDDAR,
    CHOCOLATE
}

export enum Sabor {
    FRANGO_CATUPURY,
    TOSCANA,
    MUSSARELA,
    PALMITO,
    BACON,
    MILHO
}

export enum Tamanho {
    GRANDE,
    NORMAL,
    BROTO
}

export interface Borda {
    recheada: boolean;
    recheioBorda?: RecheioBorda;
}

export interface SaborPizza {
    doisSabores: boolean;
    primeiroSabor: Sabor;
    segundoSabor?: Sabor;
}

export interface Pizza {
    borda?: Borda;
    sabor?: SaborPizza;
    tamanho?: Tamanho;
}
