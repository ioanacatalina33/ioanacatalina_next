import { useEffect, useState } from "react";

interface FilterSelectedProps {
  selected: string[];
  unselectOnEsc?: boolean;
  allowMultipleSelect?: boolean;
  onFilterChanged: (filterNewValues: string[]) => void;
}

export function useFilterSelected({
  selected,
  unselectOnEsc = true,
  allowMultipleSelect = true,
  onFilterChanged,
}: FilterSelectedProps) {
  const [ctrlPressed, setCtrlPressed] = useState(false);

  useEffect(() => {
    if (unselectOnEsc) document.addEventListener("keydown", escFunction, false);
    document.addEventListener("keydown", ctrlDown, false);
    document.addEventListener("keyup", ctrlUp, false);
    return () => {
      document.addEventListener("keydown", ctrlDown, false);
      document.addEventListener("keydown", ctrlUp, false);
      if (unselectOnEsc)
        document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  function escFunction(event) {
    if (event.keyCode === 27) {
      onFilterChanged([]);
    }
  }

  function ctrlDown(event) {
    if (event.keyCode === 91 || event.keyCode === 17) {
      setCtrlPressed(true);
    }
  }

  function ctrlUp(event) {
    if (event.keyCode === 91 || event.keyCode === 17) {
      setCtrlPressed(false);
    }
  }

  function handleValueClicked(selectedValue: string) {
    let selectedValues = [...selected];

    if (ctrlPressed && allowMultipleSelect) {
      if (selected.indexOf(selectedValue) > -1) {
        //exists - take it out
        selectedValues = selectedValues.filter(
          (value) => selectedValue !== value,
        );
      } else {
        //doesn't exist - add it
        selectedValues.push(selectedValue);
      }
    } else {
      if (selected.indexOf(selectedValue) > -1) {
        if (selected.length === 1) {
          selectedValues = selectedValues.filter(
            (value) => selectedValue !== value,
          );
        } else {
          selectedValues = [];
          selectedValues.push(selectedValue);
        }
      } else {
        selectedValues = [];
        selectedValues.push(selectedValue);
      }
    }

    onFilterChanged(selectedValues);
  }

  return { handleValueClicked };
}
