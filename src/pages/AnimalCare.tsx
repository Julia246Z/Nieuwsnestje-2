
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
    }, 3000);
  };

  const renderPipWithAction = () => {
    if (!showAnimation) {
      // Normal Pip - happy and sitting
      return (
        <div className="text-center relative">
          <div className="text-9xl"><img src="./public/images/pip-blij.png"></img></div>
        </div>
      );
    }

    switch (selectedAction) {
      case 'feed':
        return (
          <div className="text-center relative">
            <div className="text-9xl"><img src="./public/images/pip-blij.png"></img></div>
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
              <img src="./public/images/appel.png"></img>
            </div>
          </div>
        );
      case 'pet':
        return (
          <div className="text-center relative">
            <div className="text-9xl"><img src="./public/images/pip-blij.png"></img></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
              <img src="./public/images/hand.png"></img>
            </div>
          </div>
        );
      case 'play':
        return (
          <div className="text-center relative">
            <div className="text-9xl animate-bounce"><img src="./public/images/pip-blij.png"></img></div>
            <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce">
              <img src="./public/images/bal.png"></img>
            </div>
          </div>
        );
      case 'sleep':
        return (
          <div className="text-center relative">
            <div className="text-9xl"><img src="./public/images/pip-blij.png"></img></div>
            <div className="absolute -top-8 -right-2 text-3xl animate-pulse">
              <img src="./public/images/maan.png"></img>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center">
            <div className="text-9xl"><img src="./public/images/pip-blij.png"></img></div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-nieuwsnestje-cream">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Pip in het centrum */}
        <div className="flex justify-center items-center mb-8 relative">
          <div className="relative">
            {renderPipWithAction()}
          </div>
          
          {/* Alle diertjes knop rechtsboven */}
          <Link 
            to="/collection" 
            className="absolute top-0 right-0 bg-nieuwsnestje-blue text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Alle diertjes
          </Link>
        </div>

        {/* Verzorg bericht in speech bubble stijl */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white border-4 border-nieuwsnestje-blue rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Verzorg je diertje!
            </h2>
            <p className="text-xl text-foreground">
              Geef Pip eten, laat hem lekker slapen of aai hem.
            </p>
          </div>
        </div>

        {/* Actie knoppen in horizontale rij */}
        <div className="flex justify-center gap-6 max-w-5xl mx-auto">
          <button
            onClick={() => handleActionClick('feed')}
            className="bg-yellow-300 hover:bg-yellow-400 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center min-w-[160px] min-h-[160px]"
            disabled={showAnimation}
          >
            <div className="text-6xl mb-3"><img src="./public/images/appel.png"></img></div>
            <div className="text-lg font-bold text-foreground">Geef eten</div>
          </button>
          
          <button
            onClick={() => handleActionClick('pet')}
            className="bg-nieuwsnestje-blue hover:bg-blue-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center min-w-[160px] min-h-[160px]"
            disabled={showAnimation}
          >
            <div className="text-6xl mb-3"><img src="./public/images/hand.png"></img></div>
            <div className="text-lg font-bold text-white">Aai</div>
          </button>
          
          <button
            onClick={() => handleActionClick('play')}
            className="bg-nieuwsnestje-mint hover:bg-green-300 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center min-w-[160px] min-h-[160px]"
            disabled={showAnimation}
          >
            <div className="text-6xl mb-3"><img src="./public/images/bal.png"></img></div>
            <div className="text-lg font-bold text-foreground">Speel</div>
          </button>
          
          <button
            onClick={() => handleActionClick('sleep')}
            className="bg-orange-300 hover:bg-orange-400 rounded-3xl p-8 text-center font-bold text-xl transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg flex flex-col items-center justify-center min-w-[160px] min-h-[160px]"
            disabled={showAnimation}
          >
            <div className="text-6xl mb-3"><img src="./public/images/maan.png"></img></div>
            <div className="text-lg font-bold text-foreground">Slaap</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCare;
