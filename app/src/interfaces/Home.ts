export interface Home {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  origin_country: string[];
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
}

export interface Movie {
  image_primary: ImageAry;
  image_secondary: ImageAry;
  _id: string;
  title: string;
  description: string;
  comments: Comment[];
}
export interface Comment {
  content: string;
  date: Date;
  qualification: number;
  _id: string;
}

export interface ImageAry {
  public_id: string;
  secure_url: string;
}
