
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ontmoet Pip!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Pip de pinguïn gaat je deze week het nieuws vertellen
          </p>
          
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="w-64 h-64 bg-nieuwsnestje-blue rounded-full flex items-center justify-center animate-bounce-gentle">
              <span className="text-8xl">🐧</span>
            </div>
          </div>
          
          <Link to="/quiz" className="nieuwsnestje-button">
            Ga verder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
