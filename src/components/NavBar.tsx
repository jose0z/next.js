import Link from "next/link";


export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Criptoplanet</h1>
            </div>
            <ul className="navbar-menu">
                <li><a href="#market">Market</a></li>
                <li><a href="#watchlist">Watchlist</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#learn">Learn</a></li>
            </ul>
            <div className="navbar-settings">

                <h5>English</h5>


                <div className="settings2">
                    <h5>USD</h5>
                </div>


            </div>
            <div className="navbar-buttons">
                <button className="btn-signin">Sign in</button>
                {/* Envolver el botón Register con Link */}
                <Link href="/perfil">
                    <button className="btn-register">Register</button>
                </Link>
            </div>

        </nav>

    );
}

