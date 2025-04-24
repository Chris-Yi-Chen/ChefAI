import chefClaude from '../assets/chefClaude.png';
export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <img src={chefClaude} alt="Chef Claude Logo" />
                <h1>
                    Chef Claude
                </h1>
            </nav>
        </header>
    );
}
