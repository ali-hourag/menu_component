import { useContext } from "react";
import { extendedMenuContext } from "../../context/ExtendedMenuContextProvider";


export const useExtendedMenuContext = () => useContext(extendedMenuContext);