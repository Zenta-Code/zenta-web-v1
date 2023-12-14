import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@sanity/icons";

const DarkModeBtn = () => {
  const { theme, setTheme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <button
      className={`relative inline-block w-16 h-8 rounded-full transition duration-300 ease-in-out ${
        darkMode ? "bg-gray-300" : "bg-gray-400"
      } dark:text-[#D8A31A] text-blue-900 outline outline-0 outline-offset-4 hover:outline-2 bg-[#ffffff] dark:bg-[#121213] p-2 rounded-full`}
      onClick={() => {
        setTheme(darkMode ? "light" : "dark");
      }}

  aria-label="Toggle dark mode"
    >
      <div
        className="absolute left-0 top-0 w-8 h-8 rounded-full"
        style={{
          backgroundColor: darkMode ? `#1a202c` : `#ffffff`,
          transition: "transform 0.3s ease-in-out",
          transform: darkMode ? "translateX(101%)" : "translateX(0)",
        }}
      >
        {darkMode ? (
          <div className="h-8 w-8 flex items-center justify-center text-yellow-300">
            <MoonIcon className="h-6 w-6" />
          </div>
        ) : (
          <div className="h-8 w-8 flex items-center justify-center text-yellow-500">
            <SunIcon className="h-6 w-6" />
          </div>
        )}
      </div>
    </button>
  );
};

export default DarkModeBtn;