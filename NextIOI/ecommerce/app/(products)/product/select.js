'use client'
import SearchBar from "@/components/searchBar";

export default function Select({ rating, val, category }) {
  return (
    <form
      className='mx-2 '
    >
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
        <SearchBar />
        <select
          name="rating"
          defaultValue={rating}
          className="w-48 m-2 px-4 py-2 rounded-xl shadow-gray-300 shadow-md">
          <option value='0'>Filter By Rating</option>
          <option value="1">Above 1 ⭐</option>
          <option value="2">Above 2 ⭐⭐</option>
          <option value="3">Above 3 ⭐⭐⭐</option>
          <option value="4">Above 4 ⭐⭐⭐⭐</option>
        </select>

        <select
          name="category"
          defaultValue={category}
          className="w-48 m-2 px-4 py-2 border rounded-xl shadow-gray-300 shadow-md">
          <option value='0'>Filter By Category</option>
          <option value="Home">Home</option>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
          <option value="Beauty">Beauty</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Beauty">Beauty</option>
        </select>

        <button
          type="submit"
          className='w-20 justify-self-start m-2 p-2 border rounded-xl shadow-gray-300 shadow-md'
        >
          Apply
        </button>
      </div>

    </form>
  );
}
