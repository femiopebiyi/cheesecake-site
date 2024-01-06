const navButtons = document.querySelectorAll(".ul li")

const hamButton = document.querySelector(".ham-container");
const hamMenu = document.querySelector(".ham-nav");

navButtons[0].classList.add("clicked")

navButtons.forEach(function(button){
    button.addEventListener('click', function(e){
        // e.preventDefault()
        button.classList.add('clicked')
        navButtons.forEach(function(otherButton){
            if(otherButton !== button){
                otherButton.classList.remove('clicked')
            }
        }) 
    })
})

hamButton.addEventListener ("click", ()=>{


        hamMenu.classList.toggle("clickedd");
        




        // if(hamMenu.style.display === "none"){
        //     hamMenu.style.display = "flex"
        // }else{
        //     hamMenu.style.display = "none"
        // }
        

        
    })
    

            document.getElementById('menu1').addEventListener('click', function () {
  this.classList.toggle('close');
});
