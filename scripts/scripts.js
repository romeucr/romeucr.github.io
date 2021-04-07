var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

  dataNasc = '07/12/1984';
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var anoNascParts = dataNasc.split('/');
  var diaNasc =anoNascParts[0];
  var mesNasc =anoNascParts[1];
  var anoNasc =anoNascParts[2];
  var idade = anoAtual - anoNasc;
  var mesAtual = dataAtual.getMonth() + 1; 
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
  if(mesAtual < mesNasc){
  idade--; 
  } else {
  //Se estiver no mes do nascimento, verificar o dia
  if(mesAtual == mesNasc){ 
  if(new Date().getDate() < diaNasc ){ 
  //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
  idade--; 
  }
  }
  } 
  document.getElementById("age").innerHTML = idade + " años"




 