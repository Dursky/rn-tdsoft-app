export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export interface CharacterFilters {
  name?: string;
  status?: 'alive' | 'dead' | 'unknown';
  species?: string;
  type?: string;
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
}
