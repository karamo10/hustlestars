window.addEventListener("scroll", function() {
    const navDestop = document.querySelector(".nav_desktop");
    const scrollHeight = window.scrollY;

    if(scrollHeight > 50) {
        navDestop.classList.add("active");
    }
    else{
        navDestop.classList.remove("active");
    }
})

// buttons stying after clicking

  const buttons = document.querySelectorAll('.flash_sales .btn');

  buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
      
      button.textContent = 'Adding...'; 
      
      
      setTimeout(() => {
        button.textContent = 'Added!'; 
        button.style.backgroundColor = '#4caf50'; 
        button.style.color = '#fff'; 
      }, 1000); 

      
      setTimeout(() => {
        button.textContent = 'Buy';
        button.style.backgroundColor = 'transparent';
        button.style.color = 'inherit';
      }, 3000); 
    });
  });

 
    document.addEventListener("DOMContentLoaded", function() {
        var typedEffect = new Typed(".multitext", {
            strings: ["designing", "printing"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
    });