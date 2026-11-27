import weddingEditImg from '../assets/images/moods/wedding-edit.jpg'
import kanchipuramIconsImg from '../assets/images/moods/kanchipuram-icons.jpg'
import banarasiHeirloomsImg from '../assets/images/moods/banarasi-heirlooms.jpg'
import festiveRadianceImg from '../assets/images/moods/festive-radiance.jpg'
import zariSignaturesImg from '../assets/images/moods/zari-signatures.jpg'
import bridalClanImg from '../assets/images/moods/bridal-clan.jpg'

export interface MoodCard {
  id: string
  title: string
  image: string
  alt: string
}

export const MOOD_CARDS: MoodCard[] = [
  {
    id: 'wedding-edit',
    title: 'Wedding Edit',
    image: weddingEditImg,
    alt: 'Model draped in crimson and silver Kanjivaram wedding silk saree',
  },
  {
    id: 'kanchipuram-icons',
    title: 'Kanchipuram Icons',
    image: kanchipuramIconsImg,
    alt: 'Model wearing vibrant magenta and emerald Kanchipuram silk saree',
  },
  {
    id: 'banarasi-heirlooms',
    title: 'Banarasi Heirlooms',
    image: banarasiHeirloomsImg,
    alt: 'Models in royal purple and yellow Banarasi brocade silk sarees',
  },
  {
    id: 'festive-radiance',
    title: 'Festive Radiance',
    image: festiveRadianceImg,
    alt: 'Model in radiant marigold orange Kanjivaram silk saree',
  },
  {
    id: 'zari-signatures',
    title: 'Zari Signatures',
    image: zariSignaturesImg,
    alt: 'Portrait in deep emerald and rose-gold zari Kanjivaram silk saree',
  },
  {
    id: 'bridal-clan',
    title: 'Bridal Clan',
    image: bridalClanImg,
    alt: 'Bridal group draped in coordinated emerald and crimson Kanjivaram silks',
  },
]
