import { useEffect, useRef, useState } from 'react';

const MagneticCursorAdvanced = () => {
  const cursorRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Check for hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isHoverable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('hoverable');
      
      setIsHovering(!!isHoverable);
    };

    const animate = () => {
      // Smooth follow (magnetic effect)
      cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * 0.2;
      cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * 0.2;
      
      if (cursor) {
        cursor.style.transform = `translate(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px)`;
        
        // Change size based on state
        if (isClicking) {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
          cursor.style.backgroundColor = '#3b82f6';
          cursor.style.borderColor = '#ffffff';
        } else if (isHovering) {
          cursor.style.width = '50px';
          cursor.style.height = '50px';
          cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
          cursor.style.borderColor = '#3b82f6';
          cursor.style.borderWidth = '3px';
        } else {
          cursor.style.width = '30px';
          cursor.style.height = '30px';
          cursor.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
          cursor.style.borderColor = '#3b82f6';
          cursor.style.borderWidth = '2px';
        }
      }
      
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isHovering, isClicking]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        borderRadius: '50%',
        border: '2px solid #3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        pointerEvents: 'none',
        zIndex: 9999,
        left: '-15px',
        top: '-15px',
        transition: 'width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default MagneticCursorAdvanced;