
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
              
              {/* Speech bubble tail */}
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
                  <span className="text-8xl">🐧</span>
                  <div className="absolute -right-4 top-8 text-4xl">🎤</div>
                  <div className="absolute -right-2 top-4 bg-white px-2 py-1 rounded text-xs font-bold">
                    NIEUWS
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
