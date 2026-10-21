
let peso = parseFloat(prompt("Digite o seu peso (Kg):"))
let altura = parseFloat(prompt("Informe a sua altura (m)"))
let resultado = calcularIMC(peso,altura)
alert(resultado)

function calcularIMC(peso,altura){
     return peso/(altura*altura)
}

function classificarIMC(imc){
     if(peso>=20){
       alert(obesidade)
     }

}
