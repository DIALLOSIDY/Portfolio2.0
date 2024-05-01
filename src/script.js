

const navBarItems = document.querySelectorAll('.nav-bar-items a');

navBarItems.forEach(item => {
     
    item.addEventListener("click" ,()=>{
        navBarItems.forEach(it =>{
            it.classList.remove("active")
        });
        item.classList.add("active")


    })
    
});

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


 
    
   
    