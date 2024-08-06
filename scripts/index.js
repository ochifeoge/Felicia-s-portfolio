
ScrollReveal().reveal('.reveal-logo', {
    origin: 'left',      
    distance: '50px',   
    duration: 1000,     
    easing: 'ease-in-out', 
    opacity: 0,         
    delay: 200          
});
ScrollReveal().reveal('.reveal-large-menu', {
    origin: 'top',      
    distance: '50px',   
    duration: 1000,     
    easing: 'ease-in-out', 
    opacity: 0,         
    delay: 200          
});
ScrollReveal().reveal('.reveal-header-btn', {
    origin: 'right',      
    distance: '50px',   
    duration: 1000,     
    easing: 'ease-in-out', 
    opacity: 0,         
    delay: 200          
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 500,
    autoplay: {
        delay: 15000, // 
        disableOnInteraction: true, 
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
const header = document.querySelector('header');
window.addEventListener('scroll', ()=> {

scrollAnimation();
    
});

function scrollAnimation() {
    
    // add scrolled class to header on the scroll position
   
    
        header.classList.toggle('scrolled', window.scrollY > 0);
    
}


    document.querySelectorAll('.tabs').forEach(tab => {
    tab.addEventListener('click', (event) => {
        // Get the target content ID from the clicked tab's data attribute
        const targetId = event.currentTarget.getAttribute('data-target');
        
        // Remove 'active' class from all tabs and tab-content
        document.querySelectorAll('.tabs').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add 'active' class to the clicked tab
        event.currentTarget.classList.add('active');
        
        // Show the content corresponding to the clicked tab
        document.getElementById(targetId).classList.add('active');
    });
});

    
document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons and text elements
    const buttons = document.querySelectorAll('.toggle-button');
    const texts = document.querySelectorAll('.recommendation-text');

    // Attach event listeners to each button
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const textContent = texts[index]; // Get the corresponding text element

            if (textContent.classList.contains('expanded')) {
                textContent.classList.remove('expanded');
                button.textContent = 'Read More';
            } else {
                textContent.classList.add('expanded');
                button.textContent = 'Read Less';
            }
        });
    });
});

  //MENU
  const menu = document.querySelector('.js-menu');


  menu.addEventListener('click', ()=> {
    document.body.classList.toggle('open');
  })
  











