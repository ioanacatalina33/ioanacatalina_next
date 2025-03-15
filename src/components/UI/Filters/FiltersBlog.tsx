import { useFilters } from "hooks";
import { FilterName, FiltersType, updateFilter } from "store";
import { useDispatch } from "react-redux";
import { useFiltersQuery } from "hooks/useFiltersQuery";

import { useFilterSelected } from "hooks/useFilterSelected";
import { BlogTopicButton } from "components/BlogTopicButton/BlogTopicButton";

export function FiltersBlog() {
  const { filters } = useFilters(FiltersType.Blog);

  const selectedTopics = filters.topics;

  const { addFiltersToURL } = useFiltersQuery(FiltersType.Blog);
  const dispatch = useDispatch();

  function onFiltersChanged(filterName: FilterName, filterNewValues: string[]) {
    dispatch(
      updateFilter({
        name: filterName,
        values: filterNewValues,
        filterType: FiltersType.Blog,
      }),
    );

    addFiltersToURL({ [filterName]: filterNewValues });
  }

  const { handleValueClicked } = useFilterSelected({
    selected: selectedTopics,
    unselectOnEsc: true,
    allowMultipleSelect: true,
    onFilterChanged(filterNewValues) {
      onFiltersChanged(FilterName.topics, filterNewValues);
    },
  });

  const filterValues = [
    "Photography",
    "Conservation",
    "Wildlife",
    "South America",
  ];

  return (
    <div style={{ width: "100%" }}>
      {filterValues.map((value, index) => (
        <BlogTopicButton
          value={value}
          key={index}
          selected={selectedTopics.indexOf(value) > -1}
          onClick={(value) => handleValueClicked(value)}
        />
      ))}
    </div>
  );
}
