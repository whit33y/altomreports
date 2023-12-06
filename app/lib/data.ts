import { CategoriesTable, ReportsTable } from "./types";
import { sql } from "@vercel/postgres";

export async function fetchAllReports() {
  try {
    const data = await sql<ReportsTable>`
        SELECT
        id,
        topic,
        hd_number,
        create_date,
        category,
        text,
        user_id,
        status,
        images FROM reports
        `;
    const reports = data.rows;
    return reports;
  } catch (err) {
    console.error("Database error: ", err);
  }
}

export async function fetchCategories() {
  try {
    const data = await sql<CategoriesTable>`
        SELECT
        name
        FROM categories
        `;
    const categories = data.rows;
    return categories;
  } catch (err) {
    console.error("Database error: ", err);
    throw new Error("Failed to fetch categories");
  }
}
