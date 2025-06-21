
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ArrowLeft } from "lucide-react";

const NewsHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <ArrowLeft className="w-8 h-8 text-foreground cursor-pointer" onClick={() => window.history.back()} />
        </div>

        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Links: Speech bubble */}
          <div className="flex-1 mr-8">
            <div className="bg-white border-4 border-nieuwsnestje-orange rounded-full p-8 relative max-w-md">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">Hoi ik ben Pip!</h2>
                <p className="text-lg text-foreground mb-4">
                  Ik ga je het nieuws van vandaag vertellen.
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-2xl">🔊</span>
                </div>
              </div>
              
              {/* Speech bubble tail pointing to Pip */}
              <div className="absolute -bottom-2 right-16 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-nieuwsnestje-orange"></div>
            </div>
            
            <div className="mt-8">
              <Link to="/quiz" className="nieuwsnestje-button">
                Speel de quiz
              </Link>
            </div>
          </div>

          {/* Rechts: Pip met microfoon */}
          <div className="flex-1 flex justify-center">
            <div className="text-center">
              <div className="w-64 h-64 flex items-center justify-center mb-4">
                <div className="relative">
                  {/* Pip de pinguïn cartoon illustratie */}
                  <div className="w-48 h-48 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative overflow-hidden">
                    {/* Pip's body */}
                    <div className="absolute inset-x-4 bottom-0 top-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
                    
                    {/* Pip's belly */}
                    <div className="absolute inset-x-8 bottom-4 top-12 bg-gradient-to-b from-orange-100 to-white rounded-full"></div>
                    
                    {/* Pip's head area */}
                    <div className="absolute top-2 left-4 right-4 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                    
                    {/* Eyes */}
                    <div className="absolute top-6 left-12 w-4 h-4 bg-white rounded-full">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="absolute top-6 right-12 w-4 h-4 bg-white rounded-full">
                      <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    
                    {/* Beak */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-orange-400"></div>
                    
                    {/* Orange scarf */}
                    <div className="absolute top-16 left-6 right-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-90"></div>
                    
                    {/* Wings */}
                    <div className="absolute top-20 -left-2 w-8 h-12 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full transform -rotate-12"></div>
                    <div className="absolute top-20 -right-2 w-8 h-12 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full transform rotate-12"></div>
                    
                    {/* Feet */}
                    <div className="absolute -bottom-2 left-8 w-6 h-4 bg-orange-400 rounded-full"></div>
                    <div className="absolute -bottom-2 right-8 w-6 h-4 bg-orange-400 rounded-full"></div>
                  </div>
                  
                  {/* Microfoon */}
                  <div className="absolute -right-4 top-8 flex flex-col items-center">
                    <div className="w-6 h-6 bg-gray-800 rounded-full mb-1"></div>
                    <div className="w-2 h-12 bg-gray-600 rounded"></div>
                    <div className="bg-white px-2 py-1 rounded text-xs font-bold border border-gray-300">
                      NIEUWS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
