export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Tim R.",
    role: "Verified Buyer · Hyderabad",
    rating: 5,
    text: "I ordered a Seven Chakra Mala and the quality is absolutely breathtaking. Kriss has a real gift for choosing crystals — I felt the energy the moment I held it.",
    avatar: "T"
  },
  {
    name: "Alicia M.",
    role: "Tarot Reading Client · Bengaluru",
    rating: 5,
    text: "The tarot reading was incredibly accurate and gave me clarity I desperately needed. Kriss has a rare intuitive gift. My life has genuinely shifted since!",
    avatar: "A"
  },
  {
    name: "Marcus K.",
    role: "Verified Buyer · Mumbai",
    rating: 5,
    text: "My Black Tourmaline arrived beautifully packaged with a handwritten note about its properties. You can tell real care goes into every order. Highly recommend!",
    avatar: "M"
  }
];
