
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ArrowLeft, Download, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeekOverview = () => {
  const { weekNumber } = useParams();
  
  // Voorbeeld data voor een week - in werkelijkheid zou dit van een API komen
  const weekData = {
    "21": {
      mascot: "Nina",
      topic: "Dieren in de natuur",
      days: [
        {
          date: "Maandag 16 juni",
          articles: [
            { id: 1, title: "Olifanten in Afrika", icon: "🐘", score: "3 van 4", attempts: 12 },
            { id: 2, title: "Beren in de winter", icon: "🐻", score: "2 van 4", attempts: 8 },
            { id: 3, title: "Vogels vliegen weg", icon: "🦅", score: "4 van 4", attempts: 15 }
          ]
        },
        {
          date: "Dinsdag 17 juni",
          articles: [
            { id: 4, title: "Vissen in de zee", icon: "🐟", score: "3 van 4", attempts: 10 },
            { id: 5, title: "Konijnen in het bos", icon: "🐰", score: "2 van 4", attempts: 6 },
            { id: 6, title: "Leeuwen jagen samen", icon: "🦁", score: "3 van 4", attempts: 11 }
          ]
        },
        {
          date: "Woensdag 18 juni",
          articles: [
            { id: 7, title: "Pinguïns op ijs", icon: "🐧", score: "4 van 4", attempts: 13 },
            { id: 8, title: "Slangen kruipen stil", icon: "🐍", score: "1 van 4", attempts: 7 },
            { id: 9, title: "Apen in de boom", icon: "🐵", score: "3 van 4", attempts: 9 }
          ]
        },
        {
          date: "Donderdag 19 juni",
          articles: [
            { id: 10, title: "Honden blaffen hard", icon: "🐕", score: "4 van 4", attempts: 14 },
            { id: 11, title: "Katten slapen veel", icon: "🐱", score: "3 van 4", attempts: 12 },
            { id: 12, title: "Paarden rennen snel", icon: "🐎", score: "2 van 4", attempts: 8 }
          ]
        },
        {
          date: "Vrijdag 20 juni",
          articles: [
            { id: 13, title: "Vlinders zijn mooi", icon: "🦋", score: "4 van 4", attempts: 16 },
            { id: 14, title: "Bijen maken honing", icon: "🐝", score: "3 van 4", attempts: 11 },
            { id: 15, title: "Kikkers in de vijver", icon: "🐸", score: "2 van 4", attempts: 9 }
          ]
        }
      ]
    }
  };

  const currentWeek = weekData[weekNumber as keyof typeof weekData] || weekData["21"];

  return (
    <div className="min-h-screen bg-[#FFF8EF]">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Terug knop */}
        <div className="mb-8">
          <Link to="/docenten" className="flex items-center text-foreground hover:text-primary">
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="text-lg font-medium">Terug naar docenten overzicht</span>
          </Link>
        </div>

        {/* Titel en uitleg */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Weekoverzicht – Week {weekNumber}
          </h2>
          <p className="text-xl text-muted-foreground">
            Bekijk hier het nieuws en de quizresultaten van deze week
          </p>
          <div className="mt-4 inline-flex items-center bg-white px-6 py-3 rounded-full border-2 border-blue-200">
            <span className="text-2xl mr-3">🦋</span>
            <span className="font-bold text-primary">{currentWeek.mascot}</span>
            <span className="mx-2">•</span>
            <span className="text-muted-foreground">{currentWeek.topic}</span>
          </div>
        </div>

        {/* Dagindeling */}
        <div className="max-w-6xl mx-auto space-y-8">
          {currentWeek.days.map((day, dayIndex) => (
            <Card key={dayIndex} className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <span className="text-3xl mr-4">📅</span>
                  {day.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {day.articles.map((article, articleIndex) => (
                    <div
                      key={articleIndex}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200"
                    >
                      {/* Artikel header */}
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-3">{article.icon}</div>
                        <Link 
                          to="/news/1"
                          className="font-bold text-foreground text-lg hover:text-primary block mb-2"
                        >
                          {article.title}
                        </Link>
                      </div>

                      {/* Quiz resultaten */}
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-xl text-center">
                          <p className="text-sm text-muted-foreground mb-1">Quizscore</p>
                          <p className="font-bold text-foreground">{article.score} vragen goed</p>
                        </div>
                        
                        <div className="bg-white p-3 rounded-xl text-center">
                          <p className="text-sm text-muted-foreground mb-1">Keer gemaakt</p>
                          <p className="font-bold text-foreground">{article.attempts}x</p>
                        </div>

                        {/* Quiz opnieuw maken knop */}
                        <Link
                          to="/quiz"
                          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Maak quiz opnieuw
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dag statistieken */}
                <div className="mt-6 bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-200">
                  <h4 className="font-bold text-foreground mb-2 flex items-center">
                    <span className="text-xl mr-2">📊</span>
                    Statistieken voor {day.date.toLowerCase()}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Totaal quizzen gemaakt:</span>
                      <span className="font-bold text-foreground ml-2">
                        {day.articles.reduce((sum, article) => sum + article.attempts, 0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Gemiddelde score:</span>
                      <span className="font-bold text-foreground ml-2">
                        {(day.articles.reduce((sum, article) => {
                          const score = parseInt(article.score.split(' ')[0]);
                          return sum + score;
                        }, 0) / day.articles.length).toFixed(1)} van 4
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Moeilijkste artikel:</span>
                      <span className="font-bold text-foreground ml-2">
                        {day.articles.reduce((prev, current) => {
                          const prevScore = parseInt(prev.score.split(' ')[0]);
                          const currentScore = parseInt(current.score.split(' ')[0]);
                          return prevScore < currentScore ? prev : current;
                        }).title.split(' ').slice(0, 2).join(' ')}...
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Export optie */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card className="bg-white rounded-3xl shadow-lg border-2 border-transparent">
            <CardContent className="p-8 text-center">
              <button className="bg-primary text-white font-bold text-lg px-8 py-4 rounded-full flex items-center justify-center mx-auto">
                <Download className="w-5 h-5 mr-3" />
                Download quizresultaten van Week {weekNumber}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WeekOverview;
