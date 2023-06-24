import { FC, useState } from "react";
import { persistLocation } from "../utils/weather";

interface Props {
  fetchForecasts: (query: string) => Promise<void>;
}

const Search: FC<Props> = ({ fetchForecasts }) => {
  const [query, setQuery] = useState("");

  return (
    <form
      className="w-full max-w-xs"
      onSubmit={(e) => {
        e.preventDefault();
        // Comment 1
        fetchForecasts(query);
        persistLocation(query);
      }}
    >
      <input
        type="search"
        name="search"
        id="search"
        aria-label="Search for city/country forecast"
        placeholder="Search for city/country forecast"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
