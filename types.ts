export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  highlight?: boolean;
}

export interface MerchItem {
  id: number;
  name: string;
  price: number;
  imageAlt: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}