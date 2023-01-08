import { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

export const useFetchData = (url: string) => {
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchData(url)
      .then((data) => {
        setData(data);
        setLoading(false);
        if (typeof data === "string") {
          setError(data);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
};
