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
  