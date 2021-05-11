import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = {
  container: '#page_container',
  options: {
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    touchMultiplier: 2.5,
    lerp: 0.08,
  },
};

const Scroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll;

    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    });
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll;

    locomotiveScroll.on('scroll', func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute('data-direction', func.direction);
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};

export default Scroll;
