export interface AllDTO {
    page: number
    results: All[]
    total_pages: number
    total_results: number
  }
  
  export interface All {
    backdrop_path: string
    id: number
    original_title?: string
    overview: string
    poster_path: string
    media_type: string
    adult: boolean
    title?: string
    original_language: string
    genre_ids: number[]
    popularity: number
    release_date?: string
    video?: boolean
    vote_average: number
    vote_count: number
    original_name?: string
    name?: string
    first_air_date?: string
    origin_country?: string[]
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
  