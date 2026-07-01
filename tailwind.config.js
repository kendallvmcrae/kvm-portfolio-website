/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // ── Foundations — Earth & Stone ──────────────────────────────────────
        basalt:          '#2C2825',
        'dark-earth':    '#4A403A',
        stone: {
          // Keeping Tailwind's built-in stone scale + our custom named stops
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          // Custom
          weathered: '#7D6E63',
          cliff:     '#B5A99E',
          mist:      '#EDE8E2',
          sand:      '#F7F4F0',
        },

        // ── Earth Browns — Chestnut, Maroon & Clay ───────────────────────────
        maroon:    '#3D1A1A',
        chestnut:  '#6B2D2D',
        redwood:   '#8B4513',
        sienna:    '#A0522D',
        clay: {
          warm: '#C4956A',
          pale: '#E0C4A8',
        },

        // ── Fence Post & Bark Browns ─────────────────────────────────────────
        bark: {
          charred:   '#2E1F14',
          fence:     '#4D3322',
          mid:       '#6B4A34',
          driftwood: '#8C6652',
        },

        // ── Primary — Greens ─────────────────────────────────────────────────
        forest:  '#2A3D2E',
        canopy:  '#4A6741',
        sage:    '#6B8C5A',
        meadow:  '#96A882',
        lichen:  '#C4D4B0',
        grass:   '#E8EEE0',

        // ── Primary — Blues ──────────────────────────────────────────────────
        slate: {
          deep:    '#1E3040',
          ocean:   '#3A4E5E',
          coastal: '#6A8A9E',
          tide:    '#A8BFC9',
          fog:     '#D6E4EA',
        },

        // ── Secondary — Gold & Amber ─────────────────────────────────────────
        gold: {
          dark:       '#8C6D1F',
          wildflower: '#C49A2A',
          amber:      '#D4B84A',
          dry:        '#EDD87A',
          sunlit:     '#F5ECC4',
        },

        // ── Accent — Rust & Terracotta ───────────────────────────────────────
        rust:      '#8B3A2A',
        terracotta: {
          // Keeping original scale for backward compat with existing classes
          50:  '#fdf7f0',
          100: '#faeee1',
          200: '#f4dac2',
          300: '#ecc199',
          400: '#e2a06e',
          500: '#da844c',
          600: '#cc6d41',
          700: '#aa5637',
          800: '#884633',
          900: '#6e3a2c',
          // Named stops
          bluff:  '#C4622D',
          amber:  '#D4894A',
          dune:   '#E8C98A',
        },

        // ── Accent — Sunset Peach & Blush ────────────────────────────────────
        sunset: {
          golden:  '#F2C08A',
          apricot: '#EFA882',
          salmon:  '#E8907A',
          rose:    '#D4A0A0',
        },

        // ── Accent — Lavender Grey & Dusk ────────────────────────────────────
        dusk:     '#3D3A4E',
        lavender: {
          deep:  '#3D3A4E',
          slate: '#6B6880',
          misty: '#9E9BB4',
          fog:   '#C8CAD8',
          pale:  '#E8E8F0',
          mauve: '#B8AABB',
        },

      },

      // ── Typography ──────────────────────────────────────────────────────────
      fontFamily: {
        sans: [
          'Inter Variable',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },

      // ── Spacing ─────────────────────────────────────────────────────────────
      spacing: {
        section: '2rem',
      },

      // ── Background gradients ─────────────────────────────────────────────────
      backgroundImage: {
        // Horizon gradient — reversed (sunset top → earth bottom)
        'horizon-vertical': `linear-gradient(to bottom,
          #B8AABB 0%, #D4A0A0 4%, #E8907A 9%, #EFA882 15%, #F2C08A 21%,
          #E8C98A 27%, #C49A2A 34%, #8C6D1F 41%, #6A8A9E 48%, #3A4E5E 55%,
          #7D6E63 61%, #8C6652 66%, #6B2D2D 71%, #6B4A34 76%, #4D3322 82%,
          #6B8C5A 88%, #4A6741 94%, #2A3D2E 100%)`,
        // Diagonal — hero section
        'horizon-diagonal': `linear-gradient(135deg,
          #B8AABB 0%, #E8907A 12%, #F2C08A 22%, #C49A2A 34%, #6A8A9E 48%,
          #3A4E5E 55%, #7D6E63 62%, #6B2D2D 70%, #4D3322 78%,
          #4A6741 88%, #2A3D2E 100%)`,
        // Light section gradient
        'horizon-light': `linear-gradient(to right,
          #E8EEE0, #C4D4B0, #EDE8E2, #F5ECC4, #F2C08A, #E8E8F0)`,
      },
    },
  },
  plugins: [],
}
