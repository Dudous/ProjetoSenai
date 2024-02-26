function adicionarItem(){
    //Obter os valores dos campos digitados
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    //Validar se todas existem
    if(!nome || !valor || !quantidade){
        alert("Preencha os campos!!");
        return;
    }

    //criar a tabela, mais precisamente uma linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);

    //Colocar valores nas celulas
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    //Limpar o campos depois de construir a linha da tabela
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de produtos"});
    XLSX.writeFile(wb, nomeArquivo);
}