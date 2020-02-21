'use strict';

(function() {
  const mouseHover = () => {
    const container = document.querySelector('.grid-container');

    const coloringBox = () => {
      const target = event.target;

      if (target.matches('.box') && event.type === 'mouseover') {
        target.classList.add('orange');
      }
      
      if (event.type === 'mouseout') {
        target.classList.remove('orange');
      }
    };

    container.addEventListener('mouseover', coloringBox);
    container.addEventListener('mouseout', coloringBox);
  };

  mouseHover();
})();