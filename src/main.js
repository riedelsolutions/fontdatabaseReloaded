import './styles/main.css';
import fonts from './data/fonts.json';
import { findMatches } from './modules/fontEngine.js';
import { createFontCombobox } from './modules/combobox.js';
import { initTheme } from './modules/theme.js';

const directionSelect = document.getElementById('direction-select');
const characteristicSelect = document.getElementById('characteristic-select');
const fontCombobox = document.getElementById('font-combobox');
const resultsSection = document.getElementById('results');
const resultsHeading = document.getElementById('results-heading');
const resultsList = document.getElementById('results-list');
const themeToggle = document.getElementById('theme-toggle');

initTheme(themeToggle);

let selectedFont = null;

const combobox = createFontCombobox({
  root: fontCombobox,
  fonts,
  onSelect: (font) => {
    selectedFont = font;
    runQuery();
  },
});

characteristicSelect.addEventListener('change', runQuery);
directionSelect.addEventListener('change', runQuery);

function runQuery() {
  const direction = directionSelect.value;
  const characteristic = characteristicSelect.value;
  if (!characteristic || !selectedFont) return;

  const matches = findMatches(fonts, characteristic, selectedFont.name, direction);
  renderResults(direction, characteristic, selectedFont.name, matches);
}

function renderResults(direction, characteristic, fontName, matches) {
  resultsSection.hidden = false;
  resultsHeading.textContent = `fonts ${direction} ${characteristic} than ${fontName}`;
  resultsList.innerHTML = '';

  if (matches.length === 0) {
    const li = document.createElement('li');
    li.className = 'results__empty';
    li.textContent = `No fonts found ${direction} ${characteristic} than ${fontName}.`;
    resultsList.appendChild(li);
    return;
  }

  matches.forEach((font) => {
    const li = document.createElement('li');
    li.className = 'results__item';

    const name = document.createElement('span');
    name.className = 'results__item-name';
    name.textContent = font.name;
    name.style.fontFamily = `"${font.name}", sans-serif`;

    const link = document.createElement('a');
    link.className = 'results__get';
    link.textContent = 'Get';
    link.href = font.link || '#';
    link.target = '_blank';
    link.rel = 'noopener';

    li.append(name, link);
    resultsList.appendChild(li);
  });
}
