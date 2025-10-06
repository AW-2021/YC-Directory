import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";

// Robust server-side rendered form
const SearchForm = ({ query }: { query?: string }) => {
  return (
    // <Form></Form> from Next.js is a new server-side component with React 19
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      {/* button HTML element with onClick event handler is still a client-side 
          component, that is why it must be extracted to its own individual
          client component: <SearchFormReset /> to work with SearchForm.tsx 
          server-side rendered component */}

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white font-medium">
          <Search className="size-5 hover:text-primary" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
