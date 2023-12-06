import { CategoriesTable } from "@/app/lib/types";

export default function Form({
  categories,
}: {
  categories: CategoriesTable[];
}) {
  return (
    <form>
      <label>Temat</label>
      <input type="text"></input>
      <label>HD Number</label>
      <input></input>
      <label>Opis</label>
      <input></input>
      <label>Category</label>
      <select>
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
        <label>Otwarty</label>
        <input></input>
        <label>Zamknięty</label>
        <input></input>
      </fieldset>
      <button>Wyślij</button>
    </form>
  );
}
