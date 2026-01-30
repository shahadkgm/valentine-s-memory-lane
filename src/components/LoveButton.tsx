import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LoveButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'gold' | 'rose';
  className?: string;
}

const LoveButton = ({ onClick, children, variant = 'primary', className }: LoveButtonProps) => {
  const variants = {
    primary: 'love-button',
    gold: 'love-button gold-accent',
    rose: 'love-button bg-gradient-to-br from-rose-400 to-pink-500',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        variants[variant],
        'cursor-pointer transform hover:scale-110 active:scale-95 transition-all duration-300',
        className
      )}
    >
      {children}
    </button>
  );
};

export default LoveButton;
