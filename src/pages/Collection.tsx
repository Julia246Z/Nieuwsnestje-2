
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Collection = () => {
  const animals = [
    { name: "Pip de pinguïn", week: "Week 22", emoji: "🐧", unlocked: true },
    { name: "Nina het nijlpaard", week: "Week 21", emoji: "🦛", unlocked: true },
    { name: "Timo de tijger", week: "Week 20", emoji: "🐅", unlocked: true },
    { name: "Kiki het konijn", week: "Week 19", emoji: "🐰", unlocked: true },
    { name: "Daisy de dolfijn", week: "Week 18", emoji: "🐬", unlocked: true },
    { name: "Mila de muis", week: "Week 17", emoji: "🐭", unlocked: false },
  ];

  const unlockedCount = animals.filter(animal => animal.unlocked).length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Gespaarde diertjes</h2>
          <p className="text-xl text-muted-foreground mb-4">
            In dit overzicht vind je alle diertjes die je hebt gespaard
          </p>
          <p className="text-lg font-bold text-primary">
            Je hebt {unlockedCount} van de {animals.length} diertjes verzameld!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {animals.map((animal, index) => (
            <div key={index} className={`nieuwsnestje-card p-8 text-center ${!animal.unlocked ? 'opacity-50' : ''}`}>
              <div className="text-6xl mb-4 filter grayscale-0">
                {animal.unlocked ? animal.emoji : '🔒'}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{animal.week}</p>
              <h3 className="text-xl font-bold text-foreground">
                {animal.unlocked ? animal.name : '???'}
              </h3>
              {animal.unlocked && (
                <Link to="/diertje" className="inline-block mt-4 px-6 py-2 bg-secondary text-foreground rounded-full font-bold hover:scale-105 transition-transform">
                  Bekijk diertje
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
