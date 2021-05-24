
//selecionar variaveis

const inputado = document.querySelector('#todoInput');
const botao = document.getElementById('todoSubmit');
const listaTarefas = document.getElementById('todoLista');
const formulario = document.getElementById('todoForm');
const botaoLimpar = document.getElementById('todoRemoverTodos');
const botaoMarcarTodas = document.getElementById('todoMarcarTodos');

document.getElementById('vazio').style.display='none';


//criar evento botao

botao.addEventListener('click', (event)=>{
    //previne que o formulario seja enviado ao clicar, que é o padrão
    event.preventDefault();


    //criando elementos
    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    const deletaElemento = document.createElement('span');

    //pega valor do input
    textoElemento.innerText = inputado.value;
    deletaElemento.innerText = '🗑' ;


    if(textoElemento.innerText.trim() === ''){
        document.getElementById('vazio').style.display='';

    }else{
        document.getElementById('vazio').style.display='none';
        //acrescenta elementoLista (o li criado) como filho de listaTarefas (o ul já existente)
        listaTarefas.appendChild(elementoLista);

        //acrescenta textoElemento (o p criado)  como filho de elementoLista (o li criado)
        elementoLista.appendChild(textoElemento);


        elementoLista.appendChild(deletaElemento);
        //apaga o que ta escrito no input após adicionar
        formulario.reset();
    }
    setTimeout(() => {document.getElementById('vazio').style.display='none'; }, 4000);
    

    //dá check e descheck na tarefa
    textoElemento.addEventListener('click', () => {
        if(textoElemento.classList.value === ''){
            textoElemento.classList.add('checked');
        }else{
            textoElemento.classList.remove('checked');
        }
    });
    

    //função deletar
    deletaElemento.addEventListener("click", () => {
        listaTarefas.removeChild(elementoLista);
    });

    //função limpar todos
    botaoLimpar.addEventListener('click', () => {
        listaTarefas.innerHTML = '';
    })

});

    //função marcar todos
botaoMarcarTodas.addEventListener('click', () => {
    const todosParagrafos = document.querySelectorAll('p');
    if(botaoMarcarTodas.innerText === 'Marcar todos'){
        todosParagrafos.forEach(item => {
            item.classList.add('checked');
        });
        botaoMarcarTodas.innerText = 'Desmarcar todos';
    }else{
        todosParagrafos.forEach(item => {
            item.classList.remove('checked');
        });
        botaoMarcarTodas.innerText = 'Marcar todos';
    }

});
