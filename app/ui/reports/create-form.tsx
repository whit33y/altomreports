"use client";
import { createReport } from "@/app/lib/action";
import { CategoriesTable } from "@/app/lib/types";
import { useFormState } from "react-dom";

export default function Form({
  categories,
}: {
  categories: CategoriesTable[];
}) {
  const initialState = {};
  const [state, dispatch] = useFormState(createReport, initialState);
  return (
    <form action={dispatch}>
      <label htmlFor="topic">Temat</label>
      <input
        type="text"
        id="topic"
        name="topic"
        placeholder="Podaj temat"
      ></input>

      <label htmlFor="hd_number">HD Number</label>
      <input
        type="text"
        id="hd_number"
        name="hd_number"
        placeholder="Podacz oczko (jezeli masz)"
      ></input>
      <label htmlFor="text">Opis</label>
      <textarea
        id="text"
        name="text"
        placeholder="Opisz dokładnie Twój problem"
      ></textarea>
      <label htmlFor="category">Kategoria</label>
      <select id="category" name="category">
        <option value="" disabled>
          Wybierz kategorie
        </option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <fieldset>
        <legend>Zmień status</legend>
        <label htmlFor="opened">Otwarty</label>
        <input type="radio" id="opened" name="opened"></input>
        <label htmlFor="closed">Zamknięty</label>
        <input type="radio" id="closed" name="closed"></input>
      </fieldset>
      <button type="submit">Wyślij</button>
    </form>
  );
}
