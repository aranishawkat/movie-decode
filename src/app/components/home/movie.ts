export interface Movie {
  id?: string;
  name?: string;
  genre?: string;
  year?: string;
  rating?: number;
  poster?: string;
  shortDescription?: string;
  longDescription?: string;
  reviews?: Array<object>;
}
