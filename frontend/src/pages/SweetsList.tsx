import SweetCard from "../components/SweetCard";
import api from "../api/api";
import { useEffect, useState } from "react";

interface Sweet {
  id: number;
  name: string;
  category?: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export default function SweetsList() {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/sweets")
      .then(res => setSweets(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Loading sweets...</p>;

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sweets.map((sweet) => (
        <SweetCard key={sweet.id} sweet={sweet} />
      ))}
    </div>
  );
}
