import { Filter } from 'lucide-react';
import { genres } from '../data/animeData';

interface FilterBarProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({ 
  selectedGenre, 
  onGenreChange, 
  sortBy, 
  onSortChange 
}: FilterBarProps) {
  return (
    <div className="glass-card p-4 mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Filter Icon & Title */}
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-bangers text-lg text-foreground">Filters</h3>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
          {/* Genre Filter */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Genre</label>
            <select
              value={selectedGenre}
              onChange={(e) => onGenreChange(e.target.value)}
              className="px-3 py-2 rounded-lg border bg-card/50 backdrop-blur-sm border-border text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-[150px]"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 rounded-lg border bg-card/50 backdrop-blur-sm border-border text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-[150px]"
            >
              <option value="rating">Highest Rated</option>
              <option value="title">Title A-Z</option>
              <option value="releaseDate">Newest First</option>
              <option value="episodes">Episode Count</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedGenre !== 'All' || sortBy !== 'rating') && (
        <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border/50">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedGenre !== 'All' && (
            <button
              onClick={() => onGenreChange('All')}
              className="glow-tag flex items-center space-x-1 group"
            >
              <span>{selectedGenre}</span>
              <span className="text-xs opacity-50 group-hover:opacity-100">×</span>
            </button>
          )}
          {sortBy !== 'rating' && (
            <span className="px-2 py-1 rounded-full text-xs bg-secondary/20 text-secondary border border-secondary/30">
              Sorted by: {sortBy === 'title' ? 'Title' : sortBy === 'releaseDate' ? 'Release Date' : 'Episodes'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}