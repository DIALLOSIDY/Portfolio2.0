
/*GESTION DE L'ENVOI DU MESSAGE  */

const btn = document.querySelector('.btn');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_z7331eg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
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
    
})

exit.addEventListener("click" ,()=>{
    items.classList.add("nav-bar-items")
    items.classList.remove("popup")
    icon.style.display="block"
    exit.style.display="none"


})


/*FIN GESTION BURGER */

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
        'Développeur de logiciels 💻👨‍💼 ' ,
        'Développeur mobile 📱👨‍💻 ' ,
        'Passionné de cybersécurité 🔒🖥️ '
           ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });


 
    
   
    