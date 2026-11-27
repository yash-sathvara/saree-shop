import greenSaree from '../assets/images/looks/green-saree.png'
import ivoryElephant from '../assets/images/looks/ivory-elephant.png'
import marigoldFestive from '../assets/images/looks/marigold-festive.png'
import purpleBanarasi from '../assets/images/looks/purple-banarasi.png'
import raniPinkPeacock from '../assets/images/looks/rani-pink-peacock.png'
import redSaree from '../assets/images/looks/red-saree.png'
import royalCobalt from '../assets/images/looks/royal-cobalt.png'
import turquoiseKanjivaram from '../assets/images/looks/turquoise-kanjivaram.png'

export interface SilkCardItem {
  id: string
  titleLines: [string, string]
  price: number
  bgColor: string
  darkText?: boolean
  tiltDeg: number
  arcY: number
  image: string
}

export const SILK_CARDS: SilkCardItem[] = [
  {
    id: 'kanchi-rani',
    titleLines: ['KANCHI', 'RANI'],
    price: 32400,
    bgColor: '#e10d33',
    tiltDeg: -3,
    arcY: 10,
    image: raniPinkPeacock,
  },
  {
    id: 'benares-gold',
    titleLines: ['BENARES', 'GOLD'],
    price: 34800,
    bgColor: '#e8be00',
    darkText: true,
    tiltDeg: -1.5,
    arcY: 2,
    image: marigoldFestive,
  },
  {
    id: 'koorai-check',
    titleLines: ['KOORAI', 'CHECK'],
    price: 18600,
    bgColor: '#0ec22b',
    tiltDeg: -1,
    arcY: -4,
    image: greenSaree,
  },
  {
    id: 'murshidabad-maroon',
    titleLines: ['MURSHIDABAD', 'MAROON'],
    price: 27200,
    bgColor: '#e61d00',
    tiltDeg: 0.5,
    arcY: -6,
    image: redSaree,
  },
  {
    id: 'monsoon-teal',
    titleLines: ['MONSOON', 'TEAL'],
    price: 22900,
    bgColor: '#0d8af0',
    tiltDeg: 1.5,
    arcY: -4,
    image: turquoiseKanjivaram,
  },
  {
    id: 'sindoor-zari',
    titleLines: ['SINDOOR', 'ZARI'],
    price: 28500,
    bgColor: '#f28d00',
    tiltDeg: 2,
    arcY: 2,
    image: royalCobalt,
  },
  {
    id: 'magenta-shot-silk',
    titleLines: ['MAGENTA', 'SHOT SILK'],
    price: 29800,
    bgColor: '#5e00e6',
    tiltDeg: -2,
    arcY: 6,
    image: purpleBanarasi,
  },
  {
    id: 'palace-check',
    titleLines: ['PALACE', 'CHECK'],
    price: 19900,
    bgColor: '#c90d33',
    tiltDeg: 1,
    arcY: 0,
    image: redSaree,
  },
  {
    id: 'bengal-garden',
    titleLines: ['BENGAL', 'GARDEN'],
    price: 24500,
    bgColor: '#e8ad00',
    darkText: true,
    tiltDeg: 2.5,
    arcY: 8,
    image: ivoryElephant,
  },
]
