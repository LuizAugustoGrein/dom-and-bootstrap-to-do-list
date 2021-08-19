//Temos que refenciar o input
let input = document.querySelector('input[name=tarefa]');
//Referenciar o Button
let btn = document.querySelector('#botao');
//Referenciar a lista
let lista = document.querySelector('#lista');
//referenciar o card
let card = document.querySelector('.card');

let tarefas = []

function renderizarTarefas(){
//Limpar a listagem de itens antes renderizar

lista.innerHTML ='';

    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li');
        //Adcionar classes no item lista
        itemLista.setAttribute('class','list-group-item list-group-item-action');
        itemLista.setAttribute('style','cursor: pointer;');
        //Criar um texto
        let itemTexto = document.createTextNode(tarefa);
        //Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);
        //Adicionar o item da Lista na lista
        lista.appendChild(itemLista);




        //Adicionar evento ao clicar no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }
    }
}
//Executando a função renderizar
renderizarTarefas();
//add o evento onclick ao botao
btn.onclick = function(){
    //capturar o valor digitado no input
    let novaTarefa = input.value;
    //precisamos atualiazar a nova tarefa na lista/array
    if(novaTarefa !== ""){
        tarefas.push(novaTarefa);

    //Executando a função para atualizar as tarefas
         renderizarTarefas();
         //limpar o input
         input.value = '';

         removerSpans();

    }else{

        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Informe uma tarefa!');
        span.appendChild(msg);
        card.appendChild(span);
        
       
    }
}
function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0;i<spans.length;i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    //remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent),1);
    //renderiza novamente a tela
    renderizarTarefas();
}
