let contain = document.querySelector('.container');
let message = document.querySelector('.incorrect');
const button1 = document.querySelector('#btn'); 
let button2 = document.querySelector('#btn2');


message.style.display= "none";

button1.onclick =(e)=>{
    e.preventDefault();
    contain.style.display = "none"; 
    message.style.display="block";
    
} 


