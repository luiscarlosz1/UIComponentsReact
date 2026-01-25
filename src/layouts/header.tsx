import './header.scss';

import { Theme } from '../theme/themes';

interface HeaderProps {
  themes: Theme[];
  currentThemeId: string;
  onThemeChange: (themeId: string) => void;
}

export default function Header({ themes, currentThemeId, onThemeChange }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__left">
        <span className="app-header__title">UIComponentsReact</span>
      </div>
      <div className="app-header__center">
        <div className="app-header__palette app-header__palette--fan">
          {themes.map((theme) => (
            <span
              key={theme.id}
              className={
                'app-header__color' +
                (currentThemeId === theme.id ? ' app-header__color--active' : '') +
                (theme.id === 'blue' ? ' app-header__color--center' : '')
              }
              style={{ backgroundColor: theme.primaryColor }}
              title={theme.name}
              onClick={() => onThemeChange(theme.id)}
            />
          ))}
          <div className="app-header__palette-rivet">
            <div className="app-header__palette-rivet-inner"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
