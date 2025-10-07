import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
import { createContext, useContext ,useState} from 'react';
export const ThemeContext = createContext('dark');
function App() {
  const [theme,setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

export default App;
