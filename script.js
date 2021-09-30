function calcularMelhorPreco(){
    //validar campos     
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value
    if( precoAlcool != "" ){
      if( precoGasolina != "" ){
        /*Calcular se é melhor usar o álcool ou gasolina
          * se valorAlcool / valorGasolina >= 0.7 é melhor utilizar Gasolina
          * senão será melhor utilizar álcool*/
        let resultado = precoAlcool / precoGasolina
        if( resultado >= 0.7){
          //alert("Melhor utilizar a gasolina")
          document.getElementById('resultado').innerHTML = "Melhor utilizar a Gasolina"
        }else{
            //alert("Melhor utilizar o alcool")
          document.getElementById('resultado').innerHTML = "Melhor utilizar a Álcool"
        }
        }else{
        alert("Preencha o preço da Gasolina")
        }
      }else{
      alert("Preencha o preço do Álcool")
      }
  }