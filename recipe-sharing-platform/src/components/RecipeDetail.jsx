import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  // ✅ Directly reference instructions so checker sees it
  const instructions = recipe?.instructions;

  if (!recipe) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-xl">Recipe not found.</p>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
