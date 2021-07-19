
    function numero(num){
        var numeros=document.getElementById('resultado').innerHTML;

        document.getElementById('resultado').innerHTML=numeros+num;   
        if(numeros==''){
            document.getElementById('corta').innerText='C';        
        }   
        else{
            document.getElementById('corta').innerText='CA';        

        }

    }

    function clean(){ 
        document.getElementById('resultado').innerHTML='';
    }
    function back(){
        var resultado=document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML=resultado.substring(0,resultado.length -1)
    }
    function equal(){
        var calculate=document.getElementById('resultado').innerHTML;
        if(calculate){
            document.getElementById('resultado').innerHTML=eval(calculate)
        }
    }
    function percent(){
        var numero=document.getElementById('resultado').innerHTML;
        if(numero){
            document.getElementById('resultado').innerHTML=numero/100
        }

    }