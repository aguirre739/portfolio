import "./topbar.scss";
import {Phone, Mail} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">CV</a>
                    <div className="itemContainer">
                        <Phone className="icon"></Phone>
                        <span>+54 9 3816676579</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"></Mail>
                        <span>paguirre739@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
