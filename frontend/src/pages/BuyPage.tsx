import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Sweet {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

const BuyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sweet, setSweet] = useState<Sweet | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSweet = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sweets/${id}`);
        setSweet(res.data);
      } catch (err) {
        console.error("Failed to load sweet:", err);
        alert("Failed to load sweet details.");
      } finally {
        setLoading(false);
      }
    };
    fetchSweet();
  }, [id]);

  const handleBuy = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/sweets/buy/${id}`,
        { quantity }
      );
      alert(res.data.message || "Purchase successful!");
      navigate("/");
    } catch (err) {
      console.error("Purchase failed:", err);
      alert("Purchase failed! Please try again.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!sweet) return <p className="text-center mt-10 text-red-600">Sweet not found.</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 text-center">
      <img
        src={`http://localhost:5000${sweet.imageUrl || "/images/placeholder.jpg"}`}
        alt={sweet.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{sweet.name}</h2>
      <p className="text-gray-600 mb-4">{sweet.description}</p>
      <p className="text-lg font-semibold mb-4">Price: ₹{sweet.price}</p>

      <div className="flex justify-center items-center gap-3 mb-4">
        <label className="font-medium">Quantity:</label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded px-2 py-1 w-20 text-center"
        />
      </div>

      <button
        onClick={handleBuy}
        className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600"
      >
        Confirm Purchase
      </button>

      <button
        onClick={() => navigate("/")}
        className="ml-3 bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500"
      >
        Cancel
      </button>
    </div>
  );
};

export default BuyPage;
