
import Dashboard from './pages/dashboard';
import Header from './layouts/header';
import { useState, useEffect } from 'react';
import { themes, getDefaultTheme } from './theme/themes';
import { applyThemeTokens } from './theme/applyThemeTokens';

function App() {
  const [currentThemeId, setCurrentThemeId] = useState(getDefaultTheme().id);

  useEffect(() => {
    const activeTheme = themes.find(t => t.id === currentThemeId);
    if (activeTheme) {
      applyThemeTokens(activeTheme.tokens);
    }
  }, [currentThemeId]);

  const handleThemeChange = (themeId) => {
    setCurrentThemeId(themeId);
  };

  return (
    <>
      <Header
        themes={themes}
        currentThemeId={currentThemeId}
        onThemeChange={handleThemeChange}
      />
      <Dashboard />
    </>
  );
}

export default App;