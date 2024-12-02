import { useState, useEffect } from 'react';

const useMouseSlide = () => {
  const [isMouseClicked, setIsMouseClicked] = useState(false);
  const [mouseSlideDistance, setMouseSlideDistance] = useState(0);
  const [startX, setStartX] = useState(0); // Store initial position of mouse/touch

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsMouseClicked(true);
      setStartX(e.clientX); // Save initial position on mouse down
    };

    const handleTouchStart = (e) => {
      setIsMouseClicked(true);
      setStartX(e.touches[0].clientX); // Save initial position on touch start
    };

    const handleMouseMove = (e) => {
      if (isMouseClicked) {
        const currentX = e.clientX;
        setMouseSlideDistance(currentX - startX); // Calculate distance from initial position
      }
    };

    const handleTouchMove = (e) => {
      if (isMouseClicked) {
        const currentX = e.touches[0].clientX; // Use touch's clientX
        setMouseSlideDistance(currentX - startX); // Calculate distance from initial position
      }
    };

    const handleMouseUp = () => {
      setIsMouseClicked(false);
      setMouseSlideDistance(0);
    };

    const handleTouchEnd = () => {
      setIsMouseClicked(false);
      setMouseSlideDistance(0); 
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMouseClicked, startX]);

  return { isMouseClicked, mouseSlideDistance };
};

export default useMouseSlide;
