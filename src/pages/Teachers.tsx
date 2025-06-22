
import { useState } from "react";
import Navigation from "../components/Navigation";
import { Search, Star, Download, TrendingUp, Clock, CheckCircle, BarChart3 } from "lucide-react";

const Teachers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle onderwerpen");
  const [selectedLevel, setSelectedLevel] = useState("Alle niveaus");
  const [selectedMaterial, setSelectedMaterial] = useState("Alle materialen");
  const [selectedWeek, setSelectedWeek] = useState("Week 22 (Pip)");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Alle onderwerpen",
    "Maatschappij", 
    "Wetenschap", 
    "Natuur", 
    "Mens & gezondheid", 
    "Feestdagen/seizoenen"
  ];

  const levels = ["Alle niveaus", "Makkelijk", "Gemiddeld", "Uitdagend"];
  
  const materials = [
    "Alle materialen",
    "🎨 Kleurplaten",
    "📄 Verwerkingsopdrachten", 
    "💬 Gespreksvragen",
    "🧩 Quizzen",
    "🎧 Luistermateriaal"
  ];

  const weeks = [
    "Week 22 (Pip)",
    "Week 21 (Nina)", 
    "Week 20 (Timo)",
    "Week 19 (Sam)",
    "Week 18 (Lisa)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Titel en instructie */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Instellingen voor docenten</h2>
          <p className="text-xl text-muted-foreground">
            Pas hier je voorkeuren aan en bekijk de voortgang van je klas
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filtersectie */}
          <div className="lg:col-span-2 space-y-6">
            <div className="nieuwsnestje-card p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Search className="mr-3" />
                Filters en zoeken
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Onderwerp/categorie */}
                <div>
                  <label className="text-lg font-bold text-foreground mb-3 block">Onderwerp/categorie</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 rounded-2xl border-2 border-gray-200 focus:border-primary font-medium"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Leerniveau */}
                <div>
                  <label className="text-lg font-bold text-foreground mb-3 block">Leerniveau</label>
                  <select 
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full p-3 rounded-2xl border-2 border-gray-200 focus:border-primary font-medium"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Soort materiaal */}
                <div>
                  <label className="text-lg font-bold text-foreground mb-3 block">Soort materiaal</label>
                  <select 
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="w-full p-3 rounded-2xl border-2 border-gray-200 focus:border-primary font-medium"
                  >
                    {materials.map(material => (
                      <option key={material} value={material}>{material}</option>
                    ))}
                  </select>
                </div>

                {/* Weekselectie */}
                <div>
                  <label className="text-lg font-bold text-foreground mb-3 block">Weekselectie</label>
                  <select 
                    value={selectedWeek}
                    onChange={(e) => setSelectedWeek(e.target.value)}
                    className="w-full p-3 rounded-2xl border-2 border-gray-200 focus:border-primary font-medium"
                  >
                    {weeks.map(week => (
                      <option key={week} value={week}>{week}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Zoekveld */}
              <div className="mt-6">
                <label className="text-lg font-bold text-foreground mb-3 block">Zoek op trefwoord</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Bijv. 3FM, vliegtuig, dieren..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-primary font-medium"
                  />
                </div>
              </div>

              {/* Favorieten */}
              <div className="mt-6 p-4 bg-yellow-50 rounded-2xl border-2 border-yellow-200">
                <div className="flex items-center">
                  <Star className="text-yellow-500 mr-2" fill="currentColor" />
                  <span className="font-bold text-foreground">Favorieten: 3 items opgeslagen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Voortgangssectie */}
          <div className="space-y-6">
            <div className="nieuwsnestje-card p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <BarChart3 className="mr-3" />
                Klasvoortgang
              </h3>
              
              <div className="space-y-4">
                {/* Gemaakte quizzen */}
                <div className="bg-green-50 p-4 rounded-2xl border-2 border-green-200">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                    <span className="font-bold text-foreground">Quizzen voltooid</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">12 deze week</p>
                  <p className="text-sm text-muted-foreground">Gemiddeld per kind</p>
                </div>

                {/* Tijd besteed */}
                <div className="bg-blue-50 p-4 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-center mb-2">
                    <Clock className="text-blue-600 mr-2" size={20} />
                    <span className="font-bold text-foreground">Tijd besteed</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">7 min</p>
                  <p className="text-sm text-muted-foreground">Gemiddeld per kind</p>
                </div>

                {/* Gemiddelde score */}
                <div className="bg-purple-50 p-4 rounded-2xl border-2 border-purple-200">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="text-purple-600 mr-2" size={20} />
                    <span className="font-bold text-foreground">Gemiddelde score</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">3,2 / 4</p>
                  <p className="text-sm text-muted-foreground">Goed beantwoord</p>
                </div>

                {/* Veel gemaakte fouten */}
                <div className="bg-orange-50 p-4 rounded-2xl border-2 border-orange-200">
                  <div className="flex items-center mb-2">
                    <span className="text-orange-600 mr-2">❗</span>
                    <span className="font-bold text-foreground">Aandachtspunt</span>
                  </div>
                  <p className="text-sm text-foreground">Meeste fouten bij vraag over "Waar ging het vliegtuig naartoe?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloadsectie */}
        <div className="max-w-7xl mx-auto mt-8">
          <div className="nieuwsnestje-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Download className="mr-3" />
              Download materialen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="nieuwsnestje-button w-full text-center p-6">
                <span className="text-3xl mb-2 block">📄</span>
                Verwerkingsopdrachten downloaden
              </button>
              <button className="nieuwsnestje-button w-full text-center p-6">
                <span className="text-3xl mb-2 block">🎨</span>
                Kleurplaten downloaden
              </button>
              <button className="nieuwsnestje-button w-full text-center p-6">
                <span className="text-3xl mb-2 block">💬</span>
                Gespreksvragen downloaden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
