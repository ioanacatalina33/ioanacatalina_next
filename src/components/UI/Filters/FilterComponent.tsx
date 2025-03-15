import { AlbumType } from "types/enums";
import { ButtonToolbar, Button } from "react-bootstrap";
import CSSTransition from "react-transition-group/CSSTransition";
import { getDanceEvent } from "staticModel";
import { FilterName } from "store";
import { ButtonGroup } from "react-bootstrap";
import { useFilterSelected } from "hooks/useFilterSelected";

interface FilterComponentProps {
  filterName: FilterName;
  albumType?: AlbumType;
  allowMultipleSelect?: boolean;
  values: string[];
  selected: string[];
  unselectOnEsc?: boolean;
  mapFilters?: boolean;
  onFiltersChanged: (filterName: FilterName, filterNewValues: string[]) => void;
}

export const FilterComponent = ({
  filterName,
  albumType,
  allowMultipleSelect = true,
  values,
  selected,
  mapFilters,
  unselectOnEsc = true,
  onFiltersChanged,
}: FilterComponentProps) => {
  const { handleValueClicked } = useFilterSelected({
    selected,
    unselectOnEsc,
    allowMultipleSelect,
    onFilterChanged(filterNewValues) {
      onFiltersChanged(filterName, filterNewValues);
    },
  });

  function handleClick(
    evt: React.MouseEvent<HTMLButtonElement | HTMLInputElement>,
  ) {
    const selectedValue = (evt.target as HTMLButtonElement | HTMLInputElement)
      .name;
    handleValueClicked(selectedValue);
  }

  const buttonStyle = {
    width: "content-fit",
    maxWidth: "content-fit",
    padding: mapFilters
      ? "0.3rem 0.8rem 0.3rem 0.8rem"
      : "0.5rem 0.8rem 0.5rem 0.8rem",
    margin: mapFilters ? "0.05rem" : "0.08rem",
  };

  const styleButtonClicked = {
    backgroundColor: "rgb(var(--primary-color))",
    borderColor: "white",
    color: "#ffffff",
    ...buttonStyle,
  };

  if (filterName === FilterName.countries)
    return (
      <CSSTransition
        timeout={5000}
        in={values.length !== 0}
        classNames="my-node"
      >
        <div className="filters-same-line">
          {values.map((value, index) => {
            return (
              <button
                className="filters-same-line-element countries-element"
                key={index}
                style={
                  selected.includes(value)
                    ? {
                        boxShadow: "0 4px 1px -2px rgb(var(--primary-color))",
                        color: "#1b1b1b",
                      }
                    : {}
                }
                onClick={handleClick}
                name={value}
              >
                {value}
              </button>
            );
          })}
        </div>
      </CSSTransition>
    );
  else if (filterName === FilterName.subtypes && albumType === AlbumType.Dance)
    return (
      <ButtonToolbar className="filter-toolbar-width filter-toolbar-padding justify-content-center">
        {values.map((value, index) => {
          const organizer = getDanceEvent(value);
          return organizer !== undefined && organizer.logo !== "" ? (
            <input
              type="image"
              className="logos-element" //col-4 col-md-3 col-lg-2 col-xxl-1 justify-content-around
              key={index}
              style={selected.includes(value) ? { background: "#666666" } : {}}
              onClick={handleClick}
              name={value}
              src={organizer.logo}
              alt={value}
            ></input>
          ) : (
            ""
          );
        })}
      </ButtonToolbar>
    );
  else
    return (
      <ButtonGroup
        style={{ flexWrap: "wrap", justifyContent: "center" }}
        vertical={mapFilters}
      >
        {values.map((value, index) => {
          const filterClassName =
            filterName === FilterName.months
              ? "filter-element-outline"
              : "filter-element";
          const className =
            index === 0
              ? filterClassName +
                (mapFilters || albumType === AlbumType.Dance
                  ? " radius-edge-top"
                  : " radius-edge-left")
              : index === values.length - 1
                ? filterClassName +
                  (mapFilters || albumType === AlbumType.Dance
                    ? " radius-edge-bottom"
                    : " radius-edge-right")
                : filterClassName;
          return (
            <Button
              className={className}
              key={index}
              onClick={handleClick}
              name={value}
              style={
                selected.indexOf(value) > -1 ? styleButtonClicked : buttonStyle
              }
              size={filterName === FilterName.months ? "sm" : undefined}
            >
              {value === "City" ? "Urban" : value}
            </Button>
          );
        })}
      </ButtonGroup>
    );
};
