
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Welkom bij Nieuwsnestje!</h2>
          <p className="text-xl text-muted-foreground">
            Kies hieronder je nieuwsitem(s) van vandaag
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Vliegtuig nieuws */}
          <Link to="/news/vliegtuig" className="group">
            <div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-8xl">✈️</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-nieuwsnestje-orange mb-3">Vliegtuig gevallen</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Er is een vliegtuig gevallen in een land dat India heet. Dat land ligt heel ver weg van Nederland. Het gebeurde vlak nadat het vliegtuig was opgestegen. Het vliegtuig was onderweg naar Londen, een stad in Engeland.
                </p>
              </div>
            </div>
          </Link>

          {/* 3FM nieuws */}
          <Link to="/news/3fm" className="group">
            <div className="bg-nieuwsnestje-blue rounded-3xl p-8 h-80 flex flex-col justify-between transition-transform duration-300 hover:scale-105">
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-800">3FM</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">3FM Serious Request</h3>
                <p className="text-foreground text-base leading-relaxed">
                  In december gaan de dj's van de radiozender 3FM weer in een glazen huis zitten, dat doen ze elk jaar. Dit jaar is het op de markt in Den Bosch. Radio 3FM doen dit om geld te verzamelen voor kinderen met zieke spieren.
                </p>
              </div>
            </div>
          </Link>

          {/* Zomer nieuws */}
          <Link to="/news/zomer" className="group">
            <div className="bg-nieuwsnestje-mint rounded-3xl p-8 h-80 flex flex-col justify-between transition-transform duration-300 hover:scale-105">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-8xl">☀️</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Zomernieuws</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Wat is het in de zomer zo warm? Wat is een hittegolf? Waarom zijn er zo veel bosbranden? Onder dit kopje kan je elke dag een nieuw nieuwsitem vinden over de zomer.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/gift" className="nieuwsnestje-button text-xl px-12 py-6">
            🎁 Pak je diertje van de week uit!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
