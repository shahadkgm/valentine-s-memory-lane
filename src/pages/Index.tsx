import { useState } from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
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
  { url: photo3, message: "payment llooode ank kittyalle cheetha kett thudakkavm 😅 ndhaaylm thanks mol📖" },
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
    { icon: Heart, variant: 'primary' as const, label: '' },
    { icon: Heart, variant: 'primary' as const, label: '' },
    { icon: Heart, variant: 'primary' as const, label: '' },
    { icon: Heart, variant: 'primary' as const, label: '' },
    { icon: Heart, variant: 'primary' as const, label: '' },
  ];

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth romantic-bg">
      {/* Fixed Elements */}
      <FloatingHearts />
      <MusicPlayer />

      {/* --- PAGE 1: MAIN CONTENT --- */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-8 snap-start">
        
        {/* Title */}
       <h1 className="text-3xl sm:text-4xl md:text-7xl text-primary mb-2 drop-shadow-lg animate-in fade-in slide-in-from-top duration-1000 text-center px-4">
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 flex flex-col items-center animate-bounce text-primary/60">
          <p className="text-xs font-medium uppercase tracking-widest mb-1">Scroll Down</p>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* --- PAGE2 : FULL SIZE IMAGE SURPRISE --- */}
      <section className="relative h-screen w-full snap-start overflow-hidden bg-black flex items-center justify-center">
        {/* Background Full Image */}
        <img 
          src={photo5} 
          alt="Full Size Surprise" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[2000ms] hover:scale-105"
        />
        
        {/* Overlay Text */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl text-white font-serif italic mb-4 drop-shadow-2xl">
            Forever & Always
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-md">
           "Life’s a lot easier when you have a friend like you to share it with. Thanks for the endless laughs and for always matching my energy, no matter how chaotic things get!"
          </p>
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      </section>
       {/* --- PAGE 3: FULL SIZE IMAGE SURPRISE --- */}
      <section className="relative h-screen w-full snap-start overflow-hidden bg-black flex items-center justify-center">
        {/* Background Full Image */}
        <img 
          src={photo2} 
          alt="Full Size Surprise" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[2000ms] hover:scale-105"
        />
        
        {/* Overlay Text */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl text-white font-serif italic mb-4 drop-shadow-2xl">
             One  & Only
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-md">
            "From all the random laughs to the deep talks, there’s never a dull moment with you. 
  Thanks for being the one I can always count on for a good time and even better memories."
          </p>
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      </section>
       
      {/* last */}
       <section className="relative h-screen w-full snap-start overflow-hidden bg-black flex items-center justify-center">
        <img 
          src={photo4} 
          alt="Full Size Surprise" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[2000ms] hover:scale-105"
        />
        
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl text-white font-serif italic mb-4 drop-shadow-2xl">
           Thanks for All mr sharu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-md">
            "They say good friends are hard to find, but I clearly hit the jackpot. 
  Thanks for being the most genuine person I know and for always keeping it real with me."
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      </section>
       <section className="relative h-screen w-full snap-start overflow-hidden bg-black flex items-center justify-center">
        {/* Background Full Image */}
        <img 
          src={photo3} 
          alt="Full Size Surprise" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[2000ms] hover:scale-105 "
        />
        
        {/* Overlay Text */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl text-white font-serif italic mb-4 drop-shadow-2xl">
            appo❤️ bye
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-md">
             "hey i just keep distance for your sake oke mool,and engand nalla cring aaaayille 😅 "
          
          </p>
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      </section>
      
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