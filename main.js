const element = document.querySelector('#banner');

window.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('#banner');
    
    setTimeout(() => {
    element.classList.add('animate__animated', 'animate__hinge','animate__slow');
    
    element.addEventListener('animationend', () => {
        element.style.display = 'none';
        const bottomElement = document.querySelector('#banner-bottom');
        bottomElement.style.display = 'flex';
        // bottomElement.classList.add('animate__animated', 'animate__flash');
      });

  }, 2000); // 2 segundos de delay
});