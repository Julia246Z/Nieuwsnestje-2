
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { ArrowLeft } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "In welk land is het vliegtuig gevallen?",
      options: ["India", "Pakistan", "Engeland", "Verenigde Staten"],
      correctAnswer: "India"
    },
    {
      question: "Waar ging het vliegtuig naartoe?",
      options: ["Parijs", "Londen", "China", "Amsterdam"],
      correctAnswer: "Londen"
    },
    {
      question: "Wat zagen mensen nadat het vliegtuig op de grond kwam?",
      options: ["Regen", "Zon", "Rook", "Niks"],
      correctAnswer: "Rook"
    },
    {
      question: "Wie kwam er snel helpen nadat het vliegtuig neergevallen was?",
      options: ["De brandweer", "Bouwvakkers", "Postbodes", "Politie"],
      correctAnswer: "De brandweer"
    }
  ];

  const handleAnswerClick = (answer: string) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer("");
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      setQuizComplete(true);
    }
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-[#FFF6EC]">
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
                <h2 className="text-4xl font-bold text-[#2C5282] mb-2">Start de quiz</h2>
                <p className="text-xl text-[#718096]">Kies het juiste antwoord</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-[#2C5282] mb-4">Klaar!</h2>
            <p className="text-2xl text-[#2C5282] mb-8">Je score is {score}/{questions.length}</p>
          </div>

          <div className="flex justify-center space-x-6">
            <Link to="/news" className="bg-[#63B3ED] text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-[#4299E1] transition-colors">
              Meer nieuws
            </Link>
            <Link to="/home" className="border-4 border-[#63B3ED] text-[#2C5282] px-8 py-4 rounded-full font-bold text-xl hover:bg-[#EBF8FF] transition-colors">
              Terug
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6EC]">
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
              <h2 className="text-4xl font-bold text-[#2C5282] mb-2">Start de quiz</h2>
              <p className="text-xl text-[#718096]">Kies het juiste antwoord</p>
            </div>
          </div>
          
          {showFeedback && (
            <div className="text-right">
              {currentQuestion + 1 < questions.length ? (
                <button onClick={nextQuestion} className="text-lg text-[#718096] hover:text-[#2C5282] font-medium">
                  Volgende vraag →
                </button>
              ) : (
                <button onClick={nextQuestion} className="text-lg text-[#718096] hover:text-[#2C5282] font-medium">
                  Quiz voltooien →
                </button>
              )}
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#2C5282] mb-8">
            {questions[currentQuestion].question}
          </h3>
          
          {showFeedback && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-[#2C5282] mb-2">
                {isCorrect ? "Goed zo!" : "Helaas!"}
              </h4>
              <p className="text-lg text-[#718096]">
                {isCorrect ? "Dit is het goede antwoord" : "Dit is het foute antwoord"}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`p-6 rounded-2xl font-bold text-xl transition-all duration-300 border-4 ${
                  showFeedback && selectedAnswer === option
                    ? isCorrect
                      ? "border-[#48BB78] bg-[#C6F6D5] text-[#2C5282]"
                      : "border-[#F56565] bg-[#FED7D7] text-[#2C5282]"
                    : showFeedback && option === questions[currentQuestion].correctAnswer
                    ? "border-[#48BB78] bg-[#C6F6D5] text-[#2C5282]"
                    : "border-[#E2E8F0] bg-white text-[#2C5282] hover:border-[#63B3ED] hover:scale-105"
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
