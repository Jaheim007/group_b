// choix de la charge
const fixe =document.getElementById('fixe');
const autre =document.getElementById('autre');

//les formulaires
const formFixe =document.getElementById('form1');
const formAutre =document.getElementById('form2');
const head = document.getElementById('h1');
const principalTab = document.querySelector('.principal')
const divtab1 = document.querySelector('.divTab1');
const divtab2 = document.querySelector('.divTab2');

//recuperation des inputs
// let date11= document.getElementById('date11');
// let libelle11 =document.getElementById('libelle11');
// let montant11 =document.getElementById('montant11');

// les evenements
fixe.addEventListener("click",function(e){
 formFixe.style.display='block';
 formAutre.style.display='none';
 
});

autre.addEventListener("click",function(e){
    formAutre.style.display='block';
    formFixe.style.display='none';
    
   });

//evenement afficharge des formulire
// document.forms["enregistrer1"].addEventListener("submit", function(e){
    
    
//     let erreur;
//     let inputs = this;

//     //traitement cas par cas 
    
    

//     //traitement generique
//     for ( let i = 0 ; i< inputs.length; i++){
//         console.log(inputs[i].value);
//         if (!inputs[i].value){
//             erreur ="Veuillez renseigner tous les champs!";       
//          }
//     }
//     if (erreur){
//         e.preventDefault();

//         formFixe.style.display='block';
//         document.getElementById('erreur').innerHTML=erreur;
        
//         return false;
//     }else{
//         principalTab.style.display='block';
//         formFixe.style.display='none';
//         alert('envoyé!');
//     }
// })
//chez les charge autres
// document.forms["enregistrer2"].addEventListener("submit", function(e){
    
    
//     let erreur;
//     let inputs = this;

//     //traitement cas par cas 
    
    

//     //traitement generique
//     for ( let i = 0 ; i< inputs.length; i++){
//         console.log(inputs[i].value);
//         if (!inputs[i].value){
//             erreur ="Veuillez renseigner tous les champs!";       
//          }
//     }

//     if (erreur){
//         e.preventDefault();

//         formAutre.style.display='block';
//         document.getElementById('erreur').innerHTML=erreur;
//         return false;

//     }else{ 
//         alert('envoyé!');
//         principalTab.style.display='block';
//         formAutre.style.display='none';
       
//     }

    
// })
// recuperation sur les input

//ciblages des formuliraires
const enregistrer1 = document.getElementById('form2')
const date = document.getElementById('date11');
const libelle  = document.getElementById('libelle11');
const montant = document.getElementById('montant11');
const lol =document.getElementById('lol');
const subId11 =document.getElementById('subId11');

//---------------------------------

const enregistrer_0 = document.getElementById('form1');
const charge_0 = document.getElementById('charges');
const date_0 = document.getElementById('date');
const libelle_0  = document.getElementById('libelle');
const montant_0 = document.getElementById('montant');
const subId_0 =document.getElementById('subId');
console.log(charge_0);
//
subId_0.addEventListener('click',()=>{
    subId_0.href='../index.html'
})
subId11.addEventListener('click',()=>{
    subId11.href='../index.html'
})
//cas il aura enregisrement
enregistrer_0.addEventListener('submit', function(e){

    let erreur;
    let inputss= this;

    for ( let i = 0 ; i< inputss.length; i++){
        console.log(inputss[i].value);
        if (!inputss[i].value){
            erreur ="Renseigner tous les champs!";       
         }
    }

    if (erreur){
        e.preventDefault();
        return false;

    }else{
        alert('sauvegadé avec succè!');
        formFixe.style.display='block';
        formAutre.style.display='none';
        divtab1.style.display='block';
        divtab2.style.display='block';
        principalTab.style.display='block';
        head.style.display='block';
        sauvegader();
    }
    
})


// event click

enregistrer1.addEventListener('submit',function(e){
    
    
    let erreur;
    let inputss= this;

    for ( let i = 0 ; i< inputss.length; i++){
        console.log(inputss[i].value);
        if (!inputss[i].value){
            erreur ="Renseigner tous les champs!";       
         }
    }

    if (erreur){
        e.preventDefault();
        return false;

    }else{
        alert('sauvegadé avec succè!');
        sauvegader1();

        formAutre.style.display='block';
        formFixe.style.display='none';
        divtab1.style.display='none';
        divtab2.style.display='block';
        principalTab.style.display='block';
        head.style.display='block';
    }
    
})


function sauvegader1(){
    let chargeA = JSON.parse(localStorage.getItem('autreCharge')) || [];
        chargeA.push(
        {
            dateA:date.value,
            libelleA: libelle.value,
            montantA: montant.value
        })
    localStorage.setItem('autreCharge',JSON.stringify(chargeA));
}
//----------
function sauvegader(){
    let chargeF = JSON.parse(localStorage.getItem('ChargeFixe')) || [];
        chargeF.push(
        {
            chargesF: charge_0.value,
            dateF:date_0.value,
            libelleF: libelle_0.value,
            montantF: montant_0.value
        })
    localStorage.setItem('ChargeFixe',JSON.stringify(chargeF));
    
}
//Afficharge des infos des charges

setInterval(()=>{
    function Afficher(){
        var list = document.querySelector('.td1');
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
                            ${data.montantF} 
                        </td>
                        
                    </tr>
      
                `;
            id++
        });

    }; Afficher();
},60);

//-----------------------AUTRES----------
setInterval(()=>{
    function Afficher1(){
    
        var listautres = document.querySelector('.td11');
             list.innerHTML ='';
        let id = 1;
JSON.parse(localStorage.getItem('autreCharge')).forEach(data => { 
    listautres.innerHTML+=`
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
                                ${data.montantA}  
                        </td>
                    </tr>
      
                `;  
            id++
        });

    }; Afficher1();
},60);

// calcule somme

