
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ArrowLeft } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = [
    {
      question: "In welk land is het vliegtuig gevallen?",
      options: ["India", "Pakistan", "Engeland", "Verenigde Staten"],
      correctAnswer: "India"
    }
  ];

  const handleAnswerClick = (answer: string) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
    setSelectedAnswer("");
    setShowFeedback(false);
    setIsCorrect(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <ArrowLeft className="w-8 h-8 text-foreground cursor-pointer" onClick={() => window.history.back()} />
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-8">
            <div className="w-32 h-32 flex items-center justify-center">
              <span className="text-6xl">🐧</span>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Start de quiz</h2>
              <p className="text-xl text-muted-foreground">Kies het juiste antwoord</p>
            </div>
          </div>
          
          {showFeedback && (
            <div className="text-right">
              <button onClick={nextQuestion} className="text-lg text-muted-foreground hover:text-foreground">
                Volgende vraag →
              </button>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {questions[currentQuestion].question}
          </h3>
          
          {showFeedback && (
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-foreground mb-2">
                {isCorrect ? "Goed zo!" : "Helaas!"}
              </h4>
              <p className="text-lg text-muted-foreground">
                {isCorrect ? "Dit is het goede antwoord" : "Dit is het foute antwoord"}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`p-6 rounded-2xl font-bold text-xl transition-all duration-300 border-4 ${
                  showFeedback && selectedAnswer === option
                    ? isCorrect
                      ? "border-green-400 bg-green-50"
                      : "border-red-400 bg-red-50"
                    : showFeedback && option === questions[currentQuestion].correctAnswer
                    ? "border-green-400 bg-green-50"
                    : "border-gray-200 bg-white hover:border-nieuwsnestje-orange hover:scale-105"
                }`}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
