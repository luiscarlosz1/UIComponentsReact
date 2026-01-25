type Tokens = Record<string, string>;

export function applyThemeTokens(tokens: Tokens) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
