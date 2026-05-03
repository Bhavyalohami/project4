import phoneImage from "../assets/product-phone.svg";
import laptopImage from "../assets/product-laptop.svg";
import tabletImage from "../assets/product-tablet.svg";
import headphonesImage from "../assets/product-headphones.svg";
import watchImage from "../assets/product-watch.svg";
import displayImage from "../assets/product-display.svg";

export const productList = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "Phone",
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 842,
    stock: "Ships today",
    monthly: 50,
    badge: "Titanium build",
    color: "Natural Titanium",
    specs: ["A17 Pro", "48MP camera", "USB-C", "29h video"],
    imgSrc: phoneImage,
    description: "A17 Pro performance, pro camera control, and all-day endurance.",
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    category: "Laptop",
    price: 1299,
    oldPrice: 1399,
    rating: 4.8,
    reviews: 631,
    stock: "Studio pickup",
    monthly: 55,
    badge: "18-hour battery",
    color: "Midnight",
    specs: ["M3 chip", "13.6 display", "16GB ready", "2.7 lb"],
    imgSrc: laptopImage,
    description: "Portable power for work, study, editing, and everything between.",
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    category: "Tablet",
    price: 799,
    oldPrice: 899,
    rating: 4.7,
    reviews: 418,
    stock: "2-day delivery",
    monthly: 34,
    badge: "M2 chip",
    color: "Blue",
    specs: ["M2 chip", "13-inch", "Pencil Pro", "Wi-Fi 6E"],
    imgSrc: tabletImage,
    description: "A lightweight creative canvas with serious desktop-class speed.",
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    category: "Audio",
    price: 549,
    oldPrice: 599,
    rating: 4.8,
    reviews: 529,
    stock: "Only 6 left",
    monthly: 24,
    badge: "Spatial audio",
    color: "Silver",
    specs: ["ANC", "Spatial audio", "20h battery", "Memory foam"],
    imgSrc: headphonesImage,
    description: "Immersive listening, active noise control, and premium comfort.",
  },
  {
    id: "watch-ultra",
    name: "Watch Ultra 2",
    category: "Wearable",
    price: 899,
    oldPrice: 949,
    rating: 4.9,
    reviews: 377,
    stock: "Ships tomorrow",
    monthly: 38,
    badge: "Adventure ready",
    color: "Titanium",
    specs: ["Dual GPS", "49mm", "100m water", "36h battery"],
    imgSrc: watchImage,
    description: "Precision fitness, navigation, and health tools in one tough watch.",
  },
  {
    id: "studio-display",
    name: "Studio Display",
    category: "Display",
    price: 1599,
    oldPrice: 1699,
    rating: 4.7,
    reviews: 214,
    stock: "Freight delivery",
    monthly: 67,
    badge: "5K retina",
    color: "Silver",
    specs: ["5K Retina", "12MP camera", "Six speakers", "Thunderbolt"],
    imgSrc: displayImage,
    description: "A cinematic 27-inch canvas for design, video, and deep focus.",
  },
];

export const categories = ["All", ...new Set(productList.map((item) => item.category))];

export const bundles = [
  {
    title: "Hybrid desk bundle",
    price: 2899,
    savings: 220,
    items: ["MacBook Air M3", "Studio Display", "AirPods Max"],
  },
  {
    title: "Travel creator bundle",
    price: 2499,
    savings: 180,
    items: ["iPhone 15 Pro", "iPad Air", "Watch Ultra 2"],
  },
  {
    title: "Focus audio bundle",
    price: 1389,
    savings: 110,
    items: ["AirPods Max", "Watch Ultra 2", "Setup support"],
  },
];

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
