import { useState } from 'react';
import { Heart, Sparkles, Stars, Flower2, Gift } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import MusicPlayer from '@/components/MusicPlayer';
import LoveButton from '@/components/LoveButton';
import PhotoModal from '@/components/PhotoModal';

// Import all photos
import mainPhoto from '@/assets/sharu2.png';
import photo1 from '@/assets/poth.jfif';
import photo2 from '@/assets/sharu - Copy.png';
import photo3 from '@/assets/Screenshot_20251127-205421_Chrome (1).png';
import photo4 from '@/assets/sharu4.png';
import photo5 from '@/assets/sharu1.png';

interface PhotoData {
  url: string;
  message: string;
}

const lovePhotos: PhotoData[] = [
  { url: photo5, message: "heey shaaru,your smile is very beutiful,so dont forget to smile✨" },
  { url: photo2, message: "You're more precious than gold,Nb:ante ummakkm upppaakm so be happy☺️ 💫" },
  { url: photo3, message: "I value every single moment with you shaaru 📖" },
{ url: photo4, message: "All the things about you make you who you are, and it's all beautiful. ellom angne nne nikkanm and thats you 💃" },
  { url: photo1, message: " pinne eee paripaadi okke inki aadhyayitta, ank ishtapedunn vijaarikkinn, pore  pothe🌹" },
];

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null);
  const [clickedButtons, setClickedButtons] = useState<Set<number>>(new Set());

  const handleButtonClick = (index: number) => {
    setSelectedPhoto(lovePhotos[index]);
    setClickedButtons(prev => new Set([...prev, index]));
  };

  const loveButtons = [
    { icon: Heart, variant: 'primary' as const, label: 'Love' },
    { icon: Sparkles, variant: 'gold' as const, label: 'Sparkle' },
    { icon: Stars, variant: 'rose' as const, label: 'Stars' },
    { icon: Flower2, variant: 'primary' as const, label: 'Rose' },
    { icon: Gift, variant: 'gold' as const, label: 'Gift' },
  ];

  return (
    <div className="min-h-screen romantic-bg overflow-hidden relative">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl text-primary mb-2 drop-shadow-lg animate-in fade-in slide-in-from-top duration-1000">
          Happy Valentine's Day 
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in duration-1000 delay-300">
          Sharu ❤️
        </p>
        
        {/* Main Photo */}
        <div className="relative mb-10 animate-in fade-in zoom-in duration-1000 delay-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl transform scale-110" />
          <div className="relative">
            <img
              src={mainPhoto}
              alt="My Valentine"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
              style={{ boxShadow: 'var(--shadow-glow)' }}
            />
            <div className="absolute -top-2 -right-2">
              <Heart className="w-12 h-12 text-primary fill-primary heartbeat" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles className="w-10 h-10 text-accent sparkle" />
            </div>
          </div>
        </div>
        
        {/* Love Message */}
        <div className="text-center mb-10 max-w-md animate-in fade-in duration-1000 delay-700">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            " eeey shaaaru njn idh vare aarkkum idh poone kodtheella you are the first one ..."
          </p>
        </div>
        
        {/* Love Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
          {loveButtons.map((button, index) => {
            const Icon = button.icon;
            const isClicked = clickedButtons.has(index);
            
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <LoveButton
                  variant={button.variant}
                  onClick={() => handleButtonClick(index)}
                  className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center ${
                    isClicked ? 'ring-4 ring-accent ring-offset-2' : ''
                  }`}
                >
                  <Icon 
                    size={32} 
                    className={`text-white ${button.icon === Heart ? 'fill-white' : ''}`} 
                  />
                </LoveButton>
                <span className="text-sm text-muted-foreground font-medium">
                  {button.label}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Progress indicator */}
        <div className="flex gap-2 mt-4">
          {lovePhotos.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                clickedButtons.has(index)
                  ? 'bg-primary scale-110'
                  : 'bg-border'
              }`}
            />
          ))}
        </div>
        
        {/* Footer Message */}
        <p className="mt-8 text-muted-foreground text-sm">
          Made with 💕 for you
        </p>
      </div>
      
      {/* Photo Modal */}
      <PhotoModal
        isOpen={selectedPhoto !== null}
        onClose={() => setSelectedPhoto(null)}
        photoUrl={selectedPhoto?.url || ''}
        message={selectedPhoto?.message}
      />
    </div>
  );
};

export default Index;
