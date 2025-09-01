import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Search, Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* 404 Icon */}
        <div className="relative mb-8">
          <div className="glass-card w-24 h-24 mx-auto flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full animate-ping opacity-30"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bangers text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-bangers text-muted-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Looks like this anime adventure got lost in the void! The page you're looking for 
          doesn't exist in our chronicles.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="neon-button inline-flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="glass-card px-6 py-3 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Popular destinations:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              to="/?genre=Action" 
              className="glow-tag text-xs"
            >
              Action Anime
            </Link>
            <Link 
              to="/?genre=Romance" 
              className="glow-tag text-xs"
            >
              Romance
            </Link>
            <Link 
              to="/?genre=Shounen" 
              className="glow-tag text-xs"
            >
              Shounen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
