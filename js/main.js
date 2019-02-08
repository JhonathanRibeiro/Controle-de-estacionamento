document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e){
 var modeloCarro = document.getElementById('modeloCarro').value;
 var placaCarro = document.getElementById('placaCarro').value;
 var time = new Date();

if(!modeloCarro && !placaCarro){
    alert("Por favor, preencha os campos em branco!");
    return false;
}

 carro = {
     modelo: modeloCarro,
     placa: placaCarro,
     hora: time.getHours(),
     minutos: time.getMinutes()
    }



  console.log(carro);

  if(localStorage.getItem('patio') == null){
     var carros = [];
     carros.push(carro);
     localStorage.setItem('patio', JSON.stringify(carros));
 } else {
     var carros = JSON.parse(localStorage.getItem('patio'));
     carros.push(carro);
     localStorage.setItem('patio', JSON.stringify(carros));
 }

 document.getElementById('formulario').reset();

 mostraPatio();

 e.preventDefault();
}

function apagarVeiculo(placa){
    var carros = JSON.parse(localStorage.getItem('patio'));

    for(var i = 0; i < carros.length; i++){
        if(carros[i].placa == placa){
            carros.splice(i, 1);
        }
    localStorage.setItem('patio', JSON.stringify(carros));
    }
    mostraPatio();
}

function mostraPatio(){
    var carros = JSON.parse(localStorage.getItem('patio'));
    var carrosResultado = document.getElementById('resultados');

    carrosResultado.innerHTML = '';

    for(var i = 0; i < carros.length; i++){
        var modelo  = carros[i].modelo;
        var placa   = carros[i].placa;
        var hora    = carros[i].hora;
        var minutos = carros[i].minutos;

        carrosResultado.innerHTML += '<tr><td>' + modelo +
                                '</td><td>' + placa +
                                '</td><td>' + hora + ' : ' + minutos + 
                                '</td><td><button class="btn btn-danger" onclick="apagarVeiculo(\'' + placa + '\')">Excluir</button></td>' +
                                '</tr>';

    }
}














