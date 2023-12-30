import { useState } from 'react';
import './topBar.scss';
import {Person, Mail, GitHub, LinkedIn, Instagram, KeyboardArrowDown} from "@material-ui/icons";

export default function TopBar({menuOpen,setMenuOpen}) {
    const [displayLinkShortcutsDiv, setDisplayLinkShortcutsDiv] = useState(false);
    
    function showLinksDropdown() {
        setDisplayLinkShortcutsDiv(!displayLinkShortcutsDiv);
    }

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="" className="logo">
                        <div className="websiteName">
                            <span>aaronbdsouza.</span>
                            <span>github.io</span>
                        </div>
                    </a>

                    <div className="displayLinkShortcutsMobile">
                        <KeyboardArrowDown className="topBarArrow" onClick={() => {showLinksDropdown();}}/>

                        <div className={displayLinkShortcutsDiv ? "linkShortcutsDiv" : "linkShortcutsDiv hidden"}>
                            <a href="https://www.linkedin.com/in/aaron-baptista-d-souza?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBrbv4ZdiTN6BLcbb1Rvp1Q%3D%3D"><LinkedIn className="icon linkedin"/></a>

                            <a href="mailto:aaronbdsouza7@gmail.com"><Mail className="icon gmail"/></a>

                            <a href="https://github.com/aaronbdsouza"><GitHub className="icon github"/></a>

                            <a href="https://www.instagram.com/arrowknight007/"><Instagram className="icon instagram"/></a>

                            <a href="assets/cv/CV-AaronBDSouza.pdf" download="CV - Aaron B D Souza"><Person className="icon cv"/></a>
                        </div>
                    </div>

                    <div className="itemContainer linkedin">
                        <LinkedIn className="icon"/>
                        <span><a href="https://www.linkedin.com/in/aaron-baptista-d-souza?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBrbv4ZdiTN6BLcbb1Rvp1Q%3D%3D">aaronbdsouza</a></span>
                    </div>
                    <div className="itemContainer gmail">
                        <Mail className="icon"/>
                        <span><a href="mailto:aaronbdsouza7@gmail.com">aaronbdsouza7@gmail.com</a></span>
                    </div>
                    <div className="itemContainer github">
                        <GitHub className="icon"/>
                        <span><a href="https://github.com/aaronbdsouza">aaronbdsouza</a></span>
                    </div>
                    <div className="itemContainer instagram">
                        <Instagram className="icon"/>
                        <span><a href="https://www.instagram.com/arrowknight007/">arrowknight007</a></span>
                    </div>
                    <div className="itemContainer cv">
                        <Person className="icon"/>
                        <span><a href="assets/cv/CV-AaronBDSouza.pdf" download="CV - Aaron B D Souza">C.V</a></span>
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
