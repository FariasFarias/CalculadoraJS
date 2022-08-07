function calcular(num1, num2){

    //pegando os valores das caixas de texto num1 e num2
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value

    selector = document.getElementById("selector").value
    
    switch(selector){
        case "+":
            calculo = (num1 + num2)
            document.getElementById("resultado").innerHTML = `O resultado da soma é ${calculo}`
            break
        case "-":
            calculo = (num1 - num2)
            document.getElementById("resultado").innerHTML = `O resultado da subutração é ${calculo}`
            break
    }
}