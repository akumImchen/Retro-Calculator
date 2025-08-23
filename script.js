
const screen=document.querySelector('.display')

//numbers
document.querySelectorAll('.number').forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(screen.innerText.length<12){
            screen.innerHTML+=btn.innerText;
        }
        
    });
});

//operators
document.querySelectorAll('.operator').forEach(btn=>{
    btn.addEventListener('click',()=>{
        firstOperand=parseFloat(screen.innerHTML);
        currentOperator=btn.dataset.op; //selects "+","-" etc;
        screen.innerHTML="";
    });
});

//dot
document.querySelector('.dot').addEventListener('click',()=>{
    if(!screen.innerHTML.includes('.')){
        screen.innerHTML+='.';
    }
});

//clear
document.querySelector('.clear').addEventListener('click',()=>{
   screen.innerHTML="";
   firstOperand=null;
   currentOperator=null;
});

//equal
document.querySelector('.equal').addEventListener('click',()=>{
    let secondOperand=parseFloat(screen.innerHTML);
    let result;
    switch(currentOperator){
        case "+":result=firstOperand+secondOperand;break;
        case "-": result = firstOperand - secondOperand; break;
        case "*": result = firstOperand * secondOperand; break;
        case "/":result=secondOperand==0?"error":firstOperand/secondOperand;break;
        case "%":result=(firstOperand/100)*secondOperand;break;
    }
    screen.innerHTML=result;
    firstOperand=null;
    currentOperator=null;
});







// const button1=document.getElementById('c')
// button1.addEventListener('click',function(){
    
//     screen.innerHTML='';
// });

// const modulo=document.getElementById('mod');

// modulo.addEventListener('click',function(){
   
//     screen.innerHTML+= this.innerHTML;;
//     firstOperand= parseFloat(screen.innerHTML);
//     currentOperator='%';
//     screen.innerHTML='';
// })

// const divide=document.getElementById('divide');
// divide.addEventListener('click',function(){
//     screen.innerHTML+=this.innerHTML;
//     firstOperand=parseFloat(screen.innerHTML);
//     currentOperator='/';
//     screen.innerHTML='';
// })
// const multiply=document.getElementById('multiply');
// multiply.addEventListener('click',function(){
   
//     screen.innerHTML+=this.innerHTML;
//     firstOperand=parseFloat(screen.innerHTML);
//     currentOperator='*';
//     screen.innerHTML='';
// })
// const seven=document.getElementById('sev');
// seven.addEventListener('click',function(){
//     const value=this.innerHTML;
//         screen.innerHTML+=value; 
// })
// const eight=document.getElementById('eight');
// eight.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const nine=document.getElementById('nine');
// nine.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const sub=document.getElementById('sub');
// sub.addEventListener('click',function(){
   
//     screen.innerHTML+=this.innerHTML;
//     firstOperand=parseFloat(screen.innerHTML);
//     currentOperator='-';
//     screen.innerHTML='';
// })
// const four=document.getElementById('four');
// four.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const five=document.getElementById('five');
// five.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const six=document.getElementById('six');
// six.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const equal=document.getElementById('equal');
// equal.addEventListener('click',function(){
//     let secondOperand=parseFloat(screen.innerHTML);
//     let result;
//     if(currentOperator==='%'){
//         result=(firstOperand/100)*secondOperand;
//     }
//     else if(currentOperator==='/'){
//         result=firstOperand/secondOperand;
//     }
//     else if(currentOperator==='+'){
//         result=firstOperand+secondOperand;
//     }
//     else if(currentOperator==='-'){
//         result=firstOperand-secondOperand;
//     }
//     else if(currentOperator=='*'){
//         result=firstOperand*secondOperand;
//     }else if(currentOperator=='.'){

//     }
//     screen.innerHTML=result;
//     firstOperand=null;
//     secondOperator=null;
   

// })
// const one=document.getElementById('one');
// one.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const two=document.getElementById('two');
// two.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const three=document.getElementById('three');
// three.addEventListener('click',function(){
//     const value=this.innerHTML;
//     screen.innerHTML+=value;
// })
// const add=document.getElementById('add');
// add.addEventListener('click',function(){
    
//     screen.innerHTML+=this.innerHTML;
//     firstOperand=parseFloat(screen.innerHTML);
//     currentOperator='+';
//     screen.innerHTML='';
// })
// const zero=document.getElementById('zero');
// zero.addEventListener('click',function(){
   
//     screen.innerHTML+=this.innerHTML;
// })
// const dot=document.getElementById('dot');
// dot.addEventListener('click',function(){
    
//     if(!screen.innerHTML.includes('.')){
//         screen.innerHTML+='.';
//     }
//     // screen.innerHTML+=this.innerHTML;
//     firstOperand=parseFloat(screen.innerHTML);
// })