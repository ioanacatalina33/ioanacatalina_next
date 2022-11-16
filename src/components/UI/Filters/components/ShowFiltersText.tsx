interface Props {
  showFilters: boolean;
  toggleFilters: () => void;
}

export function ShowFiltersText({ showFilters, toggleFilters }: Props) {
  return (
    <span onClick={toggleFilters} className="hide-filters">
      {showFilters ? (
        <i className="fa fa-angle-up" />
      ) : (
        <i className="fa fa-angle-down" />
      )}{" "}
      {showFilters ? "Hide filters" : "Show filters"}
    </span>
  );
}
