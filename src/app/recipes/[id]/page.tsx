import { notFound } from "next/navigation";
import { recipes } from "@/data/recipes";
import SEOMeta from "@/components/common/seo-meta";
import Link from "next/link";

export default async function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) return notFound();

  return (
    <>
      <SEOMeta
        title={`${recipe.title} - Hobbit Recipe`}
        description={recipe.description}
        url={`/recipes/${recipe.id}`}
      />
      <div className="container mx-auto px-4 py-8">
        <Link href="/recipes" className="text-green-600 hover:underline text-sm">
          ← Back to recipes
        </Link>

        <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
          {recipe.title}
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">{recipe.description}</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                  <span className="font-medium text-gray-800">
                    {typeof ing === "string" ? ing : ing.name}
                  </span>
                  {typeof ing === "object" && ing.quantity && (
                    <span className="text-gray-600">{ing.quantity}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {recipe.effects?.length ? (
            <section className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Effects</h2>
              <ul className="space-y-3">
                {recipe.effects.slice(0, 10).map((eff, i) => (
                  <li key={i} className="p-3 rounded-xl bg-blue-50 text-blue-800 font-medium">
                    {eff}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
} 