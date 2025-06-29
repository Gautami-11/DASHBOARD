import useTheme from './Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const toggleTheme = () => {
        if (themeMode === 'dark') {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    return (
        <button
            onClick={toggleTheme}
           className="
  text-2xl 
  m-3
  rounded-4xl 
  cursor-pointer 
  transition 
  shadow-5xl
  p-3.5
  hover:bg-gray-200 
  
  focus:outline-none
"
        >
            {themeMode === 'dark' ? (
                <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
            ) : (
                <FontAwesomeIcon icon={faMoon} className="text-gray-800" />
            )}
        </button>
    );
}
