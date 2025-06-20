
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const AnimalCare = () => {
  const [selectedAction, setSelectedAction] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState(false);

  const handleActionClick = (action: string) => {
    setSelectedAction(action);
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setSelectedAction("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-nieuwsnestje-cream">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Pip in het centrum met aai animatie */}
        <div className="flex justify-center items-center mb-8 relative">
          <div className="relative">
            <div className="text-center">
              <span className="text-8xl">🐧</span>
            </div>
            
            {/* Hand voor aaien */}
            {showAnimation && selectedAction === 'pet' && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
                <span style={{ color: '#D2B48C' }}>✋</span>
              </div>
            )}
          </div>
        </div>

        {/* Alle diertjes knop rechtsboven het tekstblok */}
        <div className="max-w-4xl mx-auto mb-8 relative">
          <Link 
            to="/collection" 
            className="absolute -top-4 right-0 bg-nieuwsnestje-blue text-foreground font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-10"
          >
            Alle diertjes
          </Link>

          {/* Verzorg bericht in speech bubble stijl */}
          <div className="bg-white border-4 border-nieuwsnestje-blue rounded-3xl p-8 text-left">
            <h2 className="text-2xl font-bold text-foreground mb-2">Verzorg je diertje!</h2>
            <p className="text-lg text-foreground">
              Geef Pip eten, laat hem lekker slapen of aai hem.
            </p>
          </div>
        </div>

        {/* Actie knoppen in 2x2 grid */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={() => handleActionClick('feed')}
            className="bg-yellow-200 hover:bg-yellow-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center"
            disabled={showAnimation}
          >
            <div className="text-5xl mb-3">🍎</div>
            <div className="text-lg font-bold text-foreground">Geef eten</div>
          </button>
          
          <button
            onClick={() => handleActionClick('pet')}
            className="bg-nieuwsnestje-blue hover:bg-blue-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center"
            disabled={showAnimation}
          >
            <div className="text-5xl mb-3">✋</div>
            <div className="text-lg font-bold text-foreground">Aai</div>
          </button>
          
          <button
            onClick={() => handleActionClick('play')}
            className="bg-nieuwsnestje-mint hover:bg-green-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center"
            disabled={showAnimation}
          >
            <div className="text-5xl mb-3">⚽</div>
            <div className="text-lg font-bold text-foreground">Speel</div>
          </button>
          
          <button
            onClick={() => handleActionClick('sleep')}
            className="bg-orange-200 hover:bg-orange-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center"
            disabled={showAnimation}
          >
            <div className="text-5xl mb-3">🌙</div>
            <div className="text-lg font-bold text-foreground">Slaap</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCare;
