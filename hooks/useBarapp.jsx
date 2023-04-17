import { useContext } from "react";
import BarappContext from "../context/BarappProvider";

const useBarapp = () => {
    return useContext(BarappContext)
}

export default useBarapp;