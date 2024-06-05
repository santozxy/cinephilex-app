
export interface SearchDTO {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
  
  export interface Result {
    backdrop_path?: string
    id: number
    original_name?: string
    overview?: string
    poster_path?: string
    media_type: string
    adult: boolean
    name?: string
    original_language?: string
    genre_ids?: number[]
    popularity: number
    first_air_date?: string
    vote_average?: number
    vote_count?: number
    origin_country?: string[]
    gender?: number
    known_for_department?: string
    profile_path?: string
    known_for?: KnownFor[]
    original_title?: string
    title?: string
    release_date?: string
    video?: boolean
  }
  
  export interface KnownFor {
    backdrop_path: string
    id: number
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    adult: boolean
    title: string
    original_language: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
  }