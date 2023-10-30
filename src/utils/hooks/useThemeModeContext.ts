import { useContext } from "react";
import { themeModeContext } from "../../context/ThemeModeContextProvider";

export const useThemeModeContext = () => useContext(themeModeContext);