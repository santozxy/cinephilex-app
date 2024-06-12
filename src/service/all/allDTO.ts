export interface AllDTO {
  page: number;
  results: All[];
  total_pages: number;
  total_results: number;
}

export interface All {
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

export interface Credits {
  id: number;
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
  crew: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    credit_id: string;
    department: string;
    job: string;
  }[];
}

export interface Reviews {
  id: number;
  page: number;
  results: {
    author: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string;
      rating: number;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
  total_pages: number;
  total_results: number;
}

export interface Videos {
  id: number;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
}

export interface Translations {
  id: number;
  translations: {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      homepage: string;
      overview: string;
      runtime: number;
      tagline: string;
      title: string;
    };
  }[];
}

export interface WatchProviders {
  id: number;
  results: {
    BR: {
      link: string;
      flatrate: {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[];
      rent: {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[];
      buy: {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[];
    };
  };
}

export interface Images {
  backdrops: {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  id: number;
  logos: {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  posters: {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}
