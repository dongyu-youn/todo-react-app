import React from "react";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi";

export default function Navigation() {
  return (
    <>
      <header className="flex">
        <Link to="/">
          <h1 className="text-3xl">1jowon</h1>
        </Link>
        <ul className="flex items-center">
          <li>Contests</li>
          <li>Likes</li>
          <li>Team Matching</li>
          <li>My Page</li>
        </ul>
      </header>
    </>
  );
}
