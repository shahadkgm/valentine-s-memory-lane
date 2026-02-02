import { X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl: string;
  message?: string;
}

const PhotoModal = ({ isOpen, onClose, photoUrl, message }: PhotoModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={cn(
          "relative max-w-lg w-full bg-card rounded-3xl overflow-hidden shadow-2xl",
          "transform transition-all duration-500 ease-out",
          "animate-in fade-in zoom-in-95 "
        )}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <X size={20} className="text-primary" />
        </button>
        
        <div className="relative">
          <img
            src={photoUrl}
            alt="Special moment"
            className="w-full h-80 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {message && (
          <div className="p-6 text-center">
            <Heart className="mx-auto mb-3 text-primary fill-primary heartbeat" size={32} />
            <p className="text-lg text-foreground font-medium">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;
