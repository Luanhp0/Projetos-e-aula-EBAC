const form = document.getElementById('formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linha;
    



})