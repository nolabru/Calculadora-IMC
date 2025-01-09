// Criando uma variável que busca no documento HTML o elemento que tem o ID 'calcular', nesse caso é o nosso botão.

const btn = document.getElementById('calcular');

// Criando uma função para calcular o nosso IMC.

function imc()
{
    // Declarando variáveis e extraindo dos inputs os dados que vamos precisar na execução do programa. Utilizando o '.value' para pegar o valor do input.
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    // Declarando uma variável para buscar o elemento que mostrará o resultado.

    const result = document.getElementById('resultado');

    // Verificando se os campos estão vazios ou preenchidos.

    if(nome != '' && peso != '' && altura != '')
    {
        // Declarando uma variável para fazer o cálculo do nosso IMC.

        const valorImc = (peso / (altura * altura)).toFixed(1);

        // Declarando uma variável 'let' sem valor pois será alterada conforme o decorrer do programa.

        let classificacao = '';

        // Verificando qual é a classificação que o usuário está baseado em seu peso e altura.

        if(valorImc < 18.5)
        {
            classificacao = 'Abaixo de Peso';
        }
        else if(valorImc >= 18.5 && valorImc < 25)
        {
            classificacao = 'no Peso Ideal'
        }
        else if(valorImc >= 25 && valorImc < 30)
        {
            classificacao = 'no Sobrepeso'
        }
        else if(valorImc >= 30 && valorImc < 35)
        {
            classificacao = 'no Grau de Obesidade I'
        }
        else if(valorImc >= 35 && valorImc < 40)
        {
            classificacao = 'no Grau de Obesidade II'
        }
        else if(valorImc >= 40)
        {
            classificacao = 'no Grau de Obesidade III'
        }

        // Utilizando o resultado que foi calculado e alterando o texto do elemento HTML com os calculos e dados já feitos.

        result.textContent = `${nome}, seu índice de massa corporal é: ${valorImc} e você está ${classificacao}.`
    }

    // Caso o usuário não preencha algum campo essa mensagem será exibida.

    else
    {
        result.textContent = 'Favor Preencha Todos os Campos!'
    }
}

// Adicionando um evento de 'click' em nosso botão e executando a função 'imc' quando o botão for clicado.

btn.addEventListener('click', imc);

// ---------------------------------------------------------------------------------------------------------------------------
