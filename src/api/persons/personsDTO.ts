export interface PersonsDTO {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}

export interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnownFor[];
}

export interface KnownFor {
  backdrop_path: string;
  id: number;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  title?: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  original_name?: string;
  name?: string;
  first_air_date?: string;
  origin_country?: string[];
}

export interface PersonDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: any;
  gender: number;
  homepage: any;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  tv_credits: {
    cast: {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      origin_country: string[];
      original_language: string;
      original_name: string;
      overview: string;
      popularity: number;
      poster_path: string;
      first_air_date: string;
      name: string;
      vote_average: number;
      vote_count: number;
      character: string;
      credit_id: string;
      episode_count: number;
    }[];
    crew: any[];
  };
  images: {
    profiles: {
      aspect_ratio: number;
      height: number;
      iso_639_1: any;
      file_path: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }[];
  };
  movie_credits: {
    cast: {
      adult: boolean;
      backdrop_path?: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path?: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
      character: string;
      credit_id: string;
      order: number;
    }[];
    crew: {
      adult: boolean;
      backdrop_path?: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
      credit_id: string;
      department: string;
      job: string;
    }[];
  };
}

export interface PersonExternalIdIMDB {
  person_results: {
    id: number;
    name: string;
    original_name: string;
    media_type: string;
    adult: boolean;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path: string;
    known_for: {
      backdrop_path: string;
      id: number;
      title: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      adult: boolean;
      original_language: string;
      genre_ids: number[];
      popularity: number;
      release_date: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }[];
  }[];
}
