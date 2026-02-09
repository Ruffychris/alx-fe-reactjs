import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    const ingredientsArray = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const instructionsArray = instructions
      .split("\n")
      .map((step) => step.trim())
      .filter((step) => step.length > 0);

    if (ingredientsArray.length < 2) {
      setError("Please provide at least 2 ingredients.");
      return;
    }

    if (instructionsArray.length < 1) {
      setError("Please provide at least 1 instruction.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: `${instructionsArray[0].slice(0, 50)}...`,
      image: "https://via.placeholder.com/300x200", // Placeholder image
      ingredients: ingredientsArray,
      instructions: instructionsArray,
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");

    // Redirect to Home Page (optional)
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Recipe</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="e.g., 2 eggs, 200g flour, 100g sugar"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
            placeholder="Step 1: ..., Step 2: ..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
