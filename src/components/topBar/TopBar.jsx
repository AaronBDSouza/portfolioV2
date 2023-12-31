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

                    <div className="iconLinks">
                        <div className="itemContainer linkedin">
                            <a href="https://www.linkedin.com/in/aaron-baptista-d-souza">
                                <LinkedIn className="icon"/>
                                <span className="iconLink">aaronbdsouza</span>
                            </a>
                            
                                {/* <a href="https://www.linkedin.com/in/aaron-baptista-d-souza"></a> */}
                            
                        </div>
                        <div className="itemContainer gmail">
                            <a href="mailto:aaronbdsouza7@gmail.com">
                                <Mail className="icon"/>
                            </a>
                            <span className="iconLink">
                                <a href="mailto:aaronbdsouza7@gmail.com">aaronbdsouza7@gmail.com</a>
                            </span>
                        </div>
                        <div className="itemContainer github">
                            <a href="https://github.com/aaronbdsouza">
                                <GitHub className="icon"/>
                            </a>
                            <span className="iconLink">
                                <a href="https://github.com/aaronbdsouza">aaronbdsouza</a>
                            </span>
                        </div>
                        <div className="itemContainer instagram">
                            <a href="https://www.instagram.com/arrowknight007/">
                                <Instagram className="icon"/>
                            </a>
                            <span className="iconLink">
                                <a href="https://www.instagram.com/arrowknight007/">arrowknight007</a>
                            </span>
                        </div>
                        <div className="itemContainer cv">
                            <a href="assets/cv/CV-AaronBDSouza.pdf" download="CV - Aaron B D Souza">
                                <Person className="icon"/>
                            </a>
                            <span className="iconLink">
                                <a href="assets/cv/CV-AaronBDSouza.pdf" download="CV - Aaron B D Souza">C.V</a>
                            </span>
                        </div>
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
