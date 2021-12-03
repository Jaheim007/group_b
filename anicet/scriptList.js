// querries
const fixeCheck=document.getElementById('fixe');
const autreCheck=document.getElementById('autre');
//--------
const div1 =document.querySelector('.div1');
const div2 =document.querySelector('.div2');

//
fixeCheck.addEventListener('click', function(){
    div1.style.display='block';
    div2.style.display='none';
    

})
autreCheck.addEventListener('click', function(){
    div1.style.display='none';
    div2.style.display='block';
    

})

setInterval(()=>{
    function Afficher(){
var list = document.querySelector('.tbody1');
list.innerHTML ='';
let id = 1;
JSON.parse(localStorage.getItem('ChargeFixe')).forEach(data => {
    list.innerHTML+=`
                    <tr>
                        <td>
                            ${id}
                        </td>
                        <td>
                            ${data.chargesF}
                        </td>
                        <td>
                            ${data.dateF}
                        </td>
                        
                        <td>
                            ${data.libelleF}
                        </td>

                        <td>
                            ${data.montantF}  Frs
                        </td>
                    </tr>
      
                `;
            id++
        });

    };Afficher();
},60);

//-----------------------------
setInterval(()=>{
    function Afficher1(){
        var list = document.querySelector('.tbody2');
        list.innerHTML ='';
        let id = 1;
        JSON.parse(localStorage.getItem('autreCharge')).forEach(data => { 
            list.innerHTML+=`
                            <tr>
                                <td>
                                        ${id}
                                </td>
                                
                                <td>
                                        ${data.dateA}
                                </td>

                                <td>
                                        ${data.libelleA}
                                </td>

                                <td>
                                        ${data.montantA} Frs  
                                </td>
                            </tr>
            
                        `;  
                    id++
        });

    }; Afficher1();
},60);

// les sommes totales

setInterval(()=>{
    function sommes1(){
        var list = document.querySelector('.somTotale1');
        list.innerHTML ='';
        let id = 1;
        let total=0;

        JSON.parse(localStorage.getItem('autreCharge')).forEach(data => { 
            
            if (`${data.montantA}`){
                const som = `${data.montantA}`
                total+=parseInt(som);
            
            }

            list.innerHTML=total + ` Frs`  ;  
            id++    
        });

    }; sommes1();
},60);

//--------

setInterval(()=>{
    function sommes(){
var list = document.querySelector('.somTotale');
list.innerHTML ='';
let id = 1;
let total1=0;
JSON.parse(localStorage.getItem('ChargeFixe')).forEach(data => { 
   
    if (`${data.montant}`){

        const som1 = `${data.montantF}`
        total1+=parseInt(som1);
       
    }

    list.innerHTML=total1;  
            id++
        });

    }; sommes();
},60);