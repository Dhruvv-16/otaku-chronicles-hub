export interface Anime {
  id: number;
  title: string;
  releaseDate: string;
  studio: string;
  genre: string[];
  plot: string;
  mainCharacters: string[];
  abilities: string[];
  notableArcs: string[];
  trivia: string;
  reviews: string;
  image: string;
  rating: number;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  episodes?: number;
  director?: string;
}

import cyberpunkImage from '../assets/cyberpunk-edgerunners.jpg';
import onePieceImage from '../assets/one-piece.jpg';
import chainsawManImage from '../assets/chainsaw-man.jpg';
import jujutsuKaisenImage from '../assets/jujutsu-kaisen.jpg';
import demonSlayerImage from '../assets/demon-slayer.jpg';
import yourNameImage from '../assets/your-name.jpg';
import fragrantFlowersImage from '../assets/fragrant-flowers.jpg';

export const animeData: Anime[] = [
  {
    id: 1,
    title: "Cyberpunk: Edgerunners",
    releaseDate: "Sep 13, 2022",
    studio: "Trigger",
    genre: ["Cyberpunk", "Action", "Sci-Fi"],
    plot: "David Martinez becomes an 'edgerunner' to survive in Night City, navigating the dangerous world of cybernetic enhancements and corporate warfare.",
    mainCharacters: ["David Martinez", "Lucy", "Maine", "Pilar", "Rebecca"],
    abilities: ["Cybernetic enhancements", "Combat skills", "Hacking", "Sandevistan"],
    notableArcs: ["Night City survival", "Conflict with gangs", "Corporate conspiracy"],
    trivia: "Prequel to Cyberpunk 2077, visually stunning neon animation with a tragic narrative",
    reviews: "Beautifully crafted; storyline and character development excellent. A masterpiece of animation.",
    image: cyberpunkImage,
    rating: 9.2,
    status: "Completed",
    episodes: 10
  },
  {
    id: 2,
    title: "One Piece",
    releaseDate: "Oct 20, 1999",
    studio: "Toei Animation",
    genre: ["Adventure", "Fantasy", "Comedy", "Shounen"],
    plot: "Luffy and his pirate crew search for the legendary One Piece treasure to become Pirate King in a world filled with Devil Fruits and marine forces.",
    mainCharacters: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Sanji", "Usopp"],
    abilities: ["Devil Fruits (Gomu Gomu no Mi)", "Swordsmanship", "Navigation skills", "Haki"],
    notableArcs: ["East Blue", "Alabasta", "Enies Lobby", "Wano", "Dressrosa"],
    trivia: "Longest-running anime with over 1,000 episodes, created by Eiichiro Oda",
    reviews: "Awesome, hilarious, and touching; epic adventure that defines the shounen genre.",
    image: onePieceImage,
    rating: 9.5,
    status: "Ongoing",
    episodes: 1000
  },
  {
    id: 3,
    title: "Chainsaw Man",
    releaseDate: "Oct 11, 2022",
    studio: "MAPPA",
    genre: ["Action", "Supernatural", "Horror", "Dark Fantasy"],
    plot: "Denji merges with his pet devil Pochita to become Chainsaw Man and fight devils as part of the Public Safety Devil Hunters.",
    mainCharacters: ["Denji", "Power", "Aki Hayakawa", "Makima", "Reze"],
    abilities: ["Chainsaw transformations", "Devil hunting", "Combat skills", "Devil contracts"],
    notableArcs: ["Public Safety arc", "Katana Devil arc", "Bomb Girl arc"],
    trivia: "Dark, violent, yet emotional storytelling with incredible animation by MAPPA",
    reviews: "Visually impressive; character movements realistic. A brutal yet beautiful anime.",
    image: chainsawManImage,
    rating: 8.8,
    status: "Completed",
    episodes: 12
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    releaseDate: "Oct 3, 2020",
    studio: "MAPPA",
    genre: ["Action", "Supernatural", "Dark Fantasy", "School"],
    plot: "Yuji Itadori fights curses after ingesting a cursed object, joining Tokyo Jujutsu High to protect others from supernatural threats.",
    mainCharacters: ["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo"],
    abilities: ["Cursed energy techniques", "Domain Expansion", "Combat skills", "Cursed tools"],
    notableArcs: ["Culling Game", "Kyoto Goodwill Event", "Shibuya Incident"],
    trivia: "High-quality fight animation, critically acclaimed for visuals and character development",
    reviews: "Animation is awesome; fights breathtaking and fun characters with deep emotional moments.",
    image: jujutsuKaisenImage,
    rating: 9.0,
    status: "Ongoing",
    episodes: 24
  },
  {
    id: 5,
    title: "Demon Slayer: Kimetsu no Yaiba",
    releaseDate: "Apr 6, 2019",
    studio: "Ufotable",
    genre: ["Action", "Supernatural", "Historical", "Shounen"],
    plot: "Tanjiro becomes a demon slayer to save his sister Nezuko and avenge his family in Taisho-era Japan.",
    mainCharacters: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira", "Giyu Tomioka"],
    abilities: ["Breathing techniques", "Swordsmanship", "Demon powers", "Total Concentration"],
    notableArcs: ["Mugen Train", "Entertainment District", "Swordsmith Village", "Hashira Training"],
    trivia: "Stunning animation, high-quality fight sequences, and emotional storytelling",
    reviews: "Stunning animation and soundtrack; best fight sequences in modern anime.",
    image: demonSlayerImage,
    rating: 9.3,
    status: "Completed",
    episodes: 44
  },
  {
    id: 6,
    title: "Your Name (Kimi no Na wa)",
    releaseDate: "Aug 26, 2016",
    director: "Makoto Shinkai",
    studio: "CoMix Wave Films",
    genre: ["Romance", "Drama", "Supernatural", "Movie"],
    plot: "Mitsuha and Taki mysteriously swap bodies and search for each other across time and space in this beautiful romantic tale.",
    mainCharacters: ["Mitsuha Miyamizu", "Taki Tachibana"],
    abilities: ["Body swapping", "Timeline connections", "Spiritual bonds"],
    notableArcs: ["Body swap discovery", "Comet event", "Fate convergence", "Memory recovery"],
    trivia: "Worldwide box office hit, critically acclaimed for its beautiful animation and soundtrack",
    reviews: "Exceptional film with compelling story, visuals, and soundtrack. A masterpiece of animation cinema.",
    image: yourNameImage,
    rating: 9.4,
    status: "Completed",
    episodes: 1
  },
  {
    id: 7,
    title: "Fragrant Flowers Bloom with Dignity",
    releaseDate: "2023",
    studio: "Example Studio",
    genre: ["Slice of Life", "Romance", "Drama", "School"],
    plot: "Follows lives of students in a prestigious academy, exploring love, friendship, and personal growth in a beautiful setting.",
    mainCharacters: ["Hana Sakura", "Riku Hayashi", "Mei Tanaka", "Sora Kimura"],
    abilities: ["Emotional growth", "Musical talents", "Leadership skills", "Artistic expression"],
    notableArcs: ["Cultural festival", "Student council elections", "Summer romance", "Graduation ceremony"],
    trivia: "Heartwarming story, beautiful animation, focuses on character development and relationships",
    reviews: "Charming, emotional, and beautifully animated; a must-watch for slice-of-life fans.",
    image: fragrantFlowersImage,
    rating: 8.5,
    status: "Completed",
    episodes: 12
  }
];

export const genres = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Cyberpunk",
  "Dark Fantasy",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Movie",
  "Romance",
  "School",
  "Sci-Fi",
  "Shounen",
  "Slice of Life",
  "Supernatural"
];