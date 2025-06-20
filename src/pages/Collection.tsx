
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Collection = () => {
  const animals = [
    { name: "Pip de pinguïn", week: "Week 22", unlocked: true },
    { name: "Nina het nijlpaard", week: "Week 21", unlocked: true },
    { name: "Timo de tijger", week: "Week 20", unlocked: true },
    { name: "Kiki het konijn", week: "Week 19", unlocked: true },
    { name: "Daisy de dolfijn", week: "Week 18", unlocked: true },
    { name: "Mila de muis", week: "Week 17", unlocked: false },
  ];

  const renderAnimalIllustration = (animalName: string, unlocked: boolean) => {
    if (!unlocked) {
      return (
        <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-4xl text-gray-400">🔒</div>
        </div>
      );
    }

    // Cartoon-style illustrations for each animal
    switch (animalName) {
      case "Pip de pinguïn":
        return (
          <div className="w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              {/* Pip penguin body */}
              <ellipse cx="60" cy="70" rx="30" ry="35" fill="#4A90E2" />
              <ellipse cx="60" cy="75" rx="20" ry="25" fill="#FFFFFF" />
              {/* Head */}
              <circle cx="60" cy="35" r="22" fill="#4A90E2" />
              <circle cx="60" cy="35" r="15" fill="#FFFFFF" />
              {/* Eyes */}
              <circle cx="55" cy="30" r="3" fill="#000" />
              <circle cx="65" cy="30" r="3" fill="#000" />
              <circle cx="56" cy="29" r="1" fill="#FFF" />
              <circle cx="66" cy="29" r="1" fill="#FFF" />
              {/* Beak */}
              <polygon points="60,35 55,40 65,40" fill="#FFA94D" />
              {/* Orange scarf */}
              <ellipse cx="60" cy="50" rx="25" ry="4" fill="#FFA94D" />
              <rect x="50" y="52" width="5" height="15" fill="#FFA94D" />
              <rect x="65" y="52" width="5" height="15" fill="#FFA94D" />
              {/* Feet */}
              <ellipse cx="50" cy="100" rx="8" ry="4" fill="#FFA94D" />
              <ellipse cx="70" cy="100" rx="8" ry="4" fill="#FFA94D" />
            </svg>
          </div>
        );
      case "Nina het nijlpaard":
        return (
          <div className="w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              {/* Hippo body */}
              <ellipse cx="60" cy="70" rx="35" ry="25" fill="#8B8B8B" />
              {/* Head */}
              <ellipse cx="60" cy="40" rx="28" ry="22" fill="#8B8B8B" />
              {/* Snout */}
              <ellipse cx="60" cy="50" rx="15" ry="10" fill="#A0A0A0" />
              {/* Eyes */}
              <circle cx="52" cy="35" r="4" fill="#000" />
              <circle cx="68" cy="35" r="4" fill="#000" />
              <circle cx="53" cy="33" r="1.5" fill="#FFF" />
              <circle cx="69" cy="33" r="1.5" fill="#FFF" />
              {/* Ears */}
              <ellipse cx="45" cy="28" rx="6" ry="8" fill="#8B8B8B" />
              <ellipse cx="75" cy="28" rx="6" ry="8" fill="#8B8B8B" />
              {/* Nostrils */}
              <ellipse cx="57" cy="48" rx="2" ry="1" fill="#000" />
              <ellipse cx="63" cy="48" rx="2" ry="1" fill="#000" />
              {/* Legs */}
              <rect x="40" y="85" width="8" height="15" fill="#8B8B8B" />
              <rect x="52" y="85" width="8" height="15" fill="#8B8B8B" />
              <rect x="60" y="85" width="8" height="15" fill="#8B8B8B" />
              <rect x="72" y="85" width="8" height="15" fill="#8B8B8B" />
            </svg>
          </div>
        );
      case "Timo de tijger":
        return (
          <div className="w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              {/* Tiger body */}
              <ellipse cx="60" cy="70" rx="30" ry="28" fill="#FF8C42" />
              {/* Head */}
              <circle cx="60" cy="40" r="25" fill="#FF8C42" />
              {/* Stripes on head */}
              <rect x="45" y="25" width="3" height="15" fill="#000" transform="rotate(-15 45 25)" />
              <rect x="72" y="25" width="3" height="15" fill="#000" transform="rotate(15 72 25)" />
              <rect x="55" y="20" width="3" height="12" fill="#000" />
              <rect x="62" y="20" width="3" height="12" fill="#000" />
              {/* Eyes */}
              <circle cx="52" cy="35" r="4" fill="#000" />
              <circle cx="68" cy="35" r="4" fill="#000" />
              <circle cx="53" cy="33" r="1.5" fill="#FFF" />
              <circle cx="69" cy="33" r="1.5" fill="#FFF" />
              {/* Nose */}
              <polygon points="60,42 57,47 63,47" fill="#000" />
              {/* Ears */}
              <polygon points="42,25 50,15 50,30" fill="#FF8C42" />
              <polygon points="78,25 70,15 70,30" fill="#FF8C42" />
              <polygon points="44,22 48,18 48,27" fill="#FFB366" />
              <polygon points="76,22 72,18 72,27" fill="#FFB366" />
              {/* Body stripes */}
              <rect x="40" y="60" width="4" height="20" fill="#000" />
              <rect x="50" y="55" width="4" height="25" fill="#000" />
              <rect x="66" y="55" width="4" height="25" fill="#000" />
              <rect x="76" y="60" width="4" height="20" fill="#000" />
              {/* Tail */}
              <ellipse cx="85" cy="65" rx="8" ry="15" fill="#FF8C42" />
              <rect x="83" y="55" width="3" height="10" fill="#000" />
            </svg>
          </div>
        );
      case "Kiki het konijn":
        return (
          <div className="w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              {/* Rabbit body */}
              <ellipse cx="60" cy="75" rx="25" ry="30" fill="#D2B48C" />
              {/* Head */}
              <circle cx="60" cy="45" r="20" fill="#D2B48C" />
              {/* Long ears */}
              <ellipse cx="50" cy="20" rx="6" ry="20" fill="#D2B48C" />
              <ellipse cx="70" cy="20" rx="6" ry="20" fill="#D2B48C" />
              <ellipse cx="50" cy="22" rx="3" ry="15" fill="#FFB6C1" />
              <ellipse cx="70" cy="22" rx="3" ry="15" fill="#FFB6C1" />
              {/* Eyes */}
              <circle cx="55" cy="40" r="3" fill="#000" />
              <circle cx="65" cy="40" r="3" fill="#000" />
              <circle cx="56" cy="39" r="1" fill="#FFF" />
              <circle cx="66" cy="39" r="1" fill="#FFF" />
              {/* Nose */}
              <ellipse cx="60" cy="48" rx="2" ry="1.5" fill="#FFB6C1" />
              {/* Mouth */}
              <path d="M 58 50 Q 60 52 62 50" stroke="#000" strokeWidth="1" fill="none" />
              {/* Orange scarf */}
              <ellipse cx="60" cy="60" rx="22" ry="4" fill="#FFA94D" />
              {/* Belly */}
              <ellipse cx="60" cy="80" rx="15" ry="20" fill="#F5DEB3" />
              {/* Paws */}
              <ellipse cx="45" cy="95" rx="6" ry="8" fill="#D2B48C" />
              <ellipse cx="75" cy="95" rx="6" ry="8" fill="#D2B48C" />
            </svg>
          </div>
        );
      case "Daisy de dolfijn":
        return (
          <div className="w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              {/* Dolphin body */}
              <ellipse cx="60" cy="60" rx="35" ry="20" fill="#4A90E2" />
              {/* Head/snout */}
              <ellipse cx="30" cy="55" rx="15" ry="12" fill="#4A90E2" />
              {/* Snout */}
              <ellipse cx="20" cy="55" rx="8" ry="5" fill="#4A90E2" />
              {/* Eye */}
              <circle cx="35" cy="50" r="3" fill="#000" />
              <circle cx="36" cy="49" r="1" fill="#FFF" />
              {/* Dorsal fin */}
              <polygon points="60,35 70,25 75,45" fill="#4A90E2" />
              {/* Tail */}
              <polygon points="90,55 105,45 105,65 95,70 90,65" fill="#4A90E2" />
              {/* Belly */}
              <ellipse cx="55" cy="65" rx="25" ry="12" fill="#B8D4F1" />
              {/* Flipper */}
              <ellipse cx="45" cy="70" rx="8" ry="12" fill="#4A90E2" />
              {/* Water splash effect */}
              <circle cx="25" cy="40" r="2" fill="#B8D4F1" opacity="0.7" />
              <circle cx="30" cy="35" r="1.5" fill="#B8D4F1" opacity="0.7" />
              <circle cx="35" cy="38" r="1" fill="#B8D4F1" opacity="0.7" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-2xl text-gray-400">?</span>
          </div>
        );
    }
  };

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
        
        {/* Grid layout matching reference image */}
        <div className="max-w-6xl mx-auto">
          {/* Top row - 3 animals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {animals.slice(0, 3).map((animal, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md">
                <div className="mb-6">
                  {renderAnimalIllustration(animal.name, animal.unlocked)}
                </div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{animal.week}</p>
                <h3 className="text-xl font-bold text-foreground">
                  {animal.unlocked ? animal.name : '???'}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 animals centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {animals.slice(3, 5).map((animal, index) => (
              <div key={index + 3} className="bg-white rounded-2xl p-8 text-center shadow-md">
                <div className="mb-6">
                  {renderAnimalIllustration(animal.name, animal.unlocked)}
                </div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{animal.week}</p>
                <h3 className="text-xl font-bold text-foreground">
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
