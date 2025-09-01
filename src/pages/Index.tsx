import { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { animeData, genres } from '../data/animeData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimeCard from '../components/AnimeCard';
import FilterBar from '../components/FilterBar';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const filteredAndSortedAnime = useMemo(() => {
    let filtered = animeData.filter(anime => {
      const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           anime.plot.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           anime.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesGenre = selectedGenre === 'All' || anime.genre.includes(selectedGenre);
      
      return matchesSearch && matchesGenre;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'releaseDate':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        case 'episodes':
          return (b.episodes || 0) - (a.episodes || 0);
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [searchQuery, selectedGenre, sortBy]);

  return (
    <div className="min-h-screen">
      <Navbar onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bangers text-foreground">
              Otaku Chronicles
            </h1>
            <div className="relative">
              <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dive into the extraordinary world of anime. Discover legendary series, explore epic adventures, 
            and join fellow otaku in celebrating the art of animation.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="glass-card px-6 py-3">
              <span className="text-2xl font-bangers text-primary">{animeData.length}</span>
              <span className="text-muted-foreground ml-2">Anime Reviews</span>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-2xl font-bangers text-secondary">{genres.length - 1}</span>
              <span className="text-muted-foreground ml-2">Genres</span>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-2xl font-bangers text-accent">∞</span>
              <span className="text-muted-foreground ml-2">Adventures</span>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <FilterBar 
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="text-primary font-medium">{filteredAndSortedAnime.length}</span> anime
            {searchQuery && (
              <span> matching "<span className="text-accent font-medium">{searchQuery}</span>"</span>
            )}
            {selectedGenre !== 'All' && (
              <span> in <span className="text-secondary font-medium">{selectedGenre}</span></span>
            )}
          </p>
        </div>

        {/* Anime Grid */}
        {filteredAndSortedAnime.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedAnime.map((anime) => (
              <div key={anime.id} className="animate-fade-in">
                <AnimeCard anime={anime} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bangers text-foreground mb-2">No anime found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to discover more anime.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('All');
                setSortBy('rating');
              }}
              className="neon-button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
