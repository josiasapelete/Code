function afficher () {
    // Récupérer  les éléments des input
    let name=document.getElementById("nom");
    let email=document.getElementById("email");
    let note=document.getElementById("note");
    let coach=document.getElementById("coach");
    let experience=document.getElementById("experience");

    // des classes pour afficher les les données récupérées
    let username=document.querySelector(".username");
    let user_mail=document.querySelector(".user_mail");
    let user_note=document.querySelector(".user_note");
    let user_coach=document.querySelector(".user_coach");
    let user_experience=document.querySelector(".user_experience");

    // afficher les données récupérées
    username.innerHTML= name.value;
    user_mail.innerHTML= email.value;
    user_note.innerHTML= note.value;
    user_coach.innerHTML= coach.value;
    user_experience.innerHTML= experience.value;
   

}