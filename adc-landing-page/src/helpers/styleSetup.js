const colors = {
  bg: "#ffffff",
  tile: "#EBECE7",
  main: "#000000",
  primary: "#10322C",
};

function hexa(hexColor, alphaPercents) {
  let alpha = Math.round((alphaPercents / 100) * 255).toString(16);
  if (alpha.length === 1) alpha = "0" + alpha;
  return hexColor + alpha;
}

const breakpoints = {
  ultrawide: 1920,
  desktop: 1200,
  tablet: 720,
};

const sizes = {
  paddingL: "50px",
  gapM: "20px",
};

export { colors, hexa, breakpoints, sizes };
