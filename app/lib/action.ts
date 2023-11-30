"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  topic: z.string({
    invalid_type_error: "Proszę napisz temat zgłoszenai",
  }),
  hd_number: z.string(),
  create_date: z.string(),
  category: z.enum(["!!do wypełnienia!!", ""], {
    invalid_type_error: "Proszę wybierz kategorię tego zgłoszenia",
  }),
  text: z.string(),
  user_id: z.string(),
  status: z.enum(["solved", "unsolved"], {
    invalid_type_error: "Proszę wybierz status zgłoszenia",
  }),
  images: z.string(),
});

export async function createReport(formData: FormData) {
  //   const { topic } = formData.get("topic");
  //   try {
  //     await sql`
  //         INSERT INTO reports (topic)
  //         VALUES (${topic})
  //         `;
  //   } catch (error) {
  //     return {
  //       message: "Database error: failed to create Report",
  //     };
  //   }
}
export async function updateReport() {}
export async function deleteReport() {}
export async function createBug() {}
export async function updateBug() {}
export async function deleteBug() {}
