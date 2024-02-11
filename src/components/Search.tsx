import { useRef } from "react";
interface Props {
  onSearch : (search: string) => void;
}
function Search({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) return onSearch(ref.current.value);
      }}
    >
      <input
        type="text"
        placeholder="search movie ...."
        color="black"
        ref={ref}
      />
    </form>
  );
}

export default Search;
