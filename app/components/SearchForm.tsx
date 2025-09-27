import Form from "next/form";
import SearchFormReset from "@/app/components/SearchFormReset";

const SearchForm = () => {
  const query = "test";

  return (
    // <Form></Form> from Next.js is a new server-side component with React 19
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      {/* Button html element with onClick event handler is still a client-side component,
            that is why it must be extracted to its own individual client component 
            to work with the SearchForm.tsx server-side rendered component */}

      <div className="flex gap-2">{query && <SearchFormReset />}</div>

      <button type="submit" className="search-btn text-white font-medium">S</button>
    </Form>
  );
};

export default SearchForm;
