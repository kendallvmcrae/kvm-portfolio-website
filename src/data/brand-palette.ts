/**
 * Regenerative UX — Master Brand Color Palette
 * Kendall McRae Portfolio
 *
 * Gradient narrative (top of page = sky/sunset, bottom = earth/roots):
 *   Zone 5 (Sunset & Dusk)  ← hero / page top
 *   Zone 4 (Golden Hour)
 *   Zone 3 (Stone & Sea)
 *   Zone 2 (Chestnut & Driftwood)
 *   Zone 1 (Forest & Fence)  ← page bottom / footer
 *
 * Primary:   Greens, Blues
 * Secondary: Golds, Weathered Stone
 * Accent:    Rust/Terracotta, Lavender/Dusk, Sunset Peach
 */

export const palette = {

  // ─── Foundations — Earth & Stone ───────────────────────────────────────────
  foundation: {
    basalt:          { hex: '#2C2825', name: 'Basalt',          use: 'Deep shadow / darkest text' },
    darkEarth:       { hex: '#4A403A', name: 'Dark Earth',      use: 'Headings / nav' },
    weatheredStone:  { hex: '#7D6E63', name: 'Weathered Stone', use: 'Body text / borders' },
    paleCliff:       { hex: '#B5A99E', name: 'Pale Cliff',      use: 'Muted text / tags' },
    seaMist:         { hex: '#EDE8E2', name: 'Sea Mist',        use: 'Card / section bg' },
    shoreSand:       { hex: '#F7F4F0', name: 'Shore Sand',      use: 'Page background' },
  },

  // ─── Earth Browns — Chestnut, Maroon & Clay ────────────────────────────────
  earthBrowns: {
    deepMaroon:  { hex: '#3D1A1A', name: 'Deep Maroon',  use: 'Darkest maroon depth' },
    chestnut:    { hex: '#6B2D2D', name: 'Chestnut',     use: 'Reddish-brown accent / gradient' },
    redwood:     { hex: '#8B4513', name: 'Redwood',      use: 'Mid earth brown' },
    siennaClay:  { hex: '#A0522D', name: 'Sienna Clay',  use: 'Warm clay tone' },
    warmClay:    { hex: '#C4956A', name: 'Warm Clay',    use: 'Light clay / gradient bridge' },
    driftwood:   { hex: '#E0C4A8', name: 'Driftwood',    use: 'Pale warm brown tint' },
  },

  // ─── Fence Post & Bark Browns ──────────────────────────────────────────────
  barkBrowns: {
    charredPost:   { hex: '#2E1F14', name: 'Charred Post',   use: 'Darkest fence/bark — very deep warm brown' },
    fenceLine:     { hex: '#4D3322', name: 'Fence Line',     use: 'Old weathered post — reads near-grey but warm' },
    barkBrown:     { hex: '#6B4A34', name: 'Bark Brown',     use: 'Tree trunk / mid-bark' },
    driftwoodDark: { hex: '#8C6652', name: 'Driftwood Dark', use: 'Bridge between bark and weathered stone' },
  },

  // ─── Primary — Greens (Meadow, Moss & Canopy) ──────────────────────────────
  greens: {
    forestDark:   { hex: '#2A3D2E', name: 'Forest Dark',   use: 'Dark section bg / deepest green' },
    canopy:       { hex: '#4A6741', name: 'Canopy',         use: 'Primary green accent' },
    sageHillside: { hex: '#6B8C5A', name: 'Sage Hillside', use: 'Hover / secondary green' },
    dryMeadow:    { hex: '#96A882', name: 'Dry Meadow',    use: 'Soft green accent / border' },
    paleLichen:   { hex: '#C4D4B0', name: 'Pale Lichen',   use: 'Light tag bg / tint' },
    morningGrass: { hex: '#E8EEE0', name: 'Morning Grass', use: 'Lightest green section bg' },
  },

  // ─── Primary — Blues (Mist, Water & Sky) ───────────────────────────────────
  blues: {
    deepSlate:   { hex: '#1E3040', name: 'Deep Slate',   use: 'Darkest blue — deep ocean / night sky' },
    oceanSlate:  { hex: '#3A4E5E', name: 'Ocean Slate',  use: 'Dark section bg / near-grey blue' },
    coastalBlue: { hex: '#6A8A9E', name: 'Coastal Blue', use: 'Links / secondary accent' },
    tidewash:    { hex: '#A8BFC9', name: 'Tidewash',     use: 'Subtle blue highlight' },
    fogLight:    { hex: '#D6E4EA', name: 'Fog Light',    use: 'Cool section bg tint' },
  },

  // ─── Secondary — Gold & Amber ───────────────────────────────────────────────
  golds: {
    darkGold:       { hex: '#8C6D1F', name: 'Dark Gold',       use: 'Bold warm accent / CTA depth' },
    wildflowerGold: { hex: '#C49A2A', name: 'Wildflower Gold', use: 'Primary warm accent' },
    amberLichen:    { hex: '#D4B84A', name: 'Amber Lichen',    use: 'Hover / highlight' },
    dryGrass:       { hex: '#EDD87A', name: 'Dry Grass',       use: 'Warm tag bg / glow' },
    sunlitSand:     { hex: '#F5ECC4', name: 'Sunlit Sand',     use: 'Warm section bg tint' },
  },

  // ─── Accent — Rust & Terracotta ────────────────────────────────────────────
  rust: {
    ironRust:        { hex: '#8B3A2A', name: 'Iron Rust',        use: 'Gradient depth / dark rust' },
    terracottaBluff: { hex: '#C4622D', name: 'Terracotta Bluff', use: 'Gradient accent / horizon tail' },
    amberRust:       { hex: '#D4894A', name: 'Amber Rust',       use: 'Gradient bridge — rust to gold' },
    warmDune:        { hex: '#E8C98A', name: 'Warm Dune',        use: 'Soft warm tint' },
  },

  // ─── Accent — Sunset Peach & Blush ─────────────────────────────────────────
  sunset: {
    goldenHour:   { hex: '#F2C08A', name: 'Golden Hour',   use: 'Sunset entry / warm peach' },
    apricotGlow:  { hex: '#EFA882', name: 'Apricot Glow',  use: 'Mid-sunset warm peach' },
    salmonBluff:  { hex: '#E8907A', name: 'Salmon Bluff',  use: 'Deep sunset / warm salmon' },
    roseMist:     { hex: '#D4A0A0', name: 'Rose Mist',     use: 'Sunset fade / blush' },
  },

  // ─── Accent — Lavender Grey & Dusk ─────────────────────────────────────────
  lavender: {
    deepDusk:      { hex: '#3D3A4E', name: 'Deep Dusk',      use: 'Dark lavender / deep dusk' },
    slateLavender: { hex: '#6B6880', name: 'Slate Lavender', use: 'Secondary lavender accent' },
    mistyHeather:  { hex: '#9E9BB4', name: 'Misty Heather',  use: 'Subtle lavender highlight' },
    fogLavender:   { hex: '#C8CAD8', name: 'Fog Lavender',   use: 'Cool lavender section tint' },
    paleDusk:      { hex: '#E8E8F0', name: 'Pale Dusk',      use: 'Lightest cool bg' },
    duskMauve:     { hex: '#B8AABB', name: 'Dusk Mauve',     use: 'Horizon whisper / gradient tail' },
  },

} as const;

/**
 * Horizon Gradient — CSS string (reversed: sunset top → earth bottom)
 *
 * Zone 5 (top)  → Sunset & Dusk
 * Zone 4        → Golden Hour
 * Zone 3        → Stone & Sea
 * Zone 2        → Chestnut & Driftwood
 * Zone 1 (base) → Forest & Fence
 */
export const horizonGradient = {
  // Full narrative gradient — use as page background
  vertical: `linear-gradient(to bottom,
    #B8AABB 0%,
    #D4A0A0 4%,
    #E8907A 9%,
    #EFA882 15%,
    #F2C08A 21%,
    #E8C98A 27%,
    #C49A2A 34%,
    #8C6D1F 41%,
    #6A8A9E 48%,
    #3A4E5E 55%,
    #7D6E63 61%,
    #8C6652 66%,
    #6B2D2D 71%,
    #6B4A34 76%,
    #4D3322 82%,
    #6B8C5A 88%,
    #4A6741 94%,
    #2A3D2E 100%
  )`,

  // Diagonal — hero section treatment
  diagonal: `linear-gradient(135deg,
    #B8AABB 0%,
    #E8907A 12%,
    #F2C08A 22%,
    #C49A2A 34%,
    #6A8A9E 48%,
    #3A4E5E 55%,
    #7D6E63 62%,
    #6B2D2D 70%,
    #4D3322 78%,
    #4A6741 88%,
    #2A3D2E 100%
  )`,
};
