import './styles/navbar.css'

function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Home
            </a>
            <ul>
                <CustomLink href={"/registers"}>Registers</CustomLink>
                <CustomLink href={"/login"}>Iniciar sesion</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}

export default Navbar;  