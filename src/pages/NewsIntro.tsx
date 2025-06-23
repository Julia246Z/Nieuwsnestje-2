import { useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ArrowLeft, Speaker } from "lucide-react";

const NewsIntro = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <ArrowLeft
            className="w-8 h-8 text-foreground cursor-pointer"
            onClick={() => window.history.back()}
          />
        </div>

        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Links: Spraakballon */}
          <div className="flex-1 mr-8">
            <div className="bg-white border-4 border-nieuwsnestje-orange rounded-full p-8 relative max-w-md">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">Hoi ik ben Pip!</h2>
                <p className="text-lg text-foreground mb-4">
                  Ik ga je het nieuws van vandaag vertellen.
                </p>
                <div className="flex items-center justify-center">
                  <button onClick={handlePlay} aria-label="Speel audio">
                    <Speaker className="w-8 h-8 text-nieuwsnestje-orange" />
                  </button>
                </div>
              </div>

              {/* Spraakballon staart */}
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
                  <img src="/images/pip-met-mic.png" alt="Pip met microfoon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🎧 Audio-element gekoppeld aan Speaker-knop */}
      <audio ref={audioRef} src="/images/pip.mp3" preload="auto" />
    </div>
  );
};

export default NewsIntro;
