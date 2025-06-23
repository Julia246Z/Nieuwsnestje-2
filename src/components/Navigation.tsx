
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", active: location.pathname === "/" },
    { path: "/diertje", label: "Diertje", active: location.pathname === "/diertje" },
    { path: "/docenten", label: "Docenten", active: location.pathname === "/docenten" },
  ];

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-nieuwsnestje-blue rounded-full flex items-center">
          <span className="text-2xl"><img src="./public/images/logo.png"></img></span>
        </div>
        <h1 className="text-3xl font-bold text-foreground">Nieuwsnestje</h1>
      </div>
      
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              item.active
                ? "bg-nieuwsnestje-blue text-foreground"
                : "bg-transparent text-foreground hover:bg-nieuwsnestje-blue/20"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
