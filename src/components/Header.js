const head = {
    display: "flex",
    justifyContent: "space-between",
    margin: "2% 5%"
}
const logo = {
    fontSize: "1em",
}
const menu = {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
}
const inline = {
    display: "inline",
}



const Header = () => {
    return (
        <header style={head}>
            <div>
                <h1 style={logo}>THE DESIGN SHOP</h1>
            </div>
            <ul style={menu}>
                <li style={inline}>Featured</li>
                <li style={inline}>Lifestyle</li>
                <li style={inline}>Books</li>
                <li style={inline}>Digital</li>
                <li style={inline}>Weekly Picks</li>
                <li style={inline}>The Design Blog</li>
            </ul>
        </header >
    );
}

export default Header;