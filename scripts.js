var registro = new Map();

var ErrorNull = new Error("Campo em branco!");
var ErrorRed = new Error("Este(a) funcionário(a) já existe!");
var ErrorProcura = new Error("Funcionário(a) não encontrado(a)!");

function Cadastrar(){
    let valor = document.myform.cargo.value.toLowerCase();
    let nome = document.myform.name.value.toLowerCase();
    verificaNulos(nome, false, valor);
    verificaRedudancia(nome);
    registro.set(nome, valor);
    console.log(registro);
    document.myform.name.value = "";
    document.myform.cargo.value = "";
}

function Atualizar(){
    let nome = document.myform2.name.value.toLowerCase();
    let valor = document.myform2.cargo.value.toLowerCase();
    let atualizacao;
    verificaNulos(nome, false, valor);
    for(var [key] of registro){
        if(key === nome){
            registro.set(nome, valor);
            atualizacao = true;
        }
    }
    verificaProcura( atualizacao);
    console.log(registro);
    document.myform2.name.value ="";
    document.myform2.cargo.value = "";
}   

function Visualizar(){
    let nome = document.myform3.name.value.toLowerCase();
    verificaNulos(nome, true);
    let atualizacao;
    for(var [key] of registro){
        if(key === nome){
            alert(registro.get(key));
            atualizacao = true;
        }
    }
    verificaProcura(atualizacao);
    document.myform3.name.value = "";
}

function Deletar(){
    let nome = document.myform4.name.value.toLowerCase();
    verificaNulos(nome, true);
    let atualizacao;
    for(var [key] of registro){
        if(key === nome){
            if(confirm("Deseja realmente deletar " + nome +" ?") === false){return};
            registro.delete(key);
            alert("O(a) funcionário(a) " + nome + " foi deletado!");
            atualizacao = true;
        }
    }
    console.log(registro);
    verificaProcura( atualizacao);
    document.myform4.name.value = "";
}

function mostrarCadastro(){
    ocultar();
    document.getElementById("cadastro").style.display = "block";
}

function mostrarAtualizar(){
    ocultar();
    document.getElementById("atualizar").style.display = "block";
}

function mostrarVisualizar(){
    ocultar();
    document.getElementById("visualizar").style.display = "block";
}

function mostrarDeletar(){
    ocultar();
    document.getElementById("deletar").style.display = "block";
}

function mostrarLista(){
    ocultar();
    document.getElementById("listaFuncionarios").style.display = "block";
    let a = "";

    for([key, value] of registro){
        a += key +": " + value + "\n";
    }

    if(!a){document.getElementById("paragrafo").innerText = "Não há nenhum(a) funcionário(a) no registro!"; return;}
   
    document.getElementById("paragrafo").innerText = a;

}

function ocultar(){
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("atualizar").style.display = "none";
    document.getElementById("visualizar").style.display = "none";
    document.getElementById("deletar").style.display = "none";
    document.getElementById("listaFuncionarios").style.display = "none";
}

function verificaNulos(nome, campoUnico, valor){
    if (!nome){
        alert (ErrorNull);
        throw ErrorNull;    
    } else if(!campoUnico && !valor){
        alert (ErrorNull);
        throw ErrorNull; 
    }
}

function verificaRedudancia(nome){
    for (var [key] of registro){
        if(nome === key){
            alert (ErrorRed);
            throw ErrorRed;
        }
    }
}

function  verificaProcura( verifica){
    if (!verifica){
        alert (ErrorProcura);
        throw ErrorProcura;
    }
}