export default function Form() {
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
        <option></option>
        <option></option>
        <option></option>
        <option></option>
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
