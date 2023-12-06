import { BugsTable, CategoriesTable, ReportsTable, UserTable } from "./types";
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
    throw new Error("Failed to fetch all reports");
  }
}

export default async function fetchAllBugs() {
  try {
    const data = await sql<BugsTable>`
        SELECT
        id,
        topic,
        create_date,
        text,
        user_id,
        images FROM bugs
        `;
    const bugs = data.rows;
    return bugs;
  } catch (err) {
    console.error("Database error: ", err);
    throw new Error("Failed to fetch bugs.");
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

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * from user_reports WHERE email=${email}`;
    return user.rows[0] as UserTable;
  } catch (err) {
    console.error("Database error, failed to fetch user: ", err);
    throw new Error("Failed to fetch user");
  }
}

export async function fetchClosedReports() {
  try {
    const data =
      await sql<ReportsTable>`SELECT * FROM reports WHERE status = 'unresolved'`;
    const reports = data.rows;
    return reports;
  } catch (err) {
    console.error("Database error: ", err);
    throw new Error("Failed to fetch closed reports");
  }
}
