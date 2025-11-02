import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-pink-600 text-white p-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">🍬 Sweet Shop</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        {token ? (
          <>
            <Link to="/admin" className="hover:underline">Admin</Link>
            <button onClick={handleLogout} className="ml-3 underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
