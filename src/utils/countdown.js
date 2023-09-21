export const secondsToHMS = (seconds) => {
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  let hDisplay = h > 0 ? h + ":" : "00:";
  let mDisplay = m > 0 ? m + ":" : "00:";
  let sDisplay = s > 0 ? s + "" : "00";

  if (h < 10 && hDisplay.length === 2) {
    hDisplay = "0" + hDisplay;
  }
  if (m < 10 && mDisplay.length === 2) {
    mDisplay = "0" + mDisplay;
  }
  if (s < 10 && sDisplay.length === 1) {
    sDisplay = "0" + sDisplay;
  }

  return hDisplay + mDisplay + sDisplay;
};
