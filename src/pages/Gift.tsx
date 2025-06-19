
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Gift = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Je hebt een nieuw diertje!</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Klik op het pakketje om je nieuwe diertje te ontmoeten
          </p>
          
          <div className="flex justify-center mb-12">
            {!isOpened ? (
              <div 
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setIsOpened(true)}
              >
                <div className="w-64 h-64 relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl relative shadow-2xl">
                    <div className="absolute inset-4 bg-gradient-to-br from-orange-300 to-red-300 rounded-2xl"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-b-2xl"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-yellow-300 to-orange-300 rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-bounce-gentle">
                <div className="w-64 h-64 bg-nieuwsnestje-blue rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-8xl">🐧</span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground">Pip de pinguïn</h3>
                  <p className="text-lg text-muted-foreground">Week 22</p>
                </div>
              </div>
            )}
          </div>
          
          {isOpened && (
            <div className="space-y-4">
              <Link to="/news" className="nieuwsnestje-button mr-4">
                Bekijk nieuws
              </Link>
              <Link to="/collection" className="nieuwsnestje-button-secondary">
                Voeg toe aan verzameling
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gift;
