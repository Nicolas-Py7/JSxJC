function converterTempo(tempo, unidadeTempo, unidadeTaxa) {
    if (unidadeTempo === unidadeTaxa) {
        return tempo;
    }

    if (unidadeTempo === 'meses' && unidadeTaxa === 'anos') {
        return tempo / 12;
    }

    if (unidadeTempo === 'anos' && unidadeTaxa === 'meses') {
        return tempo * 12;
    }

    if (unidadeTempo === 'dias' && unidadeTaxa === 'meses') {
        return tempo / 30;
    }

    if (unidadeTempo === 'meses' && unidadeTaxa === 'dias') {
        return tempo * 30;
    }

    if (unidadeTempo === 'dias' && unidadeTaxa === 'anos') {
        return tempo / 360;
    }

    if (unidadeTempo === 'anos' && unidadeTaxa === 'dias') {
        return tempo * 360;
    }

    return tempo;
}


export function calcularJuros(
    capitalInicial,
    taxaJuros,
    tempoJuros,
    unidadeTempo,
    unidadeTaxa
) {
    const capital = Number(capitalInicial);
    const taxa = Number(taxaJuros) / 100;

    const tempoConvertido = converterTempo(
        Number(tempoJuros),
        unidadeTempo,
        unidadeTaxa
    );

    // Juros simples
    const jurosSimples = capital * taxa * tempoConvertido;

    const montanteSimples = capital + jurosSimples;

    // Juros compostos
    const montanteComposto =
        capital * (1 + taxa) ** tempoConvertido;

    const jurosCompostos = montanteComposto - capital;

    // Diferença entre os juros
    const diferenca = jurosCompostos - jurosSimples;


    // Dados para o gráfico
    const periodos = [];
    const valoresSimples = [];
    const valoresCompostos = [];

    for (let i = 0; i <= tempoConvertido; i++) {
        periodos.push(i);

        valoresSimples.push(
            capital * (1 + taxa * i)
        );

        valoresCompostos.push(
            capital * (1 + taxa) ** i
        );
    }


    return {
        jurosSimples,
        jurosCompostos,
        montanteSimples,
        montanteComposto,
        diferenca,
        periodos,
        valoresSimples,
        valoresCompostos
    };
}