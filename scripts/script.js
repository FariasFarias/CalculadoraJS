function calcular(num1, num2){

    //pegando os valores das caixas de texto num1 e num2
    num1 = Number.parseFloat(document.getElementById("num1").value)
    num2 = Number.parseFloat(document.getElementById("num2").value)

    selector = document.getElementById("selector").value
    
    switch(selector)
    {
        case "+":
            calculo = (num1 + num2)
            document.getElementById("resultado").innerHTML = `O resultado da soma é ${calculo}`
            break

        case "-":
            calculo = (num1 - num2)
            document.getElementById("resultado").innerHTML = `O resultado da subutração é ${calculo}`
            break

        case "/":
            calculo = (num1 / num2)
            if(num2 != 0 ) // para limitar denomidador igual a zero
            {
                document.getElementById("resultado").innerHTML = `O resultado da subutração é ${calculo}`
            } 
            else
            {
                alert("Insira um valor diferente de zero no denominador (segundo número)")
            }
            break

        case "*":
            calculo = (num1 * num2)
            document.getElementById("resultado").innerHTML = `O resultado da subutração é ${calculo}`
            break

        case "%":
            calculo = (num1 % num2)
            if(num2 != 0 ) // para limitar denomidador igual a zero
            {
                document.getElementById("resultado").innerHTML = `O resultado da subutração é ${calculo}`
            } 
            else
            {
                alert("Insira um valor diferente de zero no denominador (segundo número)")
            }
            break
            
        default:
            alert("Desculpe, houve algum erro inesperado")
    }
}