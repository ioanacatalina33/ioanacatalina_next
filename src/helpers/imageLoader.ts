export const imageLoader = ({ src, width, quality }) => {
  return `https://ioanacatalina.com${src}?w=${width}&q=${quality || 75}`;
};
