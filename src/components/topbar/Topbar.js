import "./topbar.scss";
import {Person, } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Pamela Aguirre</a>
                    <div className="itemContainer">
                        <Person></Person>
                        <span>+54 9 3816676579</span>
                    </div>
                </div>
                
                <div className="right">
                    lado derecho
                </div>
            </div>
        </div>
    )
}
