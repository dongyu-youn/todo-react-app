import React, { useEffect, useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Searchbar() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pictures/${input}`);
  };

  useEffect(() => setInput(keyword || ""), [keyword]);

  return (
    <header className="w-full p-4 flex items-center text-2xl border-b border-zinc-500 mb-4">
      <Link to="/" className="flex items-center">
        <FaPaintBrush className="text-4xl text-brand mr-2" />
        <h1 className="text-white font-bold">Youngche Art</h1>
      </Link>

      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 w-96 mt-2 mr-2 text-black "
        />
        <button className=" absolute mt-6 mr-20 bg-blue-40 text-white">
          <CiSearch className="text-white" />
        </button>
      </form>

      <div></div>
    </header>
  );
}
