/**
 * A minimal searchable dropdown. Native <select> with 73 options is painful
 * to use, especially on mobile, so this swaps in a text input that filters
 * the list as you type and a click (or Enter) selects a font.
 */
export function createFontCombobox({ root, fonts, onSelect }) {
  const input = root.querySelector('.font-input');
  const list = root.querySelector('.font-options');

  let filtered = fonts;
  let activeIndex = -1;

  function render() {
    list.innerHTML = '';

    if (filtered.length === 0) {
      const empty = document.createElement('li');
      empty.className = 'font-options__empty';
      empty.textContent = 'No fonts match';
      list.appendChild(empty);
      return;
    }

    filtered.slice(0, 50).forEach((font, i) => {
      const item = document.createElement('li');
      item.textContent = font.name;
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false');
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        select(font);
      });
      list.appendChild(item);
    });
  }

  function open() {
    filtered = filterFonts(input.value);
    activeIndex = -1;
    list.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    render();
  }

  function close() {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
  }

  function filterFonts(query) {
    const q = query.trim().toLowerCase();
    if (!q) return fonts;
    return fonts.filter((f) => f.name.toLowerCase().includes(q));
  }

  function select(font) {
    input.value = font.name;
    close();
    onSelect(font);
  }

  input.addEventListener('input', () => {
    filtered = filterFonts(input.value);
    activeIndex = -1;
    list.hidden = false;
    render();
  });

  input.addEventListener('focus', open);

  input.addEventListener('keydown', (e) => {
    if (list.hidden && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      open();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, filtered.length - 1);
      render();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      render();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const chosen = filtered[activeIndex] ?? filtered[0];
      if (chosen) select(chosen);
    } else if (e.key === 'Escape') {
      close();
    }
  });

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) close();
  });

  return {
    getValue: () => input.value,
  };
}
