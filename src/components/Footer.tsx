import { Heart, Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-card border-0 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bangers text-lg">O</span>
              </div>
              <h3 className="text-xl font-bangers text-foreground">Otaku Chronicles</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your ultimate destination for anime reviews, news, and community discussions. 
              Dive into the world of anime with fellow otakus.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for anime lovers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bangers text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Top Anime
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Latest Reviews
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bangers text-lg text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-3 rounded-lg glass-card hover:scale-110 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg glass-card hover:scale-110 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-red-500" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg glass-card hover:scale-110 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 Otaku Chronicles. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}