import StatsSection from "./box_num";
import CardPage from "./fetures";
import HomePage from "./homePage";
import QuesPage from "./qustionPage";
import RedoAt from "./redo";

export default function WelcomPage(){
    return(
        <>
        <HomePage/>
        <StatsSection/>
        <QuesPage/>
        <CardPage/>
        <RedoAt/>
        </>
    )
}