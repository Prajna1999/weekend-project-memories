// Selecting all the panels with querySelectorAll

const panels=document.querySelectorAll(".panel");

// Adding event listener to each of the panels to loop through.
panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })

})

// removing act{ive classes from other panels.
function removeActiveClasses(){

    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
}
