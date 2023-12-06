import { CategoriesTable } from "./types";
import { sql } from "@vercel/postgres";
export async function fetchCategories() {
  try {
    const data = await sql<CategoriesTable>`
        SELECT
        name
        FROM categories
        ORDER BY name
        `;
    const categories = data.rows;
    return categories;
  } catch (err) {
    console.error("Database error: ", err);
    throw new Error("Failed to fetch categories");
  }
}
