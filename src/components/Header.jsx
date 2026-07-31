import { Link } from "react-router-dom";

function Header() {
    return (
        <header
            style={{
                backgroundColor: "#282c34",
                color: "white",
                padding: "15px 30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2>🎬 Movie App</h2>

            <nav>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        marginRight: "20px",
                        textDecoration: "none",
                    }}
                >
                    Trang chủ
                </Link>

                <Link
                    to="/about"
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    Giới thiệu
                </Link>
            </nav>
        </header>
    );
}

export default Header;