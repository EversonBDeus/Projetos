
let calcular = document.getElementById('calcular');




function imc (){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if( nome !== '' && altura !== '' && peso !== ''){
        let valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC <25){
            classificacao = 'com peso ideal.';
        }else if (valorIMC <30){
            classificacao = 'Levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau 1';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau 2';
        }else{
            classificacao = 'com obeidade grau 3'

        }

        resultado.textContent = `${nome} seu IMC É: ${valorIMC} e você está ${classificacao}`; 
    }else{
      resultado.textContent = 'Preencha todos os campos';
    }
}
calcular.addEventListener('click', imc);