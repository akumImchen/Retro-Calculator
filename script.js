
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