// The original app kept four hand-ordered arrays (one per characteristic),
// each a full copy of every font object. Editing a font meant updating it
// in 4 places by hand, which is exactly how the Corbel/Ebrima ordering bug
// happened (see README-REBUILD.md).
//
// In reality there are only two underlying axes to the curation:
//   - formalityRank: 0 = most informal/playful, higher = more formal
//   - serifRank:     0 = most sans/minimal,     higher = more serif
// Every characteristic is just "which axis, which direction" against those
// two ranks, computed once per font in data/fonts.json.

const CHARACTERISTICS = {
  formal:   { axis: 'formalityRank', direction: 'higher' },
  informal: { axis: 'formalityRank', direction: 'lower' },
  serif:    { axis: 'serifRank',     direction: 'higher' },
  minimal:  { axis: 'serifRank',     direction: 'lower' },
};

/**
 * Returns fonts more/less `characteristic` than `referenceFont`, ordered
 * from closest to most extreme (matching the original app's behaviour).
 * `direction` is 'more' or 'less', from the first dropdown; it flips
 * which side of the reference font's rank we're looking at.
 */
export function findMatches(fonts, characteristic, referenceFontName, direction = 'more') {
  const rule = CHARACTERISTICS[characteristic];
  if (!rule) return [];

  const reference = fonts.find((f) => f.name === referenceFontName);
  if (!reference) return [];

  const targetRank = reference[rule.axis];
  const wantHigher = direction === 'less' ? rule.direction !== 'higher' : rule.direction === 'higher';

  if (wantHigher) {
    return fonts
      .filter((f) => f[rule.axis] > targetRank)
      .sort((a, b) => a[rule.axis] - b[rule.axis]);
  }

  return fonts
    .filter((f) => f[rule.axis] < targetRank)
    .sort((a, b) => b[rule.axis] - a[rule.axis]);
}

export { CHARACTERISTICS };
