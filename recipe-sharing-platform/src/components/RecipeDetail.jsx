{recipe.instructions && (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
    <ol className="list-decimal pl-5 text-gray-700">
      {recipe.instructions.map((step, i) => (
        <li key={i} className="mb-1">
          {step}
        </li>
      ))}
    </ol>
  </section>
)}
