import useJsonFetch from "../../hooks/useJsonFetch";
import { API_URLS } from "../../api";

export default function Loading() {
  const [data, error, loading] = useJsonFetch(API_URLS.loading);

  return (
    <div>
      {loading && <div>Загрузка...</div>}
      {!loading && error && <div>{error.message}</div>}
      {!loading && !error && data && <div>Data: {JSON.stringify(data)}</div>}
    </div>
  );
}