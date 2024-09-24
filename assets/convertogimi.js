function converter() {
    h2_inserir_valor.innerHTML = 'insira o valor'

    let numeroParaConverter = Number(input_valor_converter.value)
    let baseNumeroParaConverter = select_base.value
    let numeroEmDecimal = parseInt(numeroParaConverter,baseNumeroParaConverter)
    let numeroBinario = numeroEmDecimal.toString(2);
    let numeroOctal = numeroEmDecimal.toString(8);
    let numeroHexadecimal = numeroEmDecimal.toString(16);

        div_resultado.innerHTML = `<section>
            <h2>&gt; resultados</h2>
    
            <p>decimal: ${numeroEmDecimal}</p>
            <p>binário: ${numeroBinario}</p>
            <p>octal: ${numeroOctal}</p>
            <p>hexadecimal: ${numeroHexadecimal}</p>
        </section>`
}