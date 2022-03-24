let palpite = document.querySelector('#palpite');
    let enviarPalpite = document.querySelector('.enviarPalpite');
    let palpitesAnteriores = document.querySelector('.palpitesAnteriores');
    let resultado = document.querySelector('.resultado');
    let resultadoFinal = document.querySelector('.resultadoFinal');
    let baixoOuAlto = document.querySelector('.baixoOuAlto');
    let contador = 1;
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let reiniciar;
    
    function conferirNumero() {
        let palpiteUsuario = Number(palpite.value);
        if(contador === 1) {
            palpitesAnteriores.textContent = 'Seus palpites (até 10): '
        }
        palpitesAnteriores.textContent += `${palpiteUsuario} `
        if(palpiteUsuario === numeroAleatorio) {
            resultadoFinal.textContent='Parabéns! Você acertou.'
            resultado.style.background='darkgreen';
            resultadoFinal.style.background='inherit';
            baixoOuAlto.textContent='';
            fimDeJogo();
        } else if(contador === 10) {
            resultadoFinal.textContent='Que pena! Você perdeu.';
            resultado.style.background='red';
            resultadoFinal.style.background='inherit';
            baixoOuAlto.textContent='';
            fimDeJogo();
        }else {
            resultadoFinal.textContent='Errado.';
            resultadoFinal.style.background='black';
            resultadoFinal.style.borderRadius='10px';
            if(palpiteUsuario < numeroAleatorio) {
                baixoOuAlto.textContent='Dica: o número é maior.'
            } else if(palpiteUsuario > numeroAleatorio) {
                baixoOuAlto.textContent='Dica: o número é menor.'
            }
        }
        contador++;
        palpite.value='';
        palpite.focus();
    }

    enviarPalpite.addEventListener('click', conferirNumero);

    function fimDeJogo() {
        palpite.disabled='true';
        enviarPalpite.disabled='true';
        reiniciar = document.createElement('button');
        resultado.appendChild(reiniciar);
        reiniciar.textContent='Reiniciar'
        reiniciar.addEventListener('click', reiniciarJogo)
    }
    function reiniciarJogo() {
        contador = 1;
        let reset = document.querySelectorAll('.resultado p');
        console.log(reset);
        for(i = 0; i < reset.length; i++) { reset[i].textContent='';
        }
        palpitesAnteriores.textContent='';
        resultado.removeChild(reiniciar);
        palpite.disabled = false;
        enviarPalpite.disabled = false;
        resultado.style.background='inherit';
        palpite.value='';
        palpite.focus();
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }