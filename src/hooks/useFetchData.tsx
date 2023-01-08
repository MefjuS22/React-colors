import { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

export interface Products {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [
    {
      id: number;
      name: string;
      year: number;
      color: string;
      pantone_value: string;
    }
  ];
}

export const useFetchData = (url: string) => {
  const [data, setData] = useState<null | Products>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchData(url)
      .then((response) => {
        if (typeof response === "string") {
          setError(response);
          setData(null);
          setLoading(false);
        } else if (Array.isArray(response.data)) {
          setData(response);
          setLoading(false);
        } else if (!Array.isArray(response.data)) {
          setData({ data: [response.data] } as Products);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
};
