let tarefas = new Array()
let dataConclusao = new Array()
let frutas = ['🍒', '🍉', '🍑','🥝','🥑']


function fnSalvarTarefa(){
    //pegar a tarefa e colocar no array
    let novaTarefa = document.getElementById("tarefa").value
    tarefas.push(novaTarefa)
    document.getElementById("tarefa").value = ""

     let novaDataConclusao = document.getElementById("conclusao").value
     datasConclusao.push(novaDataConclusao)
     document.getElementById("conclusao").value = ""
}
 function fnExibirTarefa(){
    //vai exibir a tarefa na #lista-tarefas 
    //console.dir(tarefas)// exibindo apenas no console 
    let listaDeTarefas = ""
    for(let i=0; i <tarefas.length; i++){
        listaDeTarefas += "<li>" + tarefas[i] + "- " + dataConclusao[i] + "<li>"

    }
  
 }



 console.log (frutas[2])
frutas.push('🍏')
frutas.push('🍓')
frutas.push('🍍')


 console.log(frutas.length)// mostra no console quantas frutas tem dentro do meu array 
 //variavel local e aquela que está dentro da função não e possivel usala fora da função , variavel global deve ser criada fora da função 
 for( let i=0 ; i < frutas.length ; i++ ){
    console.log (frutas[i]) // mostra todas as frutinhas 
    console.log(i)
    

 }
 //para criar um for precisa de 3 coisas inicializador , condição, incremento 
 // inicializar criar a variavel de onde vai começar i e de 
 // condição delimita quantas vezes vai rodar i <=5 essa condição começa no zero e vai ate 5
 // incremento adiciona um ao inicializador 
 // "<liv>" coloca uma bolinha na lista 