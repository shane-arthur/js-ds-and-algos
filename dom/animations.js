// <!DOCTYPE HTML>
// <html>

// <head>
//   <meta charset="utf-8">
// </head>

// <body>

// <div id="elem">
//   <span>
//     Click me!
//   </span>

// </div>



// </body>

// </html>



window.addEventListener('DOMContentLoaded', () => {
    moveElement(4000, 100, elem);
 });
 
 function moveElement(duration, distance, element) {
 
   const start = performance.now();
 
   function move(currentTime) {
     const elapsedTime = currentTime - start;
     const progress = elapsedTime / duration;
     const moveDistance = progress * distance;
     element.style.transform = `translateX(${moveDistance}px)`;
 
     if (moveDistance < distance) {
       requestAnimationFrame(move);
     }
 
   }
 
 move(performance.now());
 
 }
 