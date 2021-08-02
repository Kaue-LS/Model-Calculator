var adicao=document.getElementById('adição').disabled=false
var divisao=document.getElementById('dividir').disabled=false
var subtracao=document.getElementById('subtração').disabled=false
var multiplicar=document.getElementById('multiplicar').disabled=false
    function numero(num){
        var numeros=document.getElementById('resultado').innerHTML;
        numeros=document.getElementById('resultado').innerHTML=numeros+num;     
        console.log(numeros)
        if(numeros.length==12){
            numeros=document.getElementById('resultado').style.fontSize='28px' 
            numeros=document.getElementById('escolhido').style.fontSize='28px' 
        }
        else if(numeros.length<8){
            numeros=document.getElementById('resultado').style.fontSize='40px' 
            numeros=document.getElementById('escolhido').style.fontSize='30px' 
        }
        if(numeros.length>=20){
            numeros=document.getElementById('resultado').style.fontSize='18px' 
            numeros=document.getElementById('escolhido').style.fontSize='18px' 
        }
 
                
        
    
        if(numeros.match(/[+][+]$/)){
            numeros=numeros.replace('++','+')
            numeros=document.getElementById('resultado').innerHTML=numeros;  

         
            console.log(numeros)
        }
        else if(numeros.match(/[x][x]/)){
            numeros=numeros.replace('xx','x')
            numeros=document.getElementById('resultado').innerHTML=numeros;     
            console.log(numeros)
        
      
        }
        else if(numeros.match(/[-][-]/)){
            numeros=numeros.replace('--','-')
            numeros=document.getElementById('resultado').innerHTML=numeros;     
            console.log(numeros)
        

        } else if(numeros.match(/[÷][÷]/)){
            numeros=numeros.replace('÷÷','÷')
            numeros=document.getElementById('resultado').innerHTML=numeros;   
            
        
        }
        while(numeros.match(/[÷]/)){
            numeros=numeros.replace('÷','/')
            
            console.log(numeros)
        }    
        if(numeros.length<3){
            document.getElementById('corta').innerText='C';        
        }   
        
        else{
            document.getElementById('corta').innerText='CA';        

        }

    }

    function clean(){ 
        document.getElementById('resultado').innerHTML='';
        document.getElementById('escolhido').innerHTML='';

        document.getElementById('corta').innerText='C';        

        
    }
    function back(){
        var resultado=document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML=resultado.substring(0,resultado.length -1)
    }
    function equal(){
        var calculate=document.getElementById('resultado').innerHTML;
       
    if(calculate){
       console.log(calculate)    
        
       while(calculate.match(/[÷]/)){
        calculate=calculate.replace('÷','/')

        console.log(calculate)

    }    
    while(calculate.match(/[x]/)){
        calculate=calculate.replace('x','*')

        console.log(calculate)

    }    

    document.getElementById('resultado').innerHTML=eval(calculate)
    if(calculate.length==8){
        calculate=document.getElementById('resultado').style.fontSize='28px' 
        calculate=document.getElementById('escolhido').style.fontSize='28px' 
    }
    else if(calculate.length<8){
        calculate=document.getElementById('resultado').style.fontSize='40px' 
        calculate=document.getElementById('escolhido').style.fontSize='30px' 
    }
    if(calculate.length>=15){
        calculate=document.getElementById('resultado').style.fontSize='18px' 
        calculate=document.getElementById('escolhido').style.fontSize='18px' 
    }
 
            
        
        while(calculate.match(/[*]/)){
          
            
           

            console.log(calculate)
            calculate=calculate.replace('*','x')
            document.getElementById('escolhido').innerHTML=calculate

        }
        while(calculate.match(/[/]/)){

            calculate=calculate.replace('/','÷')
            document.getElementById('escolhido').innerHTML=calculate

            console.log(calculate)
        }    
    
            document.getElementById('escolhido').innerHTML=calculate

        
    
        
    }
}

    
    function percent(){
        var numero=document.getElementById('resultado').innerHTML;
        if(numero.match(/[%][%]/)){
            numero=numero.replace('%%','%')
            
            numero=document.getElementById('resultado').innerHTML=calculate;     
            console.log(numero)
        }    
    
            if(numero){
                document.getElementById('escolhido').innerHTML="%"+numero
                // '<img id="porcento_tela" src="/static/third key.png" alt="">'+
                document.getElementById('resultado').innerHTML= numero/100
         
            
         }
        

    }

function MRC(mrc){
    var numero=document.getElementById('resultado').innerHTML;
    calculate=document.getElementById('resultado').innerHTML=mrc+numero+')';     

}





function temaLight(){
    document.getElementById('sun').src='/static/sun.png'
    document.getElementById('moon').src='/static/moon light.png'
    document.getElementById('voltar').src='/static/recarregar_light.png'

    document.getElementById('temas').style.backgroundColor='#dddddd'

    document.getElementById('calculadora').style.backgroundColor='white'
    document.getElementById('resultado').style.backgroundColor='white'
    document.getElementById('escolhido').style.backgroundColor='white'
    document.getElementById('Painel').style.backgroundColor='white'
    document.getElementById('resultado').style.color='Black'
    document.getElementById('escolhido').style.color='Black'
    document.getElementById('teclado').style.backgroundColor='#dddddd'


    document.getElementById('corta').style.backgroundColor = '#e1e1e1'
    document.getElementById('back').style.backgroundColor = '#e1e1e1'
    document.getElementById('ponto').style.backgroundColor = '#e1e1e1'
    document.getElementById('ponto').style.color='black'
    document.getElementById('dividir').style.backgroundColor='#e1e1e1'
    document.getElementById('multiplicar').style.backgroundColor='#e1e1e1'
    document.getElementById('subtração').style.backgroundColor='#e1e1e1'
    document.getElementById('adição').style.backgroundColor='#e1e1e1'
    document.getElementById('igual').style.backgroundColor='#e1e1e1'
    document.getElementById('MRC').style.backgroundColor='#e1e1e1'
    document.getElementById('porcentagem').style.backgroundColor='#e1e1e1'




    document.getElementById('1').style.backgroundColor='#e4e4e4'
    document.getElementById('2').style.backgroundColor='#e4e4e4'
    document.getElementById('3').style.backgroundColor='#e4e4e4'
    document.getElementById('4').style.backgroundColor='#e4e4e4'
    document.getElementById('5').style.backgroundColor='#e4e4e4'
    document.getElementById('6').style.backgroundColor='#e4e4e4'
    document.getElementById('7').style.backgroundColor='#e4e4e4'
    document.getElementById('8').style.backgroundColor='#e4e4e4'
    document.getElementById('9').style.backgroundColor='#e4e4e4'
    document.getElementById('0').style.backgroundColor='#e4e4e4'

    document.getElementById('1').style.color='black'
    document.getElementById('2').style.color='black'
    document.getElementById('3').style.color='black'
    document.getElementById('4').style.color='black'
    document.getElementById('5').style.color='black'
    document.getElementById('6').style.color='black'
    document.getElementById('7').style.color='black'
    document.getElementById('8').style.color='black'
    document.getElementById('9').style.color='black'
    document.getElementById('0').style.color='black'

}
function temaDark(){
    document.getElementById('sun').src='/static/sun dark.png'
    document.getElementById('moon').src='/static/moon dark.png'
    document.getElementById('voltar').src='/static/recarregar.png'

    document.getElementById('temas').style.backgroundColor='#2a2d37'

    document.getElementById('calculadora').style.backgroundColor='#22252d'
    document.getElementById('resultado').style.backgroundColor='#22252d'
    document.getElementById('escolhido').style.backgroundColor='#22252d'
    document.getElementById('Painel').style.backgroundColor='#22252d'
    document.getElementById('resultado').style.color='white'
    document.getElementById('escolhido').style.color='white'
    document.getElementById('teclado').style.backgroundColor='#2a2d37'


    document.getElementById('corta').style.backgroundColor = '#282b33'
    document.getElementById('back').style.backgroundColor = '#282b33'
    document.getElementById('ponto').style.backgroundColor = '#282b33'
    document.getElementById('ponto').style.color='white'
    document.getElementById('dividir').style.backgroundColor='#282b33'
    document.getElementById('multiplicar').style.backgroundColor='#282b33'
    document.getElementById('subtração').style.backgroundColor='#282b33'
    document.getElementById('adição').style.backgroundColor='#282b33'
    document.getElementById('igual').style.backgroundColor='#282b33'
    document.getElementById('MRC').style.backgroundColor='#282b33'
    document.getElementById('porcentagem').style.backgroundColor='#282b33'




    document.getElementById('1').style.backgroundColor='#282b33'
    document.getElementById('2').style.backgroundColor='#282b33'
    document.getElementById('3').style.backgroundColor='#282b33'
    document.getElementById('4').style.backgroundColor='#282b33'
    document.getElementById('5').style.backgroundColor='#282b33'
    document.getElementById('6').style.backgroundColor='#282b33'
    document.getElementById('7').style.backgroundColor='#282b33'
    document.getElementById('8').style.backgroundColor='#282b33'
    document.getElementById('9').style.backgroundColor='#282b33'
    document.getElementById('0').style.backgroundColor='#282b33'

    document.getElementById('1').style.color='white'
    document.getElementById('2').style.color='white'
    document.getElementById('3').style.color='white'
    document.getElementById('4').style.color='white'
    document.getElementById('5').style.color='white'
    document.getElementById('6').style.color='white'
    document.getElementById('7').style.color='white'
    document.getElementById('8').style.color='white'
    document.getElementById('9').style.color='white'
    document.getElementById('0').style.color='white'
}