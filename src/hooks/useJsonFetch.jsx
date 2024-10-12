import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`Ошибка! Статус: ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);

  return [ data, error, loading ];
}
