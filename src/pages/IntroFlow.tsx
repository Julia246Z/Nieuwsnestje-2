
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const IntroFlow = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const openGift = () => {
    setStep(2);
    // Small delay before showing Pip jumping out
    setTimeout(() => setStep(3), 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        {/* Step 1: Closed Gift */}
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Je hebt een nieuw diertje!</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Klik op het cadeautje om het uit te pakken
            </p>
            
            <div className="flex justify-center">
              <div 
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={openGift}
              >
                <div className="w-64 h-64 relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl relative shadow-2xl">
                    <div className="absolute inset-4 bg-gradient-to-br from-orange-300 to-red-300 rounded-2xl"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-b-2xl"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-yellow-300 to-orange-300 rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Gift Opening Animation */}
        {step === 2 && (
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Open gift box */}
                <div className="w-64 h-32 relative">
                  <div className="w-full h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-b-3xl relative shadow-2xl">
                    <div className="absolute inset-4 bg-gradient-to-br from-orange-300 to-red-300 rounded-b-2xl"></div>
                  </div>
                </div>
                
                {/* Pip jumping out with animation */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-24 h-24 bg-nieuwsnestje-blue rounded-full flex items-center justify-center border-4 border-nieuwsnestje-orange">
                    <span className="text-4xl">🐧</span>
                  </div>
                </div>
                
                {/* Confetti effect */}
                <div className="absolute -top-8 left-8 text-2xl animate-pulse">⭐</div>
                <div className="absolute -top-12 right-8 text-2xl animate-pulse">✨</div>
                <div className="absolute -top-6 left-16 text-xl animate-pulse">🎉</div>
                <div className="absolute -top-10 right-16 text-xl animate-pulse">🎊</div>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold text-nieuwsnestje-orange mb-4">Jeeeeeee!</h2>
            <p className="text-2xl text-foreground">Je hebt een nieuw diertje</p>
          </div>
        )}

        {/* Step 3: Meet Pip */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ontmoet Pip!</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Pip de pinguïn gaat je deze week het nieuws vertellen
            </p>
            
            <div className="flex justify-center mb-12">
              <div className="w-64 h-64 bg-nieuwsnestje-blue rounded-full flex items-center justify-center shadow-2xl border-8 border-nieuwsnestje-orange">
                <span className="text-8xl">🐧</span>
              </div>
            </div>
            
            <div className="flex justify-end max-w-2xl mx-auto">
              <Link to="/" className="nieuwsnestje-button text-xl px-12 py-6">
                Ga verder
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroFlow;
