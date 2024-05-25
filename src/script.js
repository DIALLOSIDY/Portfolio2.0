

const emailInput = document.getElementById("from_email");

function validerEmail(emailValue) {
    let regex = new RegExp("[a-z-0-9._]+@[a-z-0-9._]+\\.[a-z-0-9._]+");
    if (!regex.test(emailValue)) {
        throw new Error("L'email n'est pas valide");
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    try {
        validerEmail(emailInput.value);
        const btn = document.querySelector('.btn');
        btn.value = 'Sending...';
        const serviceID = 'default_service';
        const templateID = 'template_z7331eg';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
                form.reset();
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    } catch (error) {
        alert(error.message);
    }
});

 


/*FIN DU MESSAGE  */

/*GESTION BURGER */

const icon =document.querySelector(".icon")
const header =document.querySelector(".header")
const items =document.getElementById("items")
const exit = document.querySelector(".exit" ) 


icon.addEventListener("click",()=>{
    items.classList.remove("nav-bar-items")
    items.classList.add("popup")
    icon.style.display="none"
    exit.style.display="block"
    close =true
    console.log(close )
    
})

exit.addEventListener("click" ,()=>{
    items.classList.add("nav-bar-items")
    items.classList.remove("popup")
    icon.style.display="block"
    exit.style.display="none"
    close =false


})


/*FIN GESTION BURGER */

/*POUR FERMER LA POPUP QUAND ON CLICK SUR UN ITEM  */
const allItems =document.querySelectorAll("#items a")

    for(i=0 ;i<allItems.length ;i++){
        allItems[i].addEventListener("click",(e)=>{
            items.classList.add("nav-bar-items")
            items.classList.remove("popup")
            icon.style.display="block"
            exit.style.display="none"
            console.log("cliqué")
    
        })
    }


/*FIN ... */

/*CLICK SUR LES ITEMS DE LA BARRE DE NAVIGATION  */

const navBarItems = document.querySelectorAll('.nav-bar-items a');

navBarItems.forEach(item => {
     
    item.addEventListener("click" ,()=>{
        navBarItems.forEach(it =>{
            it.classList.remove("active")
        });
        item.classList.add("active")


    })
    
});

/*FIN CLICK */

new Typed('.passion', {
    strings : [
        'Étudiant en informatique 👨‍🎓 ' ,
        'Passionné de développement de logiciels 💻👨‍💼 ' ,
        'Passionné de développement mobile 📱👨‍💻 ' ,
        'passionné de cybersécurité 🔒🖥️ '
           ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });


 
    
   
    