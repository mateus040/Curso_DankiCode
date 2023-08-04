import './styles/Header.css';

function Header(props) {
    return (
        <div className="Header">
            <div className="header__logo">
                <h2>Logo</h2>
            </div>

            <div className="header__menu">
                <a href="">Home</a>
                <a href="">Sobre</a>
            </div>
        </div>
    );
}

export default Header;
