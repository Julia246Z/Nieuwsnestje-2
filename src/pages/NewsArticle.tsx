
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ArrowLeft } from "lucide-react";

const NewsArticle = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <ArrowLeft className="w-8 h-8 text-foreground cursor-pointer" onClick={() => window.history.back()} />
        </div>

        <div className="flex gap-8 max-w-6xl mx-auto">
          {/* Links: Afbeelding en Pip */}
          <div className="flex-1 space-y-6">
            <div className="bg-orange-100 rounded-3xl p-8 flex items-center justify-center h-64">
              <span className="text-8xl">✈️</span>
            </div>
            
            <div className="nieuwsnestje-button-secondary p-6 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-4xl">🐧</span>
                <h3 className="text-xl font-bold">Lees het nieuws met Pip!</h3>
              </div>
            </div>
          </div>

          {/* Rechts: Nieuwsartikel */}
          <div className="flex-1">
            <div className="bg-white border-4 border-nieuwsnestje-orange rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Vliegtuig gevallen</h2>
              
              <div className="text-lg text-foreground space-y-4 leading-relaxed">
                <p>
                  Er is een vliegtuig gevallen in een land dat India heet. Dat land ligt heel ver weg van Nederland. Het gebeurde vlak nadat het vliegtuig was opgestegen.
                </p>
                <p>
                  Het vliegtuig was onderweg naar Londen, een stad in Engeland.
                </p>
                <p>
                  In het vliegtuig zaten veel mensen, maar we weten nog niet precies wat er met hen is gebeurd. We weten ook nog niet precies wat er met het vliegtuig is gebeurd en waarom het is neergeval­len. Een speciaal team gaat uitzoeken hoe dit ongeluk kon gebeuren.
                </p>
                <p>
                  Het vliegtuig kwam neer op een plek waar huizen stonden. Sommige gebouwen zijn kapot gegaan. Er was veel rook en de brandweer kwam snel om te helpen.
                </p>
                <p>
                  <strong>Belangrijk om te weten:</strong> Dit is niet bij ons gebeurd. Het is komt bijna nooit voor dat een vliegtuig neervalt. Vliegtuigen zijn meestal juist heel veilig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
