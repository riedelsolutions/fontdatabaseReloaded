# What changed and why

## Setup
This is now a Vite project instead of static files opened directly.

```
npm install
npm run dev       # local dev server
npm run build     # outputs to dist/
```

I couldn't run `npm install` myself in this environment (no network access),
so please run it locally before `npm run dev` to pull down Vite.

## Editing rankings / adding fonts (data-source/)
Rank numbers in fonts.json are inconvenient to hand-edit directly (insert
one font, renumber 72 others). So the actual source of truth is now:

- `data-source/formality-order.txt` — one font name per line, ordered
  informal → formal
- `data-source/serif-order.txt` — one font name per line, ordered
  sans/minimal → serif
- `data-source/fonts-registry.json` — name, link, and image path per font

To re-rank: just move lines around in the two .txt files.
To add a font (including new Google Fonts): add one entry to
fonts-registry.json, and add its name as a line in both order files
(wherever it belongs).

Then regenerate the real data file:

```
npm run build:data
```

This writes src/data/fonts.json and will error out with specifics if a
font is missing from a list or misspelled between files, instead of
silently breaking like the old duplicated-array setup did.

## Data model (src/data/fonts.json)
The old app.js defined every font as a JS object, then hand-copied each one
into four separate ranked arrays (one per characteristic: formal, informal,
serif, minimal). That's five places to edit per font (the object, the HTML
dropdown, and 4 arrays) and it already caused a real bug: `serifArray` and
`sansSerifArray` disagreed on whether Corbel or Ebrima counts as more serif,
because someone edited one list and not its mirror.

I checked all four arrays against each other and found there are really
only two independent axes being curated:
- formality (the "formal" and "informal" arrays are exact mirrors)
- serif-ness (the "serif" and "minimal" arrays are near-mirrors, except
  for that one Corbel/Ebrima swap)

So fonts.json now stores each font once, with two numbers:
`formalityRank` and `serifRank`. To add a font, add one object with a
rank on each axis relative to its neighbors. See src/modules/fontEngine.js
for how "more formal than X" etc. is derived from those two numbers.

## UI
- The 73-option native `<select>` for the reference font is replaced with
  a searchable combobox (src/modules/combobox.js) — type to filter,
  arrow keys/click to pick.
- Day/night toggle bug fixed: the original used `if (x = "toHide")`,
  an assignment, not a comparison, so it always evaluated true and the
  toggle never worked. src/modules/theme.js tracks state explicitly and
  persists the choice in localStorage.
- Typography: BBH Bartle for the "fontdatabase" title and the "Get"
  button, Carrois Gothic for all other UI chrome. Each result's own name
  renders in that actual font family, same as the original.
- Results header sticks to the top while scrolling a long results list.

## Known gaps / next steps
- Font previews rely on the visitor's OS/browser having that font
  installed (same as the original — most of these are commercial fonts
  without a web-safe fallback). Worth deciding later if you want to
  self-host free alternatives for a preview, vs keeping it as-is.
- No build step ran yet in this environment — please run `npm install`
  and `npm run dev` locally to confirm everything renders as expected
  before deploying.
