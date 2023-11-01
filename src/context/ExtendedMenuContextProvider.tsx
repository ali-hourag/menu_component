import { createContext, useState } from "react";


type ThemeModeContext = {
    extendedMenu: boolean,
    changeExtendedMenu: () => void
}


export const extendedMenuContext = createContext<ThemeModeContext>({ extendedMenu: false, changeExtendedMenu: () => { } });

const ExtendedMenuContextProvider = ({ ...props }) => {
    const [extendedMenu, setExtendedMenu] = useState<boolean>(false);

    const changeExtendedMenu = () => {
        setExtendedMenu(!extendedMenu);
    }

    return (
        <extendedMenuContext.Provider value={{ extendedMenu, changeExtendedMenu }}>
            {props.children}
        </extendedMenuContext.Provider>
    )
}

export default ExtendedMenuContextProvider;