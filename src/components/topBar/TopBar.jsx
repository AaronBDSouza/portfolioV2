import './topBar.scss'
import {Person, Mail} from "@material-ui/icons";

export default function TopBar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">arndsz7.com</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span><a href="tel:919638527410">+91 9527174032</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span><a href="mailto:arrow123@gmail.com">arnbptdsz1000@gmail.com</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
