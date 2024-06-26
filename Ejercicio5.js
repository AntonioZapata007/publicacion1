



function calculo_operacion(){

    let vEntrada1 = parseInt(document.getElementById('idEntrada1').value);
    let vEntrada2 = parseInt(document.getElementById('idEntrada2').value);
    let vOperacion = document.getElementById('operacion_aritmetica').value;
    let vTexto = document.getElementById('resultadoBloque')

    if(vOperacion == "suma"){
        let resultado = vEntrada1 + vEntrada2;
        console.log(resultado);
        texto.innerHTML += `<P>El resultado de la operacion: ${vOperacion}, es <b> ${resultado}</b></P>`;
    }else if(vOperacion == "resta"){
        let resultado = vEntrada1 - vEntrada2;
        console.log(resultado);  
        texto.innerHTML += `<P>El resultado de la operacion: ${vOperacion}, es <b> ${resultado}</b></P>`;      
    }else if(vOperacion == "multiplicacion"){
        let resultado = vEntrada1 * vEntrada2;
        console.log(resultado);
        texto.innerHTML += `<P>El resultado de la operacion: ${vOperacion}, es <b> ${resultado}</b></P>`;
    }else if(vOperacion == "division"){
        let resultado = vEntrada1/vEntrada2;
        console.log(resultado);
        texto.innerHTML += `<P>El resultado de la operacion: ${vOperacion}, es <b> ${resultado}</b></P>`;
    }else if(vOperacion == "potencia"){
        let resultado = vEntrada1**vEntrada2;
        console.log(resultado);
        texto.innerHTML += `<P>El resultado de la operacion: ${vOperacion}, es <b> ${resultado}</b></P>`;
    }else if(vOperacion == "modulo"){
        let resultado = vEntrada1 % vEntrada2;
        console.log(resultado)
        texto.innerHTML += `<P>El resultado de la operacion: ${vOperacion}, es <b> ${resultado}</b></P>`;
    }
    
    
}
