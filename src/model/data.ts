declare module bring2party.data {

  export interface Location {
    address: string;
    zip: string;
    city: string;
  }

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
    name: string;
    location: Location;
    date: Date;
    organizer: string;
    items: Item[];
    guests: string[];
  }

}

