import { useEffect } from "react"

// inspiration: https://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/
const moons = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
// const clocks = ["🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛"];

export const useUrlSpinner = loading => {
  const sequence = moons
  const speed = 50

  useEffect(() => {
    // check if we're in a 'loading' state
    if (loading) {
      // save old URL hash so we can reset in cleanup
      const oldHash = window.location.hash

      // run interval and use sequence to update URL hash
      let i = 0;
      let interval = setInterval(() => {
        window.location.hash = sequence[i];
        i = (i + 1) % sequence.length;
      }, speed);

      // do some cleanup when the effect ends:
      return () => {
        // remove the loading hash
        if (oldHash === "") {
          window.history.pushState(null, null, window.location.href.split('#')[0])
        } else {
          window.location.hash = oldHash
        }
        // reset history
        clearInterval(interval);
      };
    }
  }, [loading, sequence, speed]);
};