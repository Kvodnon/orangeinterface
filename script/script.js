'use strict';

(function () {
  let lastFocusedBox = false,
    message = "Click at rect";

  const focusedBox = () => {
    const container = document.querySelector('.grid-container');

    const coloringBox = () => {
      const target = event.target;

      if (target.matches('.box') && event.type === 'mouseover') {
        target.classList.add('orange');

        if (lastFocusedBox && target !== lastFocusedBox) {
          lastFocusedBox.classList.remove('orange');
        }

        lastFocusedBox = target;
      }
    };
    
    container.addEventListener('mouseover', coloringBox);
    container.addEventListener('mouseout', coloringBox);
  };

  focusedBox();

  const clickingBox = (event) => {
    const target = event.target;

    if (target.matches('.box')) {
      console.log(message, target.getAttribute('data-number'));
    }
  };
  
  container.addEventListener('click', clickingBox);

  const keys = () => {
    const keyDown = () => {
      const box = document.querySelector('.orange');

      let direction;

      if (event.code === 'Enter') {
        clickingBox({target: box});
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
          direction = 'data-right';
        break;

        case 'ArrowLeft':
          direction = 'data-left';
        break;

        case 'ArrowUp':
          direction = 'data-up';
        break;
        
        case 'ArrowDown':
          direction = 'data-down';
      }

      const number = box.getAttribute(direction);

      if (+number) {
        const next = document.querySelector(`[data-number="${number}"]`);
  
        box.classList.remove('orange')
        lastFocusedBox = next;
        next.classList.add('orange');
      }
    };

    document.addEventListener('keydown', keyDown);
  };

  keys();
})();