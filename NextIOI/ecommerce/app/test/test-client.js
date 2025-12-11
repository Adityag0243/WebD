"use client";

export default function TestClient({ action }) {
  return (
    <form action={action}>
      <select name="rating">
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>

      <button type="submit">Send</button>
    </form>
  );
}
