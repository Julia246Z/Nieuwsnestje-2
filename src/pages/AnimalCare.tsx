
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <Link to="/collection" className="nieuwsnestje-button-secondary mb-8 inline-block">
            Alle diertjes
          </Link>
        </div>

        {/* Pip in het centrum met aai animatie */}
        <div className="flex justify-center items-center mb-12 relative">
          <div className="relative">
            <div className="w-64 h-64 bg-nieuwsnestje-blue rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-8xl">🐧</span>
            </div>
            
            {/* Hand voor aaien */}
            {showAnimation && selectedAction === 'pet' && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">
                <span style={{ color: '#D2B48C' }}>✋</span>
              </div>
            )}
          </div>
        </div>

        {/* Verzorg bericht in speech bubble stijl */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white border-4 border-nieuwsnestje-blue rounded-3xl p-6 text-center relative">
            <p className="text-xl font-bold text-foreground">
              <strong>Verzorg je diertje!</strong> Geef Pip eten, laat hem lekker slapen of aai hem.
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-nieuwsnestje-blue"></div>
            </div>
          </div>
        </div>

        {/* Actie knoppen in 2x2 grid */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={() => handleActionClick('feed')}
            className="bg-yellow-200 hover:bg-yellow-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
            disabled={showAnimation}
          >
            <div className="text-4xl mb-2">🍎</div>
            <div className="text-lg font-bold">Geef eten</div>
          </button>
          
          <button
            onClick={() => handleActionClick('pet')}
            className="bg-nieuwsnestje-blue hover:bg-blue-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
            disabled={showAnimation}
          >
            <div className="text-4xl mb-2">✋</div>
            <div className="text-lg font-bold">Aai</div>
          </button>
          
          <button
            onClick={() => handleActionClick('play')}
            className="bg-nieuwsnestje-mint hover:bg-green-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
            disabled={showAnimation}
          >
            <div className="text-4xl mb-2">⚽</div>
            <div className="text-lg font-bold">Speel</div>
          </button>
          
          <button
            onClick={() => handleActionClick('sleep')}
            className="bg-orange-200 hover:bg-orange-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg"
            disabled={showAnimation}
          >
            <div className="text-4xl mb-2">🌙</div>
            <div className="text-lg font-bold">Slaap</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCare;
