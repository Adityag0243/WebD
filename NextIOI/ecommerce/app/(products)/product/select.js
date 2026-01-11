'use client'
import SearchBar from "@/components/searchBar";

export default function Select({ rating, val }) {
  return (
    <form
      className = 'flex gap-20'  //  can make grid lekin phir gap control krna padega..
    >
      <div className="flex ">
        <select 
          name="rating"
          defaultValue={rating}
          className="w-64 m-2 px-4 py-2 border rounded-xl shadow-gray-300 shadow-md">
          <option value='0'>Filter By Rating</option>
          <option value="1">Above 1 ⭐</option>
          <option value="2">Above 2 ⭐⭐</option>
          <option value="3">Above 3 ⭐⭐⭐</option>
          <option value="4">Above 4 ⭐⭐⭐⭐</option>
        </select>

        <button
          type="submit"
          className = 'm-2 p-2 border rounded-xl shadow-gray-300 shadow-md'
        >
          Apply
        </button>
      </div>
      <SearchBar/>
    </form>
  );
}
