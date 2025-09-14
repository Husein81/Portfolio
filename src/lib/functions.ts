// Convert size classes to responsive versions
const getResponsiveSize = (sizeClass: string) => {
  // Convert static sizes to responsive ones
  const sizeMap: { [key: string]: string } = {
    "w-16 h-16": "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
    "w-20 h-20": "w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24",
    "w-14 h-14": "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
    "w-18 h-18": "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18",
    "w-10 h-10": "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10",
    "w-12 h-12": "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12",
    "w-8 h-8": "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
  };
  return sizeMap[sizeClass] || sizeClass;
};

// Convert position values to proper CSS values for inline styles
const getPositionValue = (value: string) => {
  if (value === "1/2") return "50%";
  if (value.includes("/")) return value.replace("1/2", "50%");
  if (value.match(/^\d+$/)) return `${value}px`;
  return value;
};

// Adjust positions for mobile - bring icons closer to center and reduce spread
const adjustPositionForMobile = (value: string, axis: "x" | "y") => {
  if (!value) return value;

  // For mobile, reduce extreme positions
  if (value.includes("%")) {
    const percentage = parseFloat(value.replace("%", ""));
    if (axis === "x") {
      // Horizontal: bring left/right positions closer to center
      if (percentage < 30) return `${Math.max(15, percentage + 10)}%`;
      if (percentage > 70) return `${Math.min(85, percentage - 10)}%`;
    } else {
      // Vertical: bring top/bottom positions closer to center
      if (percentage < 25) return `${Math.max(20, percentage + 5)}%`;
      if (percentage > 75) return `${Math.min(80, percentage - 5)}%`;
    }
  }
  return value;
};

export { getResponsiveSize, getPositionValue, adjustPositionForMobile };
