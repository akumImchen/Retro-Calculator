
const screen=document.querySelector('.display')
const button1=document.getElementById('c')
button1.addEventListener('click',function(){
    
    screen.innerHTML='';
});

const modulo=document.getElementById('mod');

modulo.addEventListener('click',function(){
    screen.innerHTML=this.innerHTML;
})

const divide=document.getElementById('divide');
divide.addEventListener('click',function(){
    screen.innerHTML=this.innerHTML;
})
const multiply=document.getElementById('multiply');
multiply.addEventListener('click',function(){
    screen.innerHTML=this.innerHTML;
})
const seven=document.getElementById('sev');
seven.addEventListener('click',function(){
    const value=this.innerHTML;
        screen.innerHTML+=value; 
})
const eight=document.getElementById('eight');
eight.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const nine=document.getElementById('nine');
nine.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const sub=document.getElementById('sub');
sub.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const four=document.getElementById('four');
four.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const five=document.getElementById('five');
five.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const six=document.getElementById('six');
six.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const equal=document.getElementById('equal');
equal.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const one=document.getElementById('one');
one.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const two=document.getElementById('two');
two.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const three=document.getElementById('three');
three.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const add=document.getElementById('add');
add.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const zero=document.getElementById('zero');
zero.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})
const dot=document.getElementById('dot');
dot.addEventListener('click',function(){
    const value=this.innerHTML;
    screen.innerHTML+=value;
})