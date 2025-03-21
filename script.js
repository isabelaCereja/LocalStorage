function adicionarTarefa1() {
    var tarefa1 = document.getElementById('inputTarefa1').value;
    localStorage.setItem('tarefa1', tarefa1); //Salvar LocalStorage
}

function adicionarTarefa2() {
    var tarefa2 = document.getElementById('inputTarefa2').value;
    localStorage.setItem('tarefa2', tarefa2); //Salvar LocalStorage
}

function adicionarTarefa3() {
    var tarefa3 = document.getElementById('inputTarefa3').value;
    localStorage.setItem('tarefa3', tarefa3); //Salvar LocalStorage
}


function mostrarTarefas1() {
    var tarefa1 = localStorage.getItem('tarefa1');
    if(tarefa1) {
        document.getElementById('resultado1').textContent = `Tarefa salvo: ${tarefa1}`;
    }else {
        document.getElementById('resultado1').textContent = 'Nenhum valor de Tarefa ';
    }
}

function mostrarTarefas2() {
    var tarefa2 = localStorage.getItem('tarefa2');
    if(tarefa2) {
        document.getElementById('resultado2').textContent = `Tarefa  salvo: ${tarefa2}`;
    }else {
        document.getElementById('resultado2').textContent = 'Nenhum valor de Tarefa ';
    }
}

function mostrarTarefas3() {
    var tarefa3 = localStorage.getItem('tarefa3');
    if(tarefa3) {
        document.getElementById('resultado3').textContent = `Tarefa  salvo: ${tarefa3}`;
    }else {
        document.getElementById('resultado3').textContent = 'Nenhum valor de Tarefa ';
    }
}

function limparTarefas1(){
    localStorage.removeItem('tarefa1');
    document.getElementById('resultado1').textContent = "tarefa removida"; //Atualiza o texto
}

function limparTarefas2(){
    localStorage.removeItem('tarefa2');
    document.getElementById('resultado2').textContent = "tarefa removida"; //Atualiza o texto
}

function limparTarefas3(){
    localStorage.removeItem('tarefa3');
    document.getElementById('resultado3').textContent = "tarefa removida"; //Atualiza o texto
}