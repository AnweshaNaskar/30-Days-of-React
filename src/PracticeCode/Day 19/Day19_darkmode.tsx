import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    height: '100vh',
    textAlign: 'center' as const
  };

  return (
    <div style={styles}>
      <p>The current theme is <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Content;