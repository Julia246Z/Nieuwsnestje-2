import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Search, Star, Download, TrendingUp, Clock, CheckCircle, BarChart3, Calendar, Bookmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

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
    { number: "22", mascot: "Pip", topic: "Vliegtuigen en reizen" },
    { number: "21", mascot: "Nina", topic: "Dieren in de natuur" },
    { number: "20", mascot: "Timo", topic: "Muziek en festivals" },
    { number: "19", mascot: "Sam", topic: "Sport en gezondheid" },
    { number: "18", mascot: "Lisa", topic: "Feesten en tradities" }
  ];

  const searchResults = [
    { week: "Week 22", title: "Vliegtuig maakt noodlanding", summary: "Een vliegtuig moest plotseling landen...", icon: "✈️" },
    { week: "Week 20", title: "3FM presenteert nieuw programma", summary: "De radiozender start met een kinderprogramma...", icon: "📻" },
    { week: "Week 19", title: "Dierentuin verwelkomt baby's", summary: "Veel jonge dieren geboren dit seizoen...", icon: "🐯" }
  ];

  const savedItems = [
    { title: "Kleurplaat vliegtuigen", type: "Kleurplaat", week: "Week 22", icon: "🎨" },
    { title: "Quiz over dieren", type: "Quiz", week: "Week 21", icon: "🧩" },
    { title: "Gespreksvragen muziek", type: "Gespreksvragen", week: "Week 20", icon: "💬" }
  ];

  // Data voor de grafiek
  const chartData = [
    { week: "Week 18", quizzes: 8, score: 2.8 },
    { week: "Week 19", quizzes: 10, score: 3.1 },
    { week: "Week 20", quizzes: 15, score: 3.0 },
    { week: "Week 21", quizzes: 13, score: 3.4 },
    { week: "Week 22", quizzes: 12, score: 3.2 }
  ];

  const chartConfig = {
    quizzes: {
      label: "Gemaakte quizzes",
      color: "#FFA94D"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Titel en uitleg */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Instellingen voor docenten</h2>
          <p className="text-xl text-muted-foreground">
            Zoek, filter en bekijk wat je leerlingen hebben gedaan
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Zoekfunctie */}
          <Card className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Search className="mr-3" />
                Zoek naar artikelen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Bijv. oorlog, 3FM, regen"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary font-medium text-lg"
                  />
                </div>
              </div>
              
              {searchTerm && (
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground mb-3">Zoekresultaten:</h4>
                  {searchResults.map((result, index) => (
                    <Link 
                      key={index} 
                      to="/news/1"
                      className="block bg-gray-50 p-4 rounded-2xl border-2 border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-2xl">{result.icon}</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-bold text-primary">{result.week}</span>
                            <Star className="text-gray-300" size={16} />
                          </div>
                          <h5 className="font-bold text-foreground mb-1">{result.title}</h5>
                          <p className="text-sm text-muted-foreground">{result.summary}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Weekterugblik */}
          <Card className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Calendar className="mr-3" />
                Bekijk vorige weken
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {weeks.map((week, index) => (
                  <Link
                    key={index}
                    to={`/docenten/week/${week.number}`}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-2xl border-2 border-blue-200 text-center block"
                  >
                    <div className="text-2xl mb-2">
                      {index === 0 ? "🐣" : index === 1 ? "🦋" : index === 2 ? "🎵" : index === 3 ? "⚽" : "🎉"}
                    </div>
                    <h4 className="font-bold text-foreground mb-1">Week {week.number}</h4>
                    <p className="text-sm font-bold text-primary mb-1">{week.mascot}</p>
                    <p className="text-xs text-muted-foreground">{week.topic}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Opgeslagen items */}
          <Card className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Bookmark className="mr-3" />
                Opgeslagen materiaal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {savedItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-200 text-center cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-primary font-bold mb-1">{item.type}</p>
                    <p className="text-xs text-muted-foreground">{item.week}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Filters */}
            <Card className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <BarChart3 className="mr-3" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
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
                        <option key={week.number} value={`${week.number} (${week.mascot})`}>
                          {week.number} ({week.mascot})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Voortgangsoverzicht met grafiek */}
            <Card className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <TrendingUp className="mr-3" />
                  Voortgang klas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Statistieken */}
                  <div className="grid grid-cols-1 gap-4">
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
                  </div>

                  {/* Grafiek */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-gray-200">
                    <h4 className="font-bold text-foreground mb-4">Voortgang per week</h4>
                    <ChartContainer config={chartConfig} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                          <XAxis dataKey="week" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="quizzes" fill="var(--color-quizzes)" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Downloadsectie */}
          <Card className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Download className="mr-3" />
                Download materialen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-primary text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 text-center">
                  <span className="text-3xl mb-2 block">📄</span>
                  Verwerkingsopdrachten downloaden
                </button>
                <button className="bg-primary text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 text-center">
                  <span className="text-3xl mb-2 block">🎨</span>
                  Kleurplaten downloaden
                </button>
                <button className="bg-primary text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 text-center">
                  <span className="text-3xl mb-2 block">💬</span>
                  Gespreksvragen downloaden
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
