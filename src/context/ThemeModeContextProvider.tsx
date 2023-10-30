import { createContext, useState } from "react"

enum ThemeModeType {
    DARK_MODE = "dark-mode",
    LIGHT_MODE = "light-mode"
}

type ThemeModeContext = {
    themeMode: ThemeModeType,
    changeThemeMode: (newThemeMode: ThemeModeType) => void
}

export const themeModeContext = createContext<ThemeModeContext>({ themeMode: ThemeModeType.LIGHT_MODE, changeThemeMode: () => { } });

const ThemeModeContextProvider = ({ ...props }) => {
    const [themeMode, setThemeMode] = useState<ThemeModeType>(ThemeModeType.LIGHT_MODE);
    const changeThemeMode = (newThemeMode: ThemeModeType) => {
        setThemeMode(newThemeMode);
    }
    return (
        <themeModeContext.Provider value={{ themeMode, changeThemeMode }}>
            {props.children}
        </themeModeContext.Provider>
    )
}

export default ThemeModeContextProvider