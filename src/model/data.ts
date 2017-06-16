export interface Claim {
  user: string;
  count: number;
}

export interface Item {
  name: string;
  count: number;
  claims: Claim[];
}

export interface Party {
  id: string;
  title: string;
  location: string;
  date: Date;
  organizer: string;
  description: string;
  items: Item[];
  guests: string[];
}

