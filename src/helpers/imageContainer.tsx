export type ImageContainerProps = {
  src: string;
  alt: string;
  maxWidth?: string;
  funnyBorderRadius?: boolean;
};
export function imageContainer({
  src,
  alt,
  maxWidth,
  funnyBorderRadius,
}: ImageContainerProps) {
  return (
    <div style={{ flex: 1, padding: "1rem" }}>
      <img
        style={{
          height: "auto",
          width: "100%",
          maxWidth: maxWidth ? maxWidth : "100%",
          borderRadius: funnyBorderRadius
            ? "0.1rem 2rem 0.1rem 2rem"
            : "0.1rem",
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
}
