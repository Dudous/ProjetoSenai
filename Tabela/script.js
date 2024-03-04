function adicionarItem(){
    //Obter os valores dos campos digitados
    var carro = document.getElementById("carro").value;
    var placa = document.getElementById("placa").value;
    var cor = document.getElementById("cor").value;
    var tamanho = document.getElementById("tamanho").value;
    var horaEntrada = document.getElementById("horaEntrada").value;
    var horaSaida = document.getElementById("horaSaida").value;

    //Validar se todas existem
    if(!carro || !placa || !cor || !tamanho || !horaEntrada || !horaSaida){
        alert("Preencha os campos!!");
        return;
    }

    //criar a tabela, mais precisamente uma linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaCarro = novaLinha.insertCell(0);
    var celulaPlaca = novaLinha.insertCell(1);
    var celulaCor = novaLinha.insertCell(2);
    var celulaTam = novaLinha.insertCell(3);
    var celulaEntrada = novaLinha.insertCell(4);
    var celulaSaida = novaLinha.insertCell(5);

    //Colocar valores nas celulas
    celulaCarro.innerHTML = carro;
    celulaPlaca.innerHTML = placa;
    celulaCor.innerHTML = cor;
    celulaTam.innerHTML = tamanho;
    celulaEntrada.innerHTML = horaEntrada;
    celulaSaida.innerHTML = horaSaida;

    //Limpar o campos depois de construir a linha da tabela
    document.getElementById("carro").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("tamanho").value = "";
    document.getElementById("horaEntrada").value = "";
    document.getElementById("horaSaida").value = "";
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "Dados-Estacionamento.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Estacionamento"});
    XLSX.writeFile(wb, nomeArquivo);
}

function removerItem(){
    var nomeParaRemover = document.getElementById("nomeRemover").value;
  if (!nomeParaRemover) {
    alert("Digite um nome para remover.");
    return;
  }

  var tabela = document
    .getElementById("tabela")
    .getElementsByTagName("tbody")[0];
  var linhas = tabela.getElementsByTagName("tr");

  // percorrer sobre todas as linhas da tabela
  for (var i = 0; i < linhas.length; i++) {
    // Obtendo a primeira célula (td) da linha atual
    var celulaNome = linhas[i].getElementsByTagName("td")[0];

    // Verificando se a célulaNome existe e se o conteúdo é igual ao nome a ser removido
    if (celulaNome && celulaNome.innerHTML === nomeParaRemover) {
      // Removendo a linha da tabela
      tabela.deleteRow(i);

      return;
    }
    }
    document.getElementById("nomeRemover").value = "";
}