
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

  const getAnimationIcon = () => {
    switch (selectedAction) {
      case 'feed':
        return '🍎';
      case 'pet':
        return '✋';
      case 'play':
        return '⚽';
      case 'sleep':
        return '💤';
      default:
        return '';
    }
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

        {/* Pip in het centrum */}
        <div className="flex justify-center items-center mb-12 relative">
          <div className="relative">
            <div className="w-64 h-64 bg-nieuwsnestje-blue rounded-full flex items-center justify-center shadow-2xl animate-bounce-gentle">
              <span className="text-8xl">🐧</span>
            </div>
            
            {showAnimation && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
                {getAnimationIcon()}
              </div>
            )}
            
            {showAnimation && selectedAction === 'pet' && (
              <div className="absolute top-0 right-0 text-6xl animate-bounce">
                <span className="text-orange-400">✋</span>
              </div>
            )}
          </div>
        </div>

        {/* Verzorg bericht */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white border-4 border-nieuwsnestje-blue rounded-3xl p-6 text-center">
            <p className="text-xl font-bold text-foreground">
              <strong>Verzorg je diertje!</strong> Geef Pip eten, laat hem lekker slapen of aai hem.
            </p>
          </div>
        </div>

        {/* Actie knoppen */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <button
            onClick={() => handleActionClick('feed')}
            className="animal-care-button bg-yellow-200 hover:bg-yellow-300"
            disabled={showAnimation}
          >
            <div className="text-4xl mb-2">🍎</div>
            <div className="text-lg font-bold">Geef eten</div>
          </button>
          
          <button
            onClick={() => handleActionClick('pet')}
            className="animal-care-button bg-nieuwsnestje-blue hover:bg-blue-300"
            disabled={showAnimation}
          >
            <div className="text-4xl mb-2">✋</div>
            <div className="text-lg font-bold">Aai</div>
          </button>
          
          <button
            onClick={() => handleActionClick('play')}
            className="animal-care-button bg-nieuwsnestje-mint hover:bg-green-300"
            disabled={showAnimation}
          >
            <div className="text-4xl mb-2">⚽</div>
            <div className="text-lg font-bold">Speel</div>
          </button>
          
          <button
            onClick={() => handleActionClick('sleep')}
            className="animal-care-button bg-orange-200 hover:bg-orange-300"
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
