//const numeroAleatorio = Math.floor(Math.random() * 101);
//alert(numeroAleatorio)
//let tentativas = 0;
//let pontos = 0;
//function verifica() {
  //numeroDigitado = parseFloat(document.getElementById("inputtentativa").value);

  //while (true) {
   //if (numeroAleatorio === numeroDigitado) {
      //var labelAcerto = document.getElementById("labelAcerto");
      //labelAcerto.innerHTML = "Parabéns, você acertou o número!";
    //}
    //else if(numAleatorio < numeroDigitado){
     // var labelAcerto = document.getElementById("labelAcerto");
      //labelAcerto.innerHTML = "O número digitado é maior que o número aleatório.";
  //  }
   // else if(numAleatorio > numeroDigitado){
   // var labelAcerto = document.getElementById("labelAcerto");
   // labelAcerto.innerHTML = "O número digitado é menor que o número aleatório.";
   // }
   // numeroDigitado = parseFloat(document.getElementById("inputtentativa").value);
 // }

//}



	var numeroAleatorio =0;
	var tentativas = 0;
	var pontos = 0;
	var chute = 102;
	var array=[];
	var Stringarray='';
	
function verifica() {
	var labelAcerto=''
while (numeroAleatorio!==chute) {
	
  chute = parseInt(document.getElementById("inputtentativa").value);


  tentativas++;

  if (chute === numeroAleatorio) {
	pontos = 100 - (tentativas - 1);
    var labelAcerto = document.getElementById("labelAcerto");
    labelAcerto.innerHTML =(`Parabéns, você acertou o número em ${tentativas} tentativas e obteve ${pontos} pontos!`);
	var labelPontos = document.getElementById("labelnumcerto")
	labelPontos.innerHTML =(numeroAleatorio);
	} 
  else if (chute < numeroAleatorio) {
    var labelAcerto = document.getElementById("labelAcerto");
    labelAcerto.innerHTML =("O número que você digitou é menor do que o número a ser adivinhado. Tente novamente!");
  } 
  else if (chute > numeroAleatorio){
    var labelAcerto = document.getElementById("labelAcerto");
    labelAcerto.innerHTML = ("O número que você digitou é maior do que o número a ser adivinhado. Tente novamente!");
  }
	pontos2 = 100 - (tentativas - 1);
	var labelPontos = document.getElementById("labelPontos");
	labelPontos.innerHTML =(pontos2);
	var labelPontos = document.getElementById("labelTentativas")
	labelPontos.innerHTML =(tentativas);
  break;
  
   
}
  adicionarElementos();
  Stringarray= array.join(',');
  
  var labelTentativas = document.getElementById("labelTentativasAnteriores");
  labelTentativas.innerHTML = Stringarray;
  
  document.getElementById("inputtentativa").value="";

}



function NovoJogo(){
	numeroAleatorio = Math.floor(Math.random() * 101);
	console.log(numeroAleatorio);
	 array=[];
	 Stringarray='';
	 tentativas=0
	 pontos = 0;
	 var labelTentativas = document.getElementById("labelTentativasAnteriores");
	labelTentativas.innerHTML = "...";
	var labelPontos = document.getElementById("labelPontos");
	labelPontos.innerHTML =("100");
	var labelPontos = document.getElementById("labelTentativas")
	labelPontos.innerHTML =("0");
	var labelAcerto = document.getElementById("labelAcerto");
    labelAcerto.innerHTML =("...");
}

function adicionarElementos(){
	var input = document.getElementById("inputtentativa");
	var valores = input.value.split(",");
	array.push(...valores);
}