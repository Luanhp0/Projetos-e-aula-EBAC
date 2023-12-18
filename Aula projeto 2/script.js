const form = document.getElementById('form-atividade'); // ta usando a tag form 
const imgAprovado = '<img src="/Aula projeto 2/images/aprovado.png" alt="emogi celebrando"'; // adicionando a imagem aprovado
const imgReprovado = '<img src="/Aula projeto 2/images/reprovado.png" alt="emogi decepcionado"'; // adicionando a imagem reprovado
const atividades = []; // será um array vazio
const notas = [];


let linhas = '';

form.addEventListener('submit', function(e){ // adicionando evento // 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade'); // ta pegando o nome da atividade no input 
    const inputNotaAtividade = document.getElementById('nota-atividade'); // ta pegando a nota da atividade no input no html

    atividades.push(inputNomeAtividade.value);
    notas.push(inputNotaAtividade.value);
    

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`; // onde aparecera o nome 
    linha += `<td>${inputNotaAtividade.value}</td>`; //onde aparecera a nota
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`; //estrutura condicional
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`)  // testar se esta pegando a atividade e o nome


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){ 
    console.log(atividades);
    console.log(notas);
}