import { useTheme } from '../../hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      title={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      aria-label={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
