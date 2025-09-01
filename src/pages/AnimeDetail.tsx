import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Users, Zap, BookOpen, Info, MessageCircle } from 'lucide-react';
import { animeData } from '../data/animeData';
import AnimeCard from '../components/AnimeCard';

export default function AnimeDetail() {
  const { id } = useParams<{ id: string }>();
  const anime = animeData.find(a => a.id === parseInt(id || '0'));

  if (!anime) {
    return <Navigate to="/404" replace />;
  }

  const relatedAnime = animeData
    .filter(a => a.id !== anime.id && a.genre.some(g => anime.genre.includes(g)))
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[60vh] overflow-hidden">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-8">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
            {/* Poster */}
            <div className="lg:col-span-1">
              <div className="glass-card overflow-hidden group">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title & Rating */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bangers text-foreground mb-2">
                  {anime.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-foreground">{anime.rating}</span>
                    <span className="text-muted-foreground">/10</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    anime.status === 'Ongoing' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : anime.status === 'Completed'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {anime.status}
                  </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Release Date</span>
                  </div>
                  <p className="text-muted-foreground">{anime.releaseDate}</p>
                </div>

                <div className="glass-card p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-foreground">Studio</span>
                  </div>
                  <p className="text-muted-foreground">{anime.studio}</p>
                </div>
              </div>

              {/* Genres */}
              <div>
                <h3 className="font-bangers text-xl text-foreground mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genre.map((genre) => (
                    <span key={genre} className="glow-tag">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Plot */}
              <div className="glass-card p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <h3 className="font-bangers text-xl text-foreground">Plot</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{anime.plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Characters */}
          <div className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-bangers text-xl text-foreground">Main Characters</h3>
            </div>
            <ul className="space-y-2">
              {anime.mainCharacters.map((character, index) => (
                <li key={index} className="text-muted-foreground hover:text-foreground transition-colors">
                  • {character}
                </li>
              ))}
            </ul>
          </div>

          {/* Abilities & Powers */}
          <div className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="font-bangers text-xl text-foreground">Abilities & Powers</h3>
            </div>
            <ul className="space-y-2">
              {anime.abilities.map((ability, index) => (
                <li key={index} className="text-muted-foreground hover:text-foreground transition-colors">
                  • {ability}
                </li>
              ))}
            </ul>
          </div>

          {/* Notable Arcs */}
          <div className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-5 h-5 text-secondary" />
              <h3 className="font-bangers text-xl text-foreground">Notable Arcs</h3>
            </div>
            <ul className="space-y-2">
              {anime.notableArcs.map((arc, index) => (
                <li key={index} className="text-muted-foreground hover:text-foreground transition-colors">
                  • {arc}
                </li>
              ))}
            </ul>
          </div>

          {/* Trivia */}
          <div className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Info className="w-5 h-5 text-accent" />
              <h3 className="font-bangers text-xl text-foreground">Trivia</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{anime.trivia}</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="glass-card p-6">
          <div className="flex items-center space-x-2 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h3 className="font-bangers text-xl text-foreground">Reviews</h3>
          </div>
          <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary/50 pl-4">
            "{anime.reviews}"
          </blockquote>
        </div>

        {/* Related Anime */}
        {relatedAnime.length > 0 && (
          <div>
            <h3 className="font-bangers text-2xl text-foreground mb-6">Related Anime</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedAnime.map((relatedAnime) => (
                <AnimeCard key={relatedAnime.id} anime={relatedAnime} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}