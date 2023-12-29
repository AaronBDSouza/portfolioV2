import "./menu.scss";

export default function Menu({menuOpen,setMenuOpen}) {
    const adjustScroll = async() => {
        let slider = document.getElementsByClassName("app")[0];
        setTimeout(() => {
            slider.scrollBy(0, -100);
        }, 500);
    }

    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#intro" onClick={() => adjustScroll()}>Home</a>
                </li>
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#about" onClick={() => adjustScroll()}>About</a>
                </li>
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#skills" onClick={() => adjustScroll()}>Skills & Tech</a>
                </li>
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#experience" onClick={() => adjustScroll()}>XP & Projects</a>
                </li>

                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#gallery" onClick={() => adjustScroll()}>Gallery</a>
                </li>                
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
{/* <li onClick={ () => setMenuOpen(false) }>
    <a href="#portfolio">Portfolio</a>
</li> */}
{/* <li onClick={ () => setMenuOpen(false) }>
    <a href="#projectsList">Projects</a>
</li> */}
{/* <li onClick={ () => setMenuOpen(false) }>
    <a href="#testimonials">Testimonials</a>
</li> */}