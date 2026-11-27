import greenSareeModel from '../assets/images/looks/green-saree.png'
import ivoryElephantModel from '../assets/images/looks/ivory-elephant.png'
import marigoldFestiveModel from '../assets/images/looks/marigold-festive.png'
import purpleBanarasiModel from '../assets/images/looks/purple-banarasi.png'
import raniPinkPeacockModel from '../assets/images/looks/rani-pink-peacock.png'
import redSareeModel from '../assets/images/looks/red-saree.png'
import royalCobaltModel from '../assets/images/looks/royal-cobalt.png'
import turquoiseKanjivaramModel from '../assets/images/looks/turquoise-kanjivaram.png'

export type PieceCategory =
  | 'Saree'
  | 'Blouse'
  | 'Necklace'
  | 'Earrings'
  | 'Waist Belt'
  | 'Bangles'

export interface LookPiece {
  id: string
  number: number
  name: string
  category: PieceCategory
  price: number
  swatchColor: string
  accentColor: string
  /** Hotspot coordinates relative to the centered model box */
  x: number
  y: number
}

export interface LookItem {
  id: string
  code: string
  title: string
  image: string
  pieces: LookPiece[]
}

export const LOOKS: LookItem[] = [
  {
    id: 'ivory-elephant',
    code: 'LOOK 01',
    title: 'Ivory Elephant',
    image: ivoryElephantModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Ivory Kanjivaram with Elephant Border', category: 'Saree', price: 24500, swatchColor: '#e4d5b7', accentColor: '#c99b3b', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Dusty Rose Silk Blouse', category: 'Blouse', price: 4200, swatchColor: '#b8326a', accentColor: '#e6be6a', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Pink Stone Temple Choker', category: 'Necklace', price: 9800, swatchColor: '#c73a6b', accentColor: '#e6be6a', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Jhumkas with Pearl Drops', category: 'Earrings', price: 4500, swatchColor: '#f5efe6', accentColor: '#c99b3b', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Elephant Motif Oddiyanam', category: 'Waist Belt', price: 6800, swatchColor: '#b8326a', accentColor: '#f5d36c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Gold & Dusty Rose Bangle Stack', category: 'Bangles', price: 2400, swatchColor: '#c74c79', accentColor: '#e6be6a', x: 57, y: 54 },
    ],
  },
  {
    id: 'turquoise-kanjivaram',
    code: 'LOOK 02',
    title: 'Turquoise Kanjivaram',
    image: turquoiseKanjivaramModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Turquoise Kanjivaram Fish Pallu', category: 'Saree', price: 26800, swatchColor: '#157f8c', accentColor: '#d4a648', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Coral Red Silk Blouse', category: 'Blouse', price: 4400, swatchColor: '#c83232', accentColor: '#e6be6a', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Coral and Pearl Choker', category: 'Necklace', price: 10200, swatchColor: '#d4483b', accentColor: '#f5efe6', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Coral Jhumka Pair', category: 'Earrings', price: 4200, swatchColor: '#d4483b', accentColor: '#e6be6a', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Conch Shell Oddiyanam', category: 'Waist Belt', price: 6400, swatchColor: '#157f8c', accentColor: '#f5d36c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Gold & Turquoise Bangle Stack', category: 'Bangles', price: 2600, swatchColor: '#157f8c', accentColor: '#d4483b', x: 57, y: 54 },
    ],
  },
  {
    id: 'rani-pink-peacock',
    code: 'LOOK 03',
    title: 'Rani Pink Peacock',
    image: raniPinkPeacockModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Rani Pink Peacock Kanjivaram', category: 'Saree', price: 28500, swatchColor: '#d91c5c', accentColor: '#e6be6a', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Midnight Navy Zari Blouse', category: 'Blouse', price: 4600, swatchColor: '#1f2d5a', accentColor: '#e6be6a', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Sapphire Meenakari Choker', category: 'Necklace', price: 11200, swatchColor: '#233b7c', accentColor: '#f5d36c', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Sapphire Jhumkas', category: 'Earrings', price: 4800, swatchColor: '#233b7c', accentColor: '#e6be6a', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Sapphire Chakra Oddiyanam', category: 'Waist Belt', price: 7200, swatchColor: '#d91c5c', accentColor: '#233b7c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Rani Pink & Gold Bangle Stack', category: 'Bangles', price: 2900, swatchColor: '#d91c5c', accentColor: '#e6be6a', x: 57, y: 54 },
    ],
  },
  {
    id: 'royal-cobalt',
    code: 'LOOK 04',
    title: 'Royal Cobalt Temple',
    image: royalCobaltModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Royal Cobalt Temple Zari Saree', category: 'Saree', price: 25900, swatchColor: '#1e38a8', accentColor: '#e6be6a', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Magenta Brocade Blouse', category: 'Blouse', price: 4300, swatchColor: '#c41e6b', accentColor: '#e6be6a', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Kundan & Cobalt Necklace', category: 'Necklace', price: 10500, swatchColor: '#1e38a8', accentColor: '#f5efe6', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Temple Bell Chandbalis', category: 'Earrings', price: 4600, swatchColor: '#c41e6b', accentColor: '#e6be6a', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Mayil Peacock Oddiyanam', category: 'Waist Belt', price: 6900, swatchColor: '#1e38a8', accentColor: '#f5d36c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Cobalt & Zari Bangle Stack', category: 'Bangles', price: 2500, swatchColor: '#1e38a8', accentColor: '#c41e6b', x: 57, y: 54 },
    ],
  },
  {
    id: 'crimson-heritage',
    code: 'LOOK 05',
    title: 'Crimson Heritage',
    image: redSareeModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Crimson Bridal Kanjivaram', category: 'Saree', price: 31500, swatchColor: '#9e1b24', accentColor: '#e6be6a', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Crimson Zari Sleeve Blouse', category: 'Blouse', price: 4900, swatchColor: '#7d1219', accentColor: '#f5d36c', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Lakshmi Kasu Mala Haram', category: 'Necklace', price: 13400, swatchColor: '#9e1b24', accentColor: '#f5d36c', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Ruby Kemp Bridal Jhumkas', category: 'Earrings', price: 5200, swatchColor: '#9e1b24', accentColor: '#e6be6a', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Gajalakshmi Gold Oddiyanam', category: 'Waist Belt', price: 7800, swatchColor: '#9e1b24', accentColor: '#f5d36c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Bridal Vermilion & Gold Kadas', category: 'Bangles', price: 3200, swatchColor: '#9e1b24', accentColor: '#e6be6a', x: 57, y: 54 },
    ],
  },
  {
    id: 'emerald-zari',
    code: 'LOOK 06',
    title: 'Emerald Zari',
    image: greenSareeModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Forest Emerald Gold Zari Saree', category: 'Saree', price: 27400, swatchColor: '#145a3a', accentColor: '#d4a648', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Embroidered Emerald Blouse', category: 'Blouse', price: 4500, swatchColor: '#0e432b', accentColor: '#e6be6a', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Panna Bead Temple Necklace', category: 'Necklace', price: 11600, swatchColor: '#145a3a', accentColor: '#f5d36c', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Emerald Drop Gold Jhumkas', category: 'Earrings', price: 4700, swatchColor: '#145a3a', accentColor: '#c99b3b', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Kundan Emerald Oddiyanam', category: 'Waist Belt', price: 7100, swatchColor: '#145a3a', accentColor: '#f5d36c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Forest Green & Gold Chooda', category: 'Bangles', price: 2800, swatchColor: '#145a3a', accentColor: '#e6be6a', x: 57, y: 54 },
    ],
  },
  {
    id: 'purple-banarasi',
    code: 'LOOK 07',
    title: 'Purple Banarasi',
    image: purpleBanarasiModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Deep Plum Banarasi Kanjivaram', category: 'Saree', price: 29200, swatchColor: '#5c1d6b', accentColor: '#e6be6a', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Champagne Tissue Blouse', category: 'Blouse', price: 4400, swatchColor: '#cbb07c', accentColor: '#5c1d6b', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Amethyst Polki Choker', category: 'Necklace', price: 12100, swatchColor: '#6d257d', accentColor: '#f5d36c', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Polki & Pearl Jhumkas', category: 'Earrings', price: 4900, swatchColor: '#6d257d', accentColor: '#f5efe6', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Antique Filigree Oddiyanam', category: 'Waist Belt', price: 7300, swatchColor: '#5c1d6b', accentColor: '#f5d36c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Plum & Antique Gold Kadas', category: 'Bangles', price: 2700, swatchColor: '#5c1d6b', accentColor: '#cbb07c', x: 57, y: 54 },
    ],
  },
  {
    id: 'marigold-festive',
    code: 'LOOK 08',
    title: 'Marigold Festive',
    image: marigoldFestiveModel,
    pieces: [
      { id: 'saree', number: 1, name: 'Marigold Gold Temple Border Saree', category: 'Saree', price: 23800, swatchColor: '#d48817', accentColor: '#9e1b24', x: 68, y: 74 },
      { id: 'blouse', number: 2, name: 'Deep Maroon Silk Blouse', category: 'Blouse', price: 4100, swatchColor: '#6e1622', accentColor: '#f5d36c', x: 33, y: 34 },
      { id: 'choker', number: 3, name: 'Citrine & Gold Mango Mala', category: 'Necklace', price: 9600, swatchColor: '#d48817', accentColor: '#9e1b24', x: 50, y: 25 },
      { id: 'jhumka', number: 4, name: 'Sunburst Gold Jhumkas', category: 'Earrings', price: 4100, swatchColor: '#d48817', accentColor: '#f5d36c', x: 59, y: 19 },
      { id: 'oddiyanam', number: 5, name: 'Temple Lotus Oddiyanam', category: 'Waist Belt', price: 6500, swatchColor: '#6e1622', accentColor: '#f5d36c', x: 49, y: 46 },
      { id: 'bangles', number: 6, name: 'Haldi Marigold & Gold Bangles', category: 'Bangles', price: 2300, swatchColor: '#d48817', accentColor: '#6e1622', x: 57, y: 54 },
    ],
  },
]
