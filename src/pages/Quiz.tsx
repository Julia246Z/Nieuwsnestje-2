
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = [
    {
      question: "In welk land is het vliegtuig gevallen?",
      options: ["India", "Pakistan", "Engeland", "Verenigde Staten"],
      correct: "India"
    }
  ];

  const handleAnswerClick = (answer: string) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowFeedback(false);
      setIsCorrect(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-4xl mr-4 hover:scale-110 transition-transform">
            ←
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="w-48 h-48 bg-nieuwsnestje-blue rounded-full flex items-center justify-center animate-bounce-gentle">
              <span className="text-6xl">🐧</span>
            </div>
            
            <div className="flex-1 ml-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Start de quiz</h2>
              <p className="text-xl text-muted-foreground mb-8">Kies het juiste antwoord</p>
              
              {showFeedback && (
                <div className="mb-8 text-right">
                  <button
                    onClick={handleNextQuestion}
                    className="text-lg text-primary font-bold hover:underline"
                  >
                    Volgende vraag →
                  </button>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {questions[currentQuestion].question}
              </h3>
              
              {showFeedback && (
                <div className="mb-8 text-center">
                  <h4 className={`text-3xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? 'Goed zo!' : 'Helaas!'}
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    {isCorrect ? 'Dit is het goede antwoord' : 'Dit is het foute antwoord'}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`quiz-option ${
                  showFeedback && selectedAnswer === option
                    ? isCorrect && selectedAnswer === option
                      ? 'correct'
                      : selectedAnswer === option && !isCorrect
                      ? 'incorrect'
                      : ''
                    : ''
                }`}
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
