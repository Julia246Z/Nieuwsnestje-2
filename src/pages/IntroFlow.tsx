
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
                <div className="relative">
                  <div className="w-80 h-64 bg-gradient-to-br from-[#FF7A4D] to-[#FF6B3D] rounded-3xl shadow-2xl border-4 border-[#E85A2B] relative">
                    {/* Gift box top */}
                    <div className="absolute inset-x-8 top-8 bottom-8 bg-gradient-to-br from-[#FF8A5D] to-[#FF7B4D] rounded-2xl"></div>
                    
                    {/* Vertical ribbon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-12 h-full bg-gradient-to-b from-[#FFB84D] to-[#FFA94D] rounded-lg"></div>
                    
                    {/* Horizontal ribbon */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-12 bg-gradient-to-r from-[#FFB84D] to-[#FFA94D] rounded-lg"></div>
                    
                    {/* Bow on top */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-16 bg-gradient-to-br from-[#FFD84D] to-[#FFC94D] rounded-full shadow-lg border-4 border-[#FFB84D] relative">
                        <div className="absolute inset-2 bg-gradient-to-br from-[#FFE84D] to-[#FFD94D] rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FFB84D] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="w-80 h-32 bg-gradient-to-br from-[#FF7A4D] to-[#FF6B3D] rounded-b-3xl shadow-2xl border-4 border-[#E85A2B] border-t-0">
                  <div className="absolute inset-x-8 top-0 bottom-8 bg-gradient-to-br from-[#FF8A5D] to-[#FF7B4D] rounded-b-2xl"></div>
                </div>
                
                {/* Pip jumping out */}
                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-48 h-48 relative">
                    {/* Pip the Penguin - detailed cartoon style */}
                    <div className="w-full h-full relative">
                      {/* Body */}
                      <div className="w-32 h-40 bg-[#5B9BD5] rounded-full mx-auto relative border-4 border-[#4A8BC2]">
                        {/* Belly */}
                        <div className="absolute inset-x-6 top-6 bottom-4 bg-[#FFF8E7] rounded-full border-2 border-[#E8D5B7]"></div>
                        
                        {/* Wings */}
                        <div className="absolute -left-6 top-8 w-16 h-20 bg-[#5B9BD5] rounded-full rotate-12 border-4 border-[#4A8BC2]"></div>
                        <div className="absolute -right-6 top-8 w-16 h-20 bg-[#5B9BD5] rounded-full -rotate-12 border-4 border-[#4A8BC2]"></div>
                        
                        {/* Head */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#5B9BD5] rounded-full border-4 border-[#4A8BC2]">
                          {/* Eyes */}
                          <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full border-2 border-black">
                            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                          </div>
                          <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full border-2 border-black">
                            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                          </div>
                          
                          {/* Beak */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-[#FFA94D] rounded-sm border border-[#FF9A3D]"></div>
                          
                          {/* Cheeks */}
                          <div className="absolute top-6 left-1 w-3 h-3 bg-[#FFB3B3] rounded-full opacity-60"></div>
                          <div className="absolute top-6 right-1 w-3 h-3 bg-[#FFB3B3] rounded-full opacity-60"></div>
                        </div>
                        
                        {/* Orange scarf */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-[#FFA94D] rounded-full border-2 border-[#FF9A3D]"></div>
                        <div className="absolute -top-2 right-4 w-12 h-3 bg-[#FFA94D] rounded-full rotate-45 border-2 border-[#FF9A3D]"></div>
                        
                        {/* Feet */}
                        <div className="absolute -bottom-4 left-6 w-6 h-4 bg-[#FFA94D] rounded-full border-2 border-[#FF9A3D]"></div>
                        <div className="absolute -bottom-4 right-6 w-6 h-4 bg-[#FFA94D] rounded-full border-2 border-[#FF9A3D]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Confetti and celebration effects */}
                <div className="absolute -top-16 left-4 text-3xl animate-pulse">⭐</div>
                <div className="absolute -top-20 right-4 text-3xl animate-pulse delay-300">✨</div>
                <div className="absolute -top-12 left-12 text-2xl animate-pulse delay-150">🎉</div>
                <div className="absolute -top-24 right-12 text-2xl animate-pulse delay-450">🎊</div>
                <div className="absolute -top-8 left-24 text-xl animate-pulse delay-600">💫</div>
                <div className="absolute -top-28 right-24 text-xl animate-pulse delay-200">⭐</div>
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
              <div className="w-64 h-64 relative">
                <div className="w-48 h-56 relative mx-auto">
                  {/* Body */}
                  <div className="w-32 h-40 bg-[#5B9BD5] rounded-full mx-auto relative border-4 border-[#4A8BC2]">
                    {/* Belly */}
                    <div className="absolute inset-x-6 top-6 bottom-4 bg-[#FFF8E7] rounded-full border-2 border-[#E8D5B7]"></div>
                    
                    {/* Wings */}
                    <div className="absolute -left-6 top-8 w-16 h-20 bg-[#5B9BD5] rounded-full rotate-12 border-4 border-[#4A8BC2]"></div>
                    <div className="absolute -right-6 top-8 w-16 h-20 bg-[#5B9BD5] rounded-full -rotate-12 border-4 border-[#4A8BC2]"></div>
                    
                    {/* Head */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-[#5B9BD5] rounded-full border-4 border-[#4A8BC2]">
                      {/* Eyes */}
                      <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full border-2 border-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                      </div>
                      <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full border-2 border-black">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                      </div>
                      
                      {/* Beak */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-[#FFA94D] rounded-sm border border-[#FF9A3D]"></div>
                      
                      {/* Cheeks */}
                      <div className="absolute top-6 left-1 w-3 h-3 bg-[#FFB3B3] rounded-full opacity-60"></div>
                      <div className="absolute top-6 right-1 w-3 h-3 bg-[#FFB3B3] rounded-full opacity-60"></div>
                    </div>
                    
                    {/* Orange scarf */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-[#FFA94D] rounded-full border-2 border-[#FF9A3D]"></div>
                    <div className="absolute -top-2 right-4 w-12 h-3 bg-[#FFA94D] rounded-full rotate-45 border-2 border-[#FF9A3D]"></div>
                    
                    {/* Feet */}
                    <div className="absolute -bottom-4 left-6 w-6 h-4 bg-[#FFA94D] rounded-full border-2 border-[#FF9A3D]"></div>
                    <div className="absolute -bottom-4 right-6 w-6 h-4 bg-[#FFA94D] rounded-full border-2 border-[#FF9A3D]"></div>
                  </div>
                </div>
              </div>
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
                <div className="bg-[#FFE4CC] rounded-3xl p-8 h-96 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg border-4 border-[#FFD4B3]">
                  <div className="flex-1 flex items-center justify-center mb-6">
                    {/* Airplane illustration */}
                    <div className="relative">
                      <div className="w-32 h-20 bg-white rounded-full relative border-4 border-[#E0E0E0] shadow-lg">
                        {/* Fuselage */}
                        <div className="absolute inset-2 bg-gradient-to-r from-[#F0F0F0] to-white rounded-full"></div>
                        {/* Wings */}
                        <div className="absolute -top-2 left-8 w-16 h-6 bg-[#E0E0E0] rounded-full"></div>
                        <div className="absolute -bottom-2 left-8 w-16 h-6 bg-[#E0E0E0] rounded-full"></div>
                        {/* Tail */}
                        <div className="absolute -right-4 top-2 w-8 h-4 bg-[#FFA94D] rounded-r-full border-2 border-[#FF9A3D]"></div>
                        {/* Windows */}
                        <div className="absolute top-3 left-4 flex space-x-1">
                          <div className="w-2 h-2 bg-[#87CEEB] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#87CEEB] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#87CEEB] rounded-full"></div>
                        </div>
                        {/* Engines */}
                        <div className="absolute -left-2 top-6 w-4 h-8 bg-[#D0D0D0] rounded-full border-2 border-[#C0C0C0]"></div>
                        <div className="absolute -right-2 top-6 w-4 h-8 bg-[#D0D0D0] rounded-full border-2 border-[#C0C0C0]"></div>
                      </div>
                      {/* Clouds */}
                      <div className="absolute -top-4 -right-8 text-2xl opacity-70">☁️</div>
                      <div className="absolute -bottom-4 -left-8 text-xl opacity-50">☁️</div>
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
                <div className="bg-[#AEDFF7] rounded-3xl p-8 h-96 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg border-4 border-[#9ED4F2]">
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg border-4 border-[#E0E0E0]">
                      <span className="text-4xl font-bold text-[#654321] font-mono">3FM</span>
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
                <div className="bg-[#D2F0C2] rounded-3xl p-8 h-96 flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg border-4 border-[#C2E8B2]">
                  <div className="flex-1 flex items-center justify-center mb-6">
                    {/* Sun illustration */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full relative border-4 border-[#FF8C00] shadow-lg">
                        <div className="absolute inset-2 bg-gradient-to-br from-[#FFFF00] to-[#FFD700] rounded-full"></div>
                        {/* Sun rays */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-[#FFD700] rounded-full"></div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-[#FFD700] rounded-full"></div>
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-[#FFD700] rounded-full"></div>
                        <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-1 bg-[#FFD700] rounded-full"></div>
                        <div className="absolute -top-6 -left-6 w-1 h-4 bg-[#FFD700] rounded-full rotate-45"></div>
                        <div className="absolute -top-6 -right-6 w-1 h-4 bg-[#FFD700] rounded-full -rotate-45"></div>
                        <div className="absolute -bottom-6 -left-6 w-1 h-4 bg-[#FFD700] rounded-full -rotate-45"></div>
                        <div className="absolute -bottom-6 -right-6 w-1 h-4 bg-[#FFD700] rounded-full rotate-45"></div>
                        {/* Sun face */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                        <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#FF6B00] rounded-full"></div>
                      </div>
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
