

function Calcular(){
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var res = document.getElementById('resultado')
    var texto = document.getElementById('txt')
     
    var p = Number(peso.value)
    var a=  Number(altura.value)
    var r = p / (a*a)
    

res.innerHTML = `Seu IMC é ${r.toFixed(2)}` 

if(r <= 18.5){
    txt.innerHTML = `Você está abaixo do peso` 

}
else if( r >= 18.6 && r <25){
    txt.innerHTML = `Você está no peso ideal. Parabéns` 
}

else if(  r >=25 && r<30){
    txt.innerHTML = `Você está levemente acima do peso` 

}
else if( r>= 30 && r <35){
    txt.innerHTML = `Você está com Obesidade grau I` 
}

else if(  r>=35 &&  r<40){
    txt.innerHTML = `Você está com Obesidade grau II(severa)` 
}
 else{
    txt.innerHTML = `Você está com Obesidade grau III(mórbida)` 
}

}

function Limpar(){
    document.getElementById('peso').value =  ''
    document.getElementById('altura').value =  ''
    document.getElementById('resultado').value =  ''
}
 




