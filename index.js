const horasDia = 8 // Pré-definição de 8 horas trabalhadas por dia

/* Exemplo de cálculo de salário:

Dias trabalhados no mês: 22 dias 
Horas trabalhadas por dia: 8 horas
Valor do salário por hora: 10 reais por hora
Salario Final = 22 * 8 * 10 = 1760 reais de salário */

const calcularSalario = () => {
    const diasTrabalhados = document.getElementById('dias').value // Atribui o valor da referida tag <input> à constante
    const salarioHora = document.getElementById('salario_hora').value // Atribui o valor da referida tag <input> à constante
    if (diasTrabalhados != "" && salarioHora != "") { // Apenas efetua o cálculo quando todos os campos forem preenchidos
        const valorMes = (diasTrabalhados * horasDia * salarioHora)
        const salarioTotal = document.getElementById('salario_total') // Atribui o referido elemento HTML à constante salário total
        salarioTotal.innerHTML = 'R$ ' + valorMes.toFixed(2) // Atribui o valor do salário mês ao referido campo de resultado
    } else {
        alert('Por favor, preencha todos os campos.') //Apresenta mensagem de alerta caso todos os campos não forem preenchidos
    }
}

/* Exemplo de cálculo de salário por hora:

Dias trabalhados no mês: 22 dias
Horas trabalhadas por dia: 8 horas
Salario total: 1760 reais de salário
Salario por hora = (1760 / 22) / 8 = 10 reais por hora */

const calcularSalarioHora = () => {
    const diasTrabalhados = document.getElementById('dias').value // Atribui o valor da referida tag <input> à constante
    const salarioTotal = document.getElementById('salario_total').value // Atribui o valor da referida tag <input> à constante
    if (diasTrabalhados != "" && salarioTotal != "") { // Apenas efetua o cálculo quando todos os campos forem preenchidos
        const valorHora = ((salarioTotal / diasTrabalhados) / horasDia)
        const salarioHora = document.getElementById('salario_hora') // Atribui o referido elemento HTML à constante salário hora
        salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2) // Atribui o valor do salário hora ao referido campo de resultado 
    } else {
        alert('Por favor, preencha todos os campos.') //Apresenta mensagem de alerta caso todos os campos não forem preenchidos
    }
}



