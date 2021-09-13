const inline = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 5%"
}
const Footer = () => {
    return (
        <section style={inline}>
            <p style={{ width: "54%" }}>&copy; The Design Shop</p>
            <div style={{ margin: "1em 0", width: "27%" }}>
                <a>Disclaimer</a>
                <a>Shop</a>
                <a>Weekly picks</a>
            </div>
            <p style={{ width: "23%" }}>Made/Curated by <a>Ruby Bacanovic</a></p>
        </section >
    );
}

export default Footer;