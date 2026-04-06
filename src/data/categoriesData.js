import image6 from "../assets/music.avif";
import image7 from "../assets/teachnalogy.jpeg";
import image8 from "../assets/art.webp";
import image9 from "../assets/sports.jpg";
import image10 from "../assets/business.jpg";
import image11 from "../assets/fun.jpg";
import image12 from "../assets/food.jpg";
import image13 from "../assets/entertainments.jpg";
import image14 from "../assets/fashion.jpeg";
import image15 from "../assets/education.jpeg";
import image16 from "../assets/networking.jpeg";
import image17 from "../assets/workship.avif";
import image18 from "../assets/charity.jpg";
import image19 from "../assets/festival.jpg";
import image20 from "../assets/mic.webp";

/** Shared category list for home grid, categories page, and event filters */
export const categories = [
  { id: "music", title: "Music", image: image6, count: 12 },
  { id: "technology", title: "Technology", image: image7, count: 8 },
  { id: "art", title: "Art", image: image8, count: 5 },
  { id: "sports", title: "Sports", image: image9, count: 9 },
  { id: "business", title: "Business", image: image10, count: 6 },
  { id: "fun", title: "Fun", image: image11, count: 10 },
  { id: "food-drinks", title: "Food & Drinks", image: image12, count: 7 },
  { id: "entertainment", title: "Entertainment", image: image13, count: 11 },
  { id: "fashion", title: "Fashion", image: image14, count: 4 },
  { id: "education", title: "Education", image: image15, count: 3 },
  { id: "networking", title: "Networking", image: image16, count: 5 },
  { id: "workshop", title: "Workshop", image: image17, count: 2 },
  { id: "charity", title: "Charity", image: image18, count: 1 },
  { id: "festival", title: "Festival", image: image19, count: 1 },
  { id: "conference", title: "Conference", image: image20, count: 6 },
];

export function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}
