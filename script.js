let etat=false;

function menuBurger(){
    etat=!etat;
    if (etat==true){
        document.getElementById("navbar-mobile-container").style.display = "block";
    } else {
        document.getElementById("navbar-mobile-container").style.display = "none";
    }
}


function formValide(){
    let nom=document.forms["form"]["nom"].value;
    if (nom==""){
        alert("Le nom doit être rempli");
    }
    let prenom=document.forms["form"]["prenom"].value;
    if (prenom==""){
        alert("Le prenom doit être rempli");
    }
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mail=document.forms["form"]["courriel"].value;
    if (mail==""){
        alert("L'adresse mail doit être remplie");
    } else {
        if (pattern.test(mail)==false){
            alert("L'adresse mail n'est pas valide");
        }
    }
    let message=document.forms["form"]["message"].value;
    if (message==""){
        alert("Le message doit être rempli");
    }
}

(function() {
    emailjs.init("mscLAllNBsec42NXz"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const templateParams = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('courriel').value,
        entreprise: document.getElementById('entreprise').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_rmlw1e6', 'template_f2catgn', templateParams)
        .then(function(response) {
            alert('Message envoyé avec succès !');
            document.getElementById('contact-form').reset(); 
        }, function(error) {
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            console.log('ERREUR:', error);
        });
});
