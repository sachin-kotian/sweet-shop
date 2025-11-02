import React from "react";
import { useNavigate } from "react-router-dom";

interface Sweet {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

interface SweetCardProps {
  sweet: Sweet;
}

const SweetCard: React.FC<SweetCardProps> = ({ sweet }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/sweet/${sweet.id}`);
  };

  const handleBuy = () => {
    navigate(`/buy/${sweet.id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105">
      <img
        src={`http://localhost:5000${sweet.imageUrl || "/images/placeholder.jpg"}`}
        alt={sweet.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{sweet.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{sweet.description}</p>
        <p className="text-lg font-bold mb-3 text-green-700">₹{sweet.price}</p>

        <div className="flex justify-between">
          <button
            onClick={handleViewDetails}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            View Details
          </button>
          <button
            onClick={handleBuy}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SweetCard;
