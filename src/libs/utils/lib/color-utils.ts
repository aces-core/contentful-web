export const isLight = (color: string, tolerance: number = 125): boolean => {
  const rgb = parseInt(color.replace("#", ""), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  if (brightness <= tolerance) {
    return true;
  } else {
    return false;
  }
};

export const isDark = (color: string, tolerance: number = 125): boolean => {
  const rgb = parseInt(color.replace("#", ""), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  if (brightness >= tolerance) {
    return true;
  } else {
    return false;
  }
};
