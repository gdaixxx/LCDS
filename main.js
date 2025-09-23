// window.addEventListener('DOMContentLoaded', () => {
//   const element = document.querySelector('#banner');

//   setTimeout(() => {
//     // Primera animación: headShake
//     element.classList.add('animate__animated', 'animate__headShake');

//     element.addEventListener('animationend', function headShakeEnd(e) {
//       if (e.animationName === 'headShake') {
//         element.classList.remove('animate__headShake');

//         // Segunda animación: jello
//         element.classList.add('animate__jello');

//         element.addEventListener('animationend', function jelloEnd(e) {
//           if (e.animationName === 'jello') {
//             element.classList.remove('animate__jello');

//             // Tercera animación: swing
//             element.classList.add('animate__swing');

//             element.addEventListener('animationend', function swingEnd(e) {
//               if (e.animationName === 'swing') {
//                 element.classList.remove('animate__swing');

//                 // Cuarta animación: hinge
//                 element.classList.add('animate__hinge', 'animate__slow');

//                 element.addEventListener('animationend', function hingeEnd(e) {
//                   if (e.animationName === 'hinge') {
//                     element.style.display = 'none';

//                     const bottomElement = document.querySelector('#banner-bottom');
//                     bottomElement.style.display = 'flex';
//                     bottomElement.classList.add('animate__animated', 'animate__flash');
//                   }
//                 }, { once: true });
//               }
//             }, { once: true });
//           }
//         }, { once: true });
//       }
//     }, { once: true });
//   }, 500); // Delay inicial de 2 segundos
// });

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#banner');
  const animations = ['pulse', 'headShake', 'jello', 'swing', 'hinge'];

  const runAnimationSequence = (el, sequence, index = 0) => {
    if (index >= sequence.length) {
      el.style.display = 'none';

      const bottomElement = document.querySelector('#banner-bottom');
      bottomElement.style.display = 'flex';
      bottomElement.classList.add('animate__animated', 'animate__flash');
      return;
    }

    const animationName = sequence[index];
    el.classList.add('animate__animated', `animate__${animationName}`);

    el.addEventListener('animationend', function handler(e) {
      if (e.animationName === animationName) {
        el.classList.remove(`animate__${animationName}`);
        el.removeEventListener('animationend', handler);
        runAnimationSequence(el, sequence, index + 1);
      }
    });
  };

  setTimeout(() => {
    runAnimationSequence(element, animations);
  }, 500); // Delay inicial
});

  AOS.init();