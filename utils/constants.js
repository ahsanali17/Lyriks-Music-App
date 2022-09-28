export const SHAZAM_CORE_API_URL = 'https://shazam-core.p.rapidapi.com/v1';
export const SHAZAM_CORE_API_HOST = 'shazam-core.p.rapidapi.com';

export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  blacks: {
    100: 'hsl(0deg 0% 0%)',
    200: 'hsl(0deg 0% 12%)',
  },
  grays: {
    100: 'hsl(0deg 0% 60%)',
    200: 'hsl(0deg 0% 80%)',
  },
  gradients: {
    gold: `radial-gradient(
      ellipse farthest-corner at right bottom,
      hsl(49deg 99% 61%) 0%,
      hsl(40deg 98% 59%) 8%,
      hsl(41deg 60% 39%) 30%,
      hsl(42deg 49% 36%) 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      hsl(0deg 0% 100%) 0%,
      hsl(60deg 100% 84%) 8%,
      hsl(44deg 54% 61%) 25%,
      hsl(42deg 50% 24%) 62.5%,
      hsl(42deg 50% 24%) 100%
    )`,
    goldTransparent: `radial-gradient(
      ellipse farthest-corner at right bottom,
      hsl(49deg 99% 61% /0.5) 0%,
      hsl(40deg 98% 59% /0.5) 8%,
      hsl(41deg 60% 39% /0.5) 30%,
      hsl(42deg 49% 36% /0.5) 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      hsl(0deg 0% 100% /0.5) 0%,
      hsl(60deg 100% 84% /0.5) 8%,
      hsl(44deg 54% 61% /0.5) 25%,
      hsl(42deg 50% 24% /0.5) 62.5%,
      hsl(42deg 50% 24% /0.5) 100%
    )`,
  },
};
