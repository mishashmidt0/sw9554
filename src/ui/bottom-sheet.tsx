import { ReactNode, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';

interface BottomSheetProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  const sheetRef = useRef(null);

  const springProps = useSpring({
    from: { transform: 'translateY(100%)', opacity: 0 },
    to: {
      transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
      opacity: isOpen ? 1 : 0,
    },
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sheetRef.current &&
      !(sheetRef.current as HTMLElement).contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <animated.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: isOpen ? 'block' : 'none',
        zIndex: 998,
      }}
    >
      <animated.div
        ref={sheetRef}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80%',
          background: 'white',
          boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 999,
          borderRadius: '10px 10px 0 0',
          overflow: 'hidden',
          ...springProps,
        }}
      >
        {children}
      </animated.div>
    </animated.div>
  );
};

export default BottomSheet;
