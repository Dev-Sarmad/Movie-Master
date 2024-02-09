import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
}
const useGenres = () => useData<Genres>("/genre/movie/list");
export default useGenres;
