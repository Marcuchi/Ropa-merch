
import { Event, MerchItem, BlogPost } from './types';
import React from 'react';
import { Instagram } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Academia', href: '#academia' },
  { name: 'Merch', href: '#merch' },
  { name: 'Blog', href: '#blog' },
];

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Jornada de Puertas Abiertas",
    date: "15 Octubre, 2023",
    location: "Kartódromo Colonia Caroya",
    description: "Vení a probar tu primer karting de competición. Instructores profesionales y charla técnica incluida. ¡Cupos limitados!",
    highlight: false
  },
  {
    id: 2,
    title: "Copa Speed Queens: Edición Primavera",
    date: "04 Noviembre, 2023",
    location: "Circuito Internacional",
    description: "Competencia interna para alumnas nivel intermedio y avanzado. Premios de patrocinadores locales.",
    highlight: false
  },
  {
    id: 3,
    title: "Carrera de Promoción: Destino F1 Academy",
    date: "10 Diciembre, 2023",
    location: "Gran Final - Córdoba",
    description: "La ganadora del campeonato anual viajará a ver la F1 Academy en vivo. Una oportunidad única para inspirarse.",
    highlight: true
  }
];

export const MERCH_ITEMS: MerchItem[] = [
  {
    id: 1,
    name: "Stickers",
    price: 18500,
    imageAlt: "Hoodie negro clásico con logo Speed Queens central",
    category: "Indumentaria",
    // Usamos el formato thumbnail que es más robusto para visualización web directa
    image: "https://drive.google.com/thumbnail?id=10Bp7vcBlTJJn9YJFV_sEbZv_kJRCXA-_&sz=w1000"
  },
  {
    id: 2,
    name: "Remera Hoodie Logo",
    price: 8500,
    imageAlt: "Remera blanca con diseño box logo negro Speed Queens",
    category: "Indumentaria",
    image: "https://drive.google.com/thumbnail?id=13We0eOtAvPUIxWYJe5wKPmZ85x60xaSC&sz=w1000"
  },
  {
    id: 3,
    name: "Llavero Metálico",
    price: 2500,
    imageAlt: "Llavero rectangular plateado grabado",
    category: "Accesorios",
    image: "https://drive.google.com/thumbnail?id=1snGbPaMzfEm_Fh9__qpYNTKfL5XI8JFj&sz=w1000"
  },
  {
    id: 4,
    name: "Gorra Oficial",
    price: 1200,
    imageAlt: "Sticker cuadrado negro con logo degradado",
    category: "Accesorios",
    image: "https://drive.google.com/thumbnail?id=1Gv66_1Lh01bxeTOievYJKm9uGkFmS35l&sz=w1000"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "La importancia de la preparación física en el karting",
    date: "28 Sep 2023",
    excerpt: "No solo es manejar, es resistir. Te contamos cómo entrenan nuestras pilotos para soportar las fuerzas G.",
    author: "Coach Sofia"
  },
  {
    id: 2,
    title: "Resultados de la fecha #4 del Provincial",
    date: "15 Sep 2023",
    excerpt: "Nuestras alumnas subieron al podio en dos categorías. Repasamos los mejores momentos del fin de semana.",
    author: "Prensa SQ"
  },
  {
    id: 3,
    title: "Entrevista a nuestras egresadas",
    date: "01 Sep 2023",
    excerpt: "Conocé la historia de Laura, quien pasó de la academia Speed Queens a competir en Fórmula Renault.",
    author: "Admin"
  }
];

export const SOCIALS = [
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
  { name: 'TikTok', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>, href: 'https://tiktok.com' },
];
