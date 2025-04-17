
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium', className }) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl'
  };
  
  return (
    <div className={cn('font-bold', sizeClasses[size], className)}>
      <span className="text-white">portfolio</span>
      <span className="text-brand-purple">.</span>
    </div>
  );
};
