interface Props {
  onSelectRelevance: (sortSelector: string | null) => void;
}
function SortSelector({ onSelectRelevance }: Props) {
  const sortSelector = [
    { value: "popularity.asc", label: "Popularity" },
    { value: "revenue.asc", label: "Revenue" },
    { value: "vote_average.asc", label: "Vote" },
    { value: "original_title.asc", label: "Name" },
    { value: "primary_release_date.asc", label: "Release date" },
  ];
  return (
    <div className="mt-4 text-white  px-3 md:ml-10">
      <h1 className="text-3xl font-medium">Order by: relevance</h1>
      <select
        className="bg-[#151515]"
        onChange={(e) => onSelectRelevance(e.target.value)}
      >
        <option value="">Select Order</option>
        {sortSelector.map((sort) => (
          <option
            value={sort.value}
            className="text-white"
            onClick={() => onSelectRelevance(sort.value)}
          >
            {sort.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortSelector;
