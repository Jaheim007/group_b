//Verfication du mot de passe
const btn = document.getElementById('btn'); 
btn.onclick = function(){
    var password = document.getElementById('Pwd1').value, 
        confirmpassword = document.getElementById('Pwd2').value;

    if(password ==""){
        alert("Veuillez saisir votre mot de passe");
    }
    else if(password != confirmpassword){
        alert("le mot de passe ne corespond pas")
        return false 
    }
    else if (password == confirmpassword){
        alert("correspondance de mot de passe")
        return true
    }

}
//localStorage pour le formel  
btn.onclick = (e) => {
    event.preventDefault();
    location.href = "../connexion.html";

    let inscrits = JSON.parse(localStorage.getItem("inscription")) || [];
    inscrits.push({
			user: Username.value,
			nom: Nom.value,
			email: Email.value,
			password1: Pwd1.value,
			password2: Pwd2.value
		})
    localStorage.setItem("inscription", JSON.stringify(inscrits));
    }

