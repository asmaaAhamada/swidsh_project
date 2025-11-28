import { Outlet } from "react-router-dom";
import DrawerAppBar from "./appBar";

export default function Layout({ toggleMode, mode }){
    return(
        <>
      <DrawerAppBar toggleMode={toggleMode} mode={mode}  />
      <Outlet /> 
    </>
    )
}