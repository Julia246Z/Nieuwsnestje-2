
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Collection = () => {
  const animals = [
    { name: "Pip de pinguïn", week: "Week 22", unlocked: true, emoji: "🐧" },
    { name: "Nina het nijlpaard", week: "Week 21", unlocked: true, emoji: "🦛" },
    { name: "Timo de tijger", week: "Week 20", unlocked: true, emoji: "🐅" },
    { name: "Kiki het konijn", week: "Week 19", unlocked: true, emoji: "🐰" },
    { name: "Daisy de dolfijn", week: "Week 18", unlocked: true, emoji: "🐬" },
    { name: "Mila de muis", week: "Week 17", unlocked: false, emoji: "🐭" },
  ];

  return (
    <div className="min-h-screen bg-nieuwsnestje-cream">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Gespaarde diertjes</h2>
          <p className="text-xl text-muted-foreground mb-4">
            In dit overzicht vind je alle diertjes die je hebt gespaard
          </p>
        </div>
        
        {/* Fixed 3-column grid layout */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {animals.map((animal, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md">
                <div className="mb-6 flex justify-center items-center">
                  {animal.unlocked ? (
                    <div className="text-8xl">
                      {animal.emoji}
                    </div>
                  ) : (
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-4xl text-gray-400">🔒</div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{animal.week}</p>
                <h3 className="text-lg font-bold text-foreground">
                  {animal.unlocked ? animal.name : '???'}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
