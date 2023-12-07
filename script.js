
const un=document.getElementById('un');
const deux=document.getElementById('deux');
const trois=document.getElementById('trois');
const quatre=document.getElementById('quatre');
const cinq=document.getElementById('cinq');
const six=document.getElementById('six');
const sept=document.getElementById('sept');
const euight=document.getElementById('euight');
const neuf=document.getElementById('neuf');
const zero=document.getElementById('zero');
const plus=document.getElementById('plus');
const moin=document.getElementById('moin');
const multiple=document.getElementById('multiple');
const divide=document.getElementById('divide');
const input=document.getElementById('input');
const clear =document.getElementById('clear');
const equal=document.getElementById('equal');
const sin=document.getElementById('sin');
const cos=document.getElementById('cos');
const tan=document.getElementById('tan');
const menu=document.getElementById('menu');
const errase=document.getElementById('errase');
const Delete=document.getElementById('clear');
const log=document.getElementById('logarithm');
const expos=document.getElementById('expos');
const pie=document.getElementById('pie');
const ln=document.getElementById('ln');
const power=document.getElementById('puissence');
const squareroot=document.getElementById('squareroot');
const dot=document.getElementById('dot');
const back=document.getElementById('back');
const foward=document.getElementById('foward');
const exponentielle=document.getElementById('exponentielle');
const invers=document.getElementById('invers');
const bras_open=document.getElementById('bras_open');
const bras_close=document.getElementById('bras_close');
const square=document.getElementById('square');
const fraction=document.getElementById('fraction');
const save=document.getElementById('save');
var accumulator='';
un.addEventListener('click',function(){
    accumulator+=1
    input.value=accumulator;

})
deux.addEventListener('click',function(){
    accumulator+=2;
    input.value=accumulator;

})
trois.addEventListener('click',function(){
    accumulator+=3;
    input.value=accumulator;

})
quatre.addEventListener('click',function(){
    accumulator+=4;
    input.value=accumulator;

})
cinq.addEventListener('click',function(){
    accumulator+=5;
    input.value=accumulator;

})
six.addEventListener('click',function(){
    accumulator+=6;
    input.value=accumulator;

})
sept.addEventListener('click',function(){
    accumulator+=7;
    input.value=accumulator;

})
euight.addEventListener('click',function(){
    accumulator+=8;
    input.value=accumulator;

})
neuf.addEventListener('click',function(){
    accumulator+=9;
    input.value=accumulator;

})
zero.addEventListener('click',function(){
    accumulator+=0;
    input.value=accumulator;

})
plus.addEventListener('click',function(){
    accumulator+='+'
    input.value=accumulator;

})
moin.addEventListener('click',function(){
    accumulator+='-'
    input.value=accumulator;

})
function addoperator(operator){
    accumulator+=operator
    input.value=accumulator;
}
clear.addEventListener('click',function(){
    accumulator="";
    input.value=accumulator;
})
sin.addEventListener('click',function(){

    input.value="sin("+input.value+"°)";
   
})
cos.addEventListener('click',function(){

    input.value="cos("+input.value+"°)";
   
})
tan.addEventListener('click',function(){

    input.value="tan("+input.value+"°)";
   
})

equal.addEventListener('click',function(){
    var regex = /\((.*?)°\)/; // Regular expression to match the value within '(' and '°)'
    var match = input.value.match(regex);

    if (match) {
       angle = match[1];}

    console.log(input.value);
    console.log(angle);
    if(input.value.includes("sin")){
        result=Math.sin(angle)
        input.value=result;
        console.log(result)
    }else if(input.value.includes("cos")){try{
        result=Math.cos(angle)
        input.value=result;
        console.log(result)
    }catch(error){
        input.value='erreur'
        input.value=''
    }
    }else if(input.value.includes("tan")){
        result=Math.tan(angle)
        input.value=result;
        console.log(result)
    }else if(input.value==accumulator)try{
            const result=eval(accumulator);
            input.value=result;
            accumulator=result.toString();
        }catch(error){
            input.value='erreur'
            accumulator='';
        }
    })