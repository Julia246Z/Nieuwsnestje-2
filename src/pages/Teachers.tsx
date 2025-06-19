
import Navigation from "../components/Navigation";

const Teachers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Docenten</h2>
          <p className="text-xl text-muted-foreground">
            Instellingen en materialen voor de klas
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="nieuwsnestje-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Instellingen</h3>
            <div className="space-y-4">
              <div>
                <label className="text-lg font-bold text-foreground mb-2 block">Groep</label>
                <div className="flex space-x-4">
                  <button className="nieuwsnestje-button-secondary">Groep 3</button>
                  <button className="nieuwsnestje-button">Groep 4</button>
                </div>
              </div>
              
              <div>
                <label className="text-lg font-bold text-foreground mb-2 block">Zware thema's</label>
                <div className="flex space-x-4">
                  <button className="nieuwsnestje-button">Aan</button>
                  <button className="nieuwsnestje-button-secondary">Uit</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="nieuwsnestje-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Download materialen</h3>
            <div className="space-y-4">
              <button className="nieuwsnestje-button w-full">
                📄 Verwerkingsopdrachten downloaden
              </button>
              <button className="nieuwsnestje-button w-full">
                🎨 Kleurplaten downloaden
              </button>
              <button className="nieuwsnestje-button w-full">
                💬 Gespreksvragen downloaden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
