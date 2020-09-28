var botaoAdicionar = document.getElementById('adicionar');
var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(event){
    if(event.key === 'Enter'){
        adicionar();
    }
};

botaoAdicionar.addEventListener('click', adicionar);

function adicionar(){
    var tarefa = inputTarefa.value;

    if(tarefa !== ''){
        var li = document.createElement('li');
        var a = document.createElement('a');
        li.innerText = tarefa;
        var buttonRemover = document.createElement('button');
        buttonRemover.innerText = 'Excluir';

        //Primeira forma de fazer
        // li.style.color = 'red';
        // li.onclick = function(){
        //     li.style.color = 'green';
        // }
        // li.ondblclick = function(){
        //     li.style.color = 'red';
        // }


        //Segunda forma de fazer
        li.classList.add('para-fazer');
        li.onclick = function() {
            li.classList.remove('para-fazer');
            li.classList.add('concluida');
        };
        li.ondblclick = function() {
            li.classList.remove('concluida');
            li.classList.add('para-fazer');
        };

        buttonRemover.onclick = function(){
            li.remove();
        }

        var ol = document.getElementById('tarefas');
        ol.appendChild(li);
        li.appendChild(a);
        li.appendChild(buttonRemover);

        inputTarefa.value = '';
    }
    
}
