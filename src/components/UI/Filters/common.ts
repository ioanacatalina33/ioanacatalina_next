import { Album, Location } from "types/modelTypes";

export interface FiltersProps {
  albums: Album[];
  nrFiltered: number;
}
export interface MapFiltersProps {
  locations: Location[];
  nrFiltered: number;
}
