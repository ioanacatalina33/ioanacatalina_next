import { ApplicationState } from "store";
import { useSelector as useReduxSelector } from "react-redux";

export function useSelector<T>(selector: (state: ApplicationState) => T) {
  return useReduxSelector((state: ApplicationState) => selector(state));
}

export const useScreenSize = () => {
  const screenHeight = useSelector((state) => state.app.screenHeight);
  const screenWidth = useSelector((state) => state.app.screenWidth);

  return { screenWidth, screenHeight };
};

export const useScreenType = () => {
  return { screenType: useSelector((state) => state.app.screenType) };
};
