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
    var nomeArquivo = "Estacionamento.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Estacionamento"});
    XLSX.writeFile(wb, nomeArquivo);
}