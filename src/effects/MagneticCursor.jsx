import { useEffect, useRef } from 'react';

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const bubbleRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const bubblePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const bubble = bubbleRef.current;
    
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Small dot follows faster
      cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * 0.2;
      cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * 0.2;
      
      // Bubble follows slower
      bubblePosRef.current.x += (mouseRef.current.x - bubblePosRef.current.x) * 0.08;
      bubblePosRef.current.y += (mouseRef.current.y - bubblePosRef.current.y) * 0.08;
      
      if (cursor && bubble) {
        cursor.style.transform = `translate(${cursorPosRef.current.x - 4}px, ${cursorPosRef.current.y - 4}px)`;
        bubble.style.transform = `translate(${bubblePosRef.current.x - 10}px, ${bubblePosRef.current.y - 10}px)`;
      }
      
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Small magnetic dot - 8px */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          pointerEvents: 'none',
          zIndex: 9999,
          left: '0',
          top: '0',
          boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
        }}
      />
      
      {/* One bubble that follows - 20px */}
      <div
        ref={bubbleRef}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '1.5px solid rgba(59, 130, 246, 0.3)',
          backgroundColor: 'rgba(59, 130, 246, 0.08)',
          pointerEvents: 'none',
          zIndex: 9998,
          left: '0',
          top: '0',
        }}
      />
    </>
  );
};

export default MagneticCursor;