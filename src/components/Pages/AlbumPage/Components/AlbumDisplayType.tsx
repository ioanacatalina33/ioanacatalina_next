import { useScreenType } from "hooks";
import React from "react";
import { PhotosDisplayType, ScreenType } from "types";

interface AlbumDisplayTypeProps {
  selected: string;
  albumDisplaySelected: (value: string) => void;
}

export const AlbumDisplayType = ({
  selected,
  albumDisplaySelected,
}: AlbumDisplayTypeProps) => {
  const { screenType } = useScreenType();

  function optionSelected(value: PhotosDisplayType) {
    albumDisplaySelected(value);
  }

  function getButtonStyle(type: PhotosDisplayType, hover: boolean) {
    const backgroundImageStyle = "url('/img/table_display_" + type + ".png')";
    //const backgroundImageStyle = type === "1" ? "url('/img/table_display_1.png')" : type === "2" ? "url('/img/table_display_2.png')" : "url('/img/table_display_3.png')"
    if (hover)
      return {
        backgroundColor: "rgb(var(--primary-color))",
        borderColor: "white",
        color: "white",
        backgroundImage: backgroundImageStyle,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
    else
      return {
        backgroundImage: backgroundImageStyle,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
  }

  return screenType !== ScreenType.Mobile ? (
    <div style={{ marginBottom: "1rem" }}>
      <button
        onClick={() => optionSelected(PhotosDisplayType.FOUR)}
        style={getButtonStyle(
          PhotosDisplayType.FOUR,
          selected === PhotosDisplayType.FOUR,
        )}
        className="filter-element filter-element-album-display radius-edge-left"
      >
        <span
          onClick={() => optionSelected(PhotosDisplayType.FOUR)}
          style={{ opacity: "0" }}
        >
          BBB
        </span>
      </button>

      <button
        onClick={() => optionSelected(PhotosDisplayType.THREE)}
        style={getButtonStyle(
          PhotosDisplayType.THREE,
          selected === PhotosDisplayType.THREE,
        )}
        className="filter-element filter-element-album-display"
      >
        <span
          onClick={() => optionSelected(PhotosDisplayType.THREE)}
          style={{ opacity: "0" }}
        >
          BBB
        </span>
      </button>

      <button
        onClick={() => optionSelected(PhotosDisplayType.TWO)}
        style={getButtonStyle(
          PhotosDisplayType.TWO,
          selected === PhotosDisplayType.TWO,
        )}
        className="filter-element filter-element-album-display"
      >
        <span
          onClick={() => optionSelected(PhotosDisplayType.TWO)}
          style={{ opacity: "0" }}
        >
          BBB
        </span>
      </button>

      <button
        onClick={() => optionSelected(PhotosDisplayType.ONE)}
        style={getButtonStyle(
          PhotosDisplayType.ONE,
          selected === PhotosDisplayType.ONE,
        )}
        className="filter-element filter-element-album-display radius-edge-right"
      >
        <span
          onClick={() => optionSelected(PhotosDisplayType.ONE)}
          style={{ opacity: "0" }}
        >
          BBB
        </span>
      </button>
    </div>
  ) : (
    <></>
  );
};
