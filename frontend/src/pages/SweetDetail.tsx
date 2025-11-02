import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Sweet {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  imageUrl: string;
}

export default function SweetDetail() {
  const { id } = useParams();
  const [sweet, setSweet] = useState<Sweet | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/sweets/${id}`)
      .then((res) => setSweet(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load sweet details");
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!sweet) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{sweet.name}</h1>
      <img
        src={`http://localhost:5000${sweet.imageUrl}`}
        alt={sweet.name}
        style={{ width: "400px", borderRadius: "10px", marginBottom: "10px" }}
      />
      <p>{sweet.description}</p>
      <p><strong>Category:</strong> {sweet.category}</p>
      <p><strong>Price:</strong> ₹{sweet.price}</p>
      <p><strong>Available Quantity:</strong> {sweet.quantity}</p>
    </div>
  );
}
