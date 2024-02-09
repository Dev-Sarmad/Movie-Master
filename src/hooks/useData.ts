import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
interface FetchResponse<T> {
  results: T[];
  genres: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [genres, setGenre] = useState<T[]>([]);
  const [error, setError] = useState("");
  useEffect(
    () => {
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig  })
        .then((res) => {
          setData(res.data.results);
          setGenre(res.data.genres);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, genres };
};
export default useData;
