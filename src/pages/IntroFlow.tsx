
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const IntroFlow = () => {
  const [step, setStep] = useState(1);

  const openGift = () => {
    setStep(2);
    // Small delay before showing the "Ga verder" button
    setTimeout(() => setStep(3), 1500);
  };

  const goToNews = () => {
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-[#FFF6EC]">
      <Navigation />
      
      <div className="container mx-auto px-6 py-16">
        {/* Step 1: Closed Gift */}
        {step === 1 && (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#2B4C85] mb-6">Je hebt een nieuw diertje!</h1>
            <p className="text-2xl text-[#5A6B8C] mb-16">
              Klik op het pakketje om je nieuwe diertje te ontmoeten
            </p>
            
            <div className="flex justify-center">
              <div 
                className="cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={openGift}
              >
                {/* Gift Box - matching the reference design */}
                <img
                  src="/images/cadeautje.png"
                  alt="Cadeautje"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Pip appears from gift with celebration */}
        {step === 2 && (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-[#2B4C85] mb-6">Jeeeeee!</h1>
            <p className="text-2xl text-[#5A6B8C] mb-16">
              Je hebt een nieuw diertje
            </p>
            
            <div className="flex justify-center relative">
              {/* Open gift box base */}
              <div className="relative">
                <img
                  src="/images/pip-uit-cadeau.png"
                  alt="Cadeautje"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Meet Pip */}
        {step === 3 && (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-[#2B4C85] mb-6">Ontmoet Pip!</h1>
            <p className="text-2xl text-[#5A6B8C] mb-16">
              Pip de pinguïn gaat je deze week het nieuws vertellen
            </p>
            
            <div className="flex justify-center mb-16">
              {/* Standalone Pip */}
                <img
                  src="/images/pip-blij.png"
                  alt="Cadeautje"
                  className="w-64 h-64 object-contain"
                />
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={goToNews}
                className="bg-[#FFA94D] hover:bg-[#FF9A3D] text-white font-bold text-2xl px-12 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border-4 border-[#FF9A3D]"
              >
                Ga verder
              </button>
            </div>
          </div>
        )}

        {/* Step 4: News Articles */}
        {step === 4 && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-bold text-[#2B4C85] mb-6">Welkom bij Nieuwsnestje!</h1>
              <p className="text-2xl text-[#5A6B8C]">
                Kies hieronder je nieuwsitem(s) van vandaag
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Vliegtuig nieuws */}
              <Link to="/news/vliegtuig" className="group">
                <div className="bg-[#FFE4CC] rounded-3xl p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg border-4 border-[#FFD4B3]">
                  <div className="flex-1 flex items-center justify-center mb-6">
                    {/* Airplane illustration */}
                    <div className="relative">
                      <img src="images/vliegtuig.png"></img>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#FFA94D] mb-4">Vliegtuig gevallen</h3>
                    <p className="text-[#2B4C85] text-lg leading-relaxed">
                      Er is een vliegtuig gevallen in een land dat India heet. Dat land ligt heel ver weg van Nederland. Het gebeurde vlak nadat het vliegtuig was opgestegen. Het vliegtuig was onderweg naar Londen, een stad in Engeland.
                    </p>
                  </div>
                </div>
              </Link>

              {/* 3FM nieuws */}
              <Link to="/news/3fm" className="group">
                <div className="bg-[#AEDFF7] rounded-3xl p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg border-4">
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div>
                      <img src="images/3fm.png"></img>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#2B4C85] mb-4">3FM Serious Request</h3>
                    <p className="text-[#2B4C85] text-lg leading-relaxed">
                      In december gaan de dj's van de radiozender 3FM weer in een glazen huis zitten, dat doen ze elk jaar. Dit jaar is het op de markt in Den Bosch. Radio 3FM doen dit om geld te verzamelen voor kinderen met zieke spieren.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Zomer nieuws */}
              <Link to="/news/zomer" className="group">
                <div className="bg-[#D2F0C2] rounded-3xl p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg border-4 border-[#C2E8B2]">
                  <div className="flex-1 flex items-center justify-center mb-6">
                    {/* Sun illustration */}
                    <div className="relative">
                      <img src="images/zon.png"></img>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#4A8B3B] mb-4">Zomernieuws</h3>
                    <p className="text-[#2B4C85] text-lg leading-relaxed">
                      Wat is het in de zomer zo warm? Wat is een hittegolf? Waarom zijn er zo veel bosbranden? Onder dit kopje kan je elke dag een nieuw nieuwsitem vinden over de zomer.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroFlow;
