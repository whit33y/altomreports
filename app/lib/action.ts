"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  topic: z.string({
    invalid_type_error: "Proszę napisz temat zgłoszenia",
  }),
  hd_number: z.string(),
  create_date: z.string(),
  category: z.enum(["sprzet", "gardens", "symos", "soda"], {
    invalid_type_error: "Proszę wybierz kategorię tego zgłoszenia",
  }),
  text: z.string({
    invalid_type_error: "Proszę napisz treść zgłoszenia",
  }),
  status: z.enum(["resolved", "unresolved"], {
    invalid_type_error: "Proszę wybierz status zgłoszenia",
  }),
  // images: z.string(),
});

const CreateReport = FormSchema.omit({ id: true, create_date: true });

export type State = {
  errors?: {
    topic?: string[];
    category?: string[];
    text?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createReport(prevState: State, formData: FormData) {
  const validatedFields = CreateReport.safeParse({
    topic: formData.get("topic"),
    hd_number: formData.get("hd_number"),
    category: formData.get("category"),
    text: formData.get("text"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Report.",
    };
  }

  const { topic, category, text, status, hd_number } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];
  const user_id = "1ac6de56-355e-41df-83dd-c98015c50965";
  // const id =  !!TUTAJ DODAĆ POBIERANIE ID OBECNIE ZALOGOWANEGO USER'A
  try {
    await sql`INSERT INTO reports (topic, hd_number, create_date, category, text, user_id, status)
    VALUES(${topic}, ${hd_number}, ${date}, ${category}, ${text}, ${text}, ${user_id})`;
  } catch (err) {
    return {
      message: "Failed to create report.",
    };
  }
  // const { topic } = formData.get("topic");
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
