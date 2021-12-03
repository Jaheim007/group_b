var button = document.getElementById('btn1');

function signup(e){
  
  var username = document.getElementById('Username').value;
  var nom = document.getElementById('Nom').value
  var email = document.getElementById('Email').value;
  var password1 = document.getElementById('Pwd1').value;
  var password2 = document.getElementById('Pwd2').value;
  var button = document.getElementById('btn1').value;

  var login = {
    username : Username, 
    nom : Nom, 
    email : Email, 
    password1 : Pwd1, 
    password2 : Pwd2, 
  };
  var json = JSON.stringify(login); 
  localStorage.setItem(user , json);
}

button.addEventListener('click', (e)=>{
  // function validation(e){
    event.preventDefault(e);
    
    var username = document.getElementById('user').value;
    var password2 = document.getElementById('pwd').value;
    // var local = localStorage.getItem(user);
    // var data = JSON.parse(user);
    var connect = JSON.parse(localStorage.getItem("inscription"));


    if (username!=="" && password2!=="") 
    {
      let bool = false;
      for (user in connect) 
      {
        if (username == connect[user].user  && password2 == connect[user].password2) 
        {
          location.href="../Page_Acceuil/accueil.html";
        }
        else
        {
            bool = true;
            
        }
      }
      
      if (bool = false) {
        alert("Veuillez saisir vos informations");
      }
    }
    else{
      alert("Veuillez saisir vos enregister");
    }
    
     
  
    
  
    // if (login == null){
    //   alert("Veuillez saisir vos informations");
    // }
    
    // else if(username == data.Username && email == data.Email && password2 == data.Pwd2){
    //   location.href="essai.html"
  
    // }
    
    // else{
    //   alert("Veuillez saisir vos informations");
    // }
  //}
})
