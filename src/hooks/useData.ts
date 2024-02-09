import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface FetchResponse<T> {
  results: T[];
  genres: T[];

}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [genres, setGenre] = useState<T[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results)
        setGenre(res.data.genres)})
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  });
  return { data, error, genres };
};
export default useData;
