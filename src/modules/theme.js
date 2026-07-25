// The original toggle used `if (x.className = "toHide")`, an assignment
// instead of a comparison, so the condition was always truthy and the
// toggle never actually flipped. This version just tracks state directly.

const STORAGE_KEY = 'fontdatabase-theme';

export function initTheme(toggleEl) {
  const saved = localStorage.getItem(STORAGE_KEY);
  const theme = saved === 'night' ? 'night' : 'day';
  apply(theme);

  toggleEl.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'day';
    const next = current === 'day' ? 'night' : 'day';
    apply(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}

function apply(theme) {
  if (theme === 'night') {
    document.documentElement.setAttribute('data-theme', 'night');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}
