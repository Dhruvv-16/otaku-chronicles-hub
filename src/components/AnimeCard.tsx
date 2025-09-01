import { Star, Calendar, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Anime } from '../data/animeData';

interface AnimeCardProps {
  anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link to={`/anime/${anime.id}`} className="anime-card block">
      <div className="relative">
        {/* Image Container */}
        <div className="card-image aspect-[2/3] relative overflow-hidden rounded-t-lg">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Play Icon */}
          <div className="card-overlay absolute inset-0 flex items-center justify-center">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transform scale-0 group-hover:scale-100 transition-all duration-300">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 right-3">
            <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{anime.rating}</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
              anime.status === 'Ongoing' 
                ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                : anime.status === 'Completed'
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
            }`}>
              {anime.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-bangers text-xl text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
            {anime.title}
          </h3>

          {/* Studio & Release */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(anime.releaseDate).getFullYear()}</span>
            </div>
            <span className="font-medium">{anime.studio}</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1">
            {anime.genre.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="glow-tag text-xs"
              >
                {genre}
              </span>
            ))}
            {anime.genre.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{anime.genre.length - 3}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {anime.plot}
          </p>

          {/* Episodes Count */}
          {anime.episodes && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Play className="w-4 h-4 mr-1" />
              <span>{anime.episodes} episodes</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}